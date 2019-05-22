import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import { Title } from './Item';
import { Footnote } from './Signup';

const StyledSmallLink = styled.a`
	text-decoration: none;
	color: ${props => props.theme.black};
	cursor: pointer;
	margin: 0;
	font-size: 1.2rem;
`;

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			id
			email
			name
		}
	}
`;

class Signin extends Component {
	state = {
		email: '',
		password: ''
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
				{(signin, { loading, error }) => {
					return (
						<React.Fragment>
							<Title>Good to see you again 👋🏼</Title>
							<Form
								method="POST"
								onSubmit={async e => {
									e.preventDefault();
									const res = await signin();
									console.log(res);
								}}
							>
								<fieldset>
									<label htmlFor="email">
										Email
										<input
											type="email"
											placeholder="Email"
											name="email"
											required
											onChange={this.onChange}
											value={this.state.email}
										/>
									</label>
									<label htmlFor="password">
										Password
										<input
											type="password"
											placeholder="Password"
											name="password"
											required
											onChange={this.onChange}
											value={this.state.password}
										/>
									</label>
									<button>Sign In</button>
								</fieldset>
								<Link href="/">
									<StyledSmallLink>Forgot password? 😮</StyledSmallLink>
								</Link>
							</Form>
							<Footnote>
								<button onClick={this.props.toggleHaveAccount}>
									No part of the community? 👉🏼{' '}
									<span className="bold">Sign Up</span>
								</button>
							</Footnote>
						</React.Fragment>
					);
				}}
			</Mutation>
		);
	}
}

export default Signin;
