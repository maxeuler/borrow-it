import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './Error';

const ITEMS_FOR_USER_QUERY = gql`
	query ITEMS_FOR_USER_QUERY($userId: String) {
		userItems(where: { user: $userId }) {
			id
			title
			description
			image
			maxDays
		}
	}
`;

const ALL_ITEMS_QUERY = gql`
	query ALL_ITEMS_QUERY {
		items(orderBy: id_DESC) {
			id
			title
			description
			image
			maxDays
		}
	}
`;

class ItemsList extends Component {
	state = {
		filterByUser: false
	};

	render() {
		return (
			<Query
				query={this.state.filterByUser ? ITEMS_FOR_USER_QUERY : ALL_ITEMS_QUERY}
			>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
				}}
			</Query>
		);
	}
}
