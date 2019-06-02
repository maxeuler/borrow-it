import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Title } from './Item';
import StyledLink from './styles/StyledLink';
import Reviews from './Reviews';

const StyledItemDetail = styled.div`
	max-width: 1200px;
	margin: 3rem auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, 50%);
	min-height: 500px;
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.itemData {
		width: 100%;
		text-align: center;
		margin: 1rem auto;
		font-size: 1.5rem;
		h3 {
			font-size: 3rem;
		}
		p {
			font-size: 2rem;
			padding: 2rem;
		}
	}
	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
		grid-template-rows: 300px 200px;
		img {
			object-fit: contain;
		}
		p {
			display: none;
		}
	}
`;

const UserName = styled.p`
	color: ${props => props.theme.black};
	font-style: italic;
`;

const ITEM_DETAIL_QUERY = gql`
	query ITEM_DETAIL_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			image
			user {
				name
			}
		}
	}
`;

const ItemDetail = props => (
	<Query query={ITEM_DETAIL_QUERY} variables={{ id: props.id }}>
		{({ loading, error, data }) => {
			if (error) return <p>Error</p>;
			if (loading) return <p>Loading</p>;
			const { item } = data;
			return (
				<React.Fragment>
					<StyledItemDetail>
						<img src={item.image} alt={item.title} />
						<div className="itemData">
							<Title>{item.title}</Title>
							<UserName>from {item.user.name}</UserName>
							<p>{item.description}</p>
							{/* <Link>
								<StyledLink>Send Request</StyledLink>
							</Link> */}
						</div>
					</StyledItemDetail>
					<Reviews item={item.id} />
				</React.Fragment>
			);
		}}
	</Query>
);

export default ItemDetail;
