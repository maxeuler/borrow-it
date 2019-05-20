import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

const ALL_ITEMS_QUERY = gql`
	query ALL_ITEMS_QUERY {
		items {
			id
			title
			description
			image
			maxDays
		}
	}
`;

const ItemList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 70px;
	max-width: 1000px;
	margin: 0 auto;
	margin-top: 2rem;
`;

class Items extends Component {
	render() {
		return (
			<Query query={ALL_ITEMS_QUERY}>
				{({ loading, error, data }) => {
					if (loading) return 'Loading...';
					if (error) return 'Error...';
					return (
						<ItemList>
							{data.items.map(item => (
								<Item item={item} key={item.id} />
							))}
						</ItemList>
					);
				}}
			</Query>
		);
	}
}

export default Items;
