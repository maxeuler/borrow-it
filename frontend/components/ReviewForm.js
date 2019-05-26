import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';

const ReviewStars = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	input {
		display: none;
		&:checked {
			& ~ label {
				color: ${props => props.theme.primaryColor};
			}
		}
		& + label {
			font-size: 0;
			&:before {
				content: '★';
				font-size: 2rem;
			}
			&[for='star5'] {
				order: 5;
			}
			&[for='star4'] {
				order: 4;
			}
			&[for='star3'] {
				order: 3;
			}
			&[for='star2'] {
				order: 2;
			}
			&[for='star1'] {
				order: 1;
			}
			&:hover,
			&:hover ~ label {
				color: lighten(#red, 20%);
			}
		}
	}
`;

const POST_REVIEW_MUTATION = gql`
	mutation POST_REVIEW_MUTATION(
		$title: String
		$message: String
		$rating: Int
	) {
		createReview(title: $title, message: $message, rating: $rating) {
			id
			title
			message
			rating
		}
	}
`;

class ReviewForm extends Component {
	state = {
		rating: 0,
		title: '',
		message: ''
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		let stars = [5, 4, 3, 2, 1];

		return (
			<Mutation
				mutation={POST_REVIEW_MUTATION}
				variables={{
					title: this.state.title,
					message: this.state.message,
					rating: parseFloat(this.state.rating)
				}}
			>
				{(createReview, { loading, error }) => (
					<Form
						onSubmit={async e => {
							e.preventDefault();
							const res = await createReview();
							console.log(res);
						}}
						method="POST"
					>
						<ReviewStars>
							{stars.map(star => (
								<React.Fragment key={star}>
									<input
										type="radio"
										id={'star' + star}
										name="rating"
										value={star}
										onChange={this.onChange}
									/>
									<label htmlFor={'star' + star}>{star} Stars</label>
								</React.Fragment>
							))}
						</ReviewStars>
						<fieldset>
							<label htmlFor="title">
								Title
								<input
									type="text"
									name="title"
									placeholder="Title"
									required
									onChange={this.onChange}
									value={this.state.title}
								/>
							</label>
							<label htmlFor="message">
								Message
								<textarea
									name="message"
									placeholder="Your message..."
									onChange={this.onChange}
									value={this.state.message}
								/>
							</label>
							<button type="submit">Post</button>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}

export default ReviewForm;
