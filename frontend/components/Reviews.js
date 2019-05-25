import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';

const ReviewList = styled.div`
	width: 80%;
	max-width: 1300px;
	/* border: 1px solid ${props => props.theme.border}; */
	margin: 0 auto;
`;

const StyledButton = styled.button`
	padding: 1rem 2rem;
	background: ${props => props.theme.primaryColor};
	color: #fff;
	border: 1px solid ${props => props.theme.border};
	font-size: 2rem;
	margin: 1rem auto;
	width: 100%;
	cursor: pointer;
`;

class Reviews extends Component {
	state = {
		showReviewForm: true
	};

	toggleReviewForm = () => {
		this.setState(prevState => ({
			showReviewForm: !prevState.showReviewForm
		}));
	};

	render() {
		return (
			<ReviewList>
				<StyledButton onClick={this.toggleReviewForm}>
					{this.state.showReviewForm ? 'Cancel' : 'New Review'}
				</StyledButton>
				{this.state.showReviewForm ? <ReviewForm /> : null}
				Reviews
			</ReviewList>
		);
	}
}

export default Reviews;
