import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ReviewForm from './ReviewForm';
import Review from './Review';

const ReviewList = styled.div`
	width: 80%;
	max-width: 1300px;
	/* border: 1px solid ${props => props.theme.border}; */
	margin: 0 auto;
`;

export const StyledButton = styled.button`
	padding: 1rem 2rem;
	background: ${props => props.theme.primaryColor};
	color: #fff;
	border: 1px solid ${props => props.theme.border};
	font-size: 2rem;
	margin: 1rem auto;
	width: 100%;
	cursor: pointer;
`;

const ALL_REVIEWS_QUERY = gql`
	query ALL_REVIEWS_QUERY($item: String!) {
		reviews(where: { item: $item }) {
			id
			title
			message
			rating
			user {
				name
			}
		}
	}
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
			<Query query={ALL_REVIEWS_QUERY} variables={{ item: this.props.item }}>
				{({ loading, error, data }) => {
					if (error) return <p>Error</p>;
					return (
						<ReviewList>
							<StyledButton onClick={this.toggleReviewForm}>
								{this.state.showReviewForm ? 'Cancel' : 'New Review'}
							</StyledButton>
							{this.state.showReviewForm ? (
								<ReviewForm
									toggleReviewForm={this.toggleReviewForm}
									item={this.props.item}
								/>
							) : null}
							{data.reviews.map(review => (
								<Review review={review} />
							))}
						</ReviewList>
					);
				}}
			</Query>
		);
	}
}

export default Reviews;
