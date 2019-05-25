import React, { Component } from 'react';
import styled from 'styled-components';
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

class ReviewForm extends Component {
	render() {
		let stars = [5, 4, 3, 2, 1];

		return (
			<Form>
				<ReviewStars>
					{stars.map(star => (
						<React.Fragment>
							<input
								type="radio"
								id={'star' + star}
								name="rating"
								value={star}
							/>
							<label htmlFor={'star' + star}>{star} Stars</label>
						</React.Fragment>
					))}
				</ReviewStars>
				<fieldset>
					<label htmlFor="title">
						Title
						<input type="text" name="title" placeholder="Title" />
					</label>
					<label htmlFor="body">
						Message
						<textarea name="body" placeholder="Your message..." />
					</label>
					<button>Post</button>
				</fieldset>
			</Form>
		);
	}
}

export default ReviewForm;
