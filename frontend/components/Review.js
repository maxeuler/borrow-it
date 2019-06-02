import React from 'react';
import styled from 'styled-components';

const ReviewCard = styled.div`
	border: 1px solid ${props => props.theme.border};
	margin: 1rem 0;
	padding: 1rem;
	header {
		display: flex;
		align-content: space-around;
		.rating {
			margin-left: 3rem;
		}
	}
	.stars {
		color: ${props => props.theme.primaryColor};
	}
`;

const Review = props => {
	const { title, message, rating, user } = props.review;
	return (
		<ReviewCard>
			<header>
				<h2>{user.name}</h2>
				<h2 className="rating">
					<span className="stars">{'★'.repeat(rating)}</span>
					{'★'.repeat(5 - rating)}
				</h2>
			</header>
			<h3>{title}</h3>
			<p>{message}</p>
		</ReviewCard>
	);
};

export default Review;
