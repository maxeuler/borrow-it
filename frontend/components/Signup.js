import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Form from './styles/Form';
import { Title } from './Item';

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION($email: String, $name: String, $password: String) {
		signup(email: $email, name: $name, password: $password) {
			id
			email
			name
		}
	}
`;

export const Footnote = styled.div`
	display: flex;
	button {
		font-size: 1.5rem;
		border: none;
		background: white;
		cursor: pointer;
		margin: 0 auto;

		.bold {
			font-weight: 900;
		}
	}
`;

class Signup extends Component {
	state = {
		email: '',
		name: '',
		password: '',
		confirmPassword: ''
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	comparePasswords = () => {
		if (this.state.password === this.state.confirmPassword) {
			console.log('yyy');
		}
	};
	render() {
		return (
			<Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
				{(signup, { loading, error }) => {
					return (
						<React.Fragment>
							<Title>Join the Community 🤝</Title>
							<Form
								method="POST"
								onSubmit={async e => {
									e.preventDefault();
									this.comparePasswords();
									const res = await signup();
									console.log(res);
								}}
							>
								<fieldset>
									<label htmlFor="email">
										Email
										<input
											type="email"
											name="email"
											placeholder="Email"
											required
											onChange={this.onChange}
											value={this.state.email}
										/>
									</label>
									<label htmlFor="name">
										Name
										<input
											type="text"
											name="name"
											placeholder="Name"
											required
											onChange={this.onChange}
											value={this.state.name}
										/>
									</label>
									<label htmlFor="password">
										Password
										<input
											type="password"
											name="password"
											placeholder="Password"
											required
											onChange={this.onChange}
											value={this.state.password}
										/>
									</label>
									<label htmlFor="confirmPassword">
										Password Confirm
										<input
											type="password"
											name="confirmPassword"
											placeholder="Confirm Password"
											required
											onChange={this.onChange}
											value={this.state.confirmPassword}
										/>
									</label>
									<button>Sign Up</button>
								</fieldset>
							</Form>
							<Footnote>
								<button onClick={this.props.toggleHaveAccount}>
									Already on board? 👉🏼 <span className="bold">Sign In</span>
								</button>
							</Footnote>
						</React.Fragment>
					);
				}}
			</Mutation>
		);
	}
}

export default Signup;
