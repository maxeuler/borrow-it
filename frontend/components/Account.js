import React, { Component } from 'react';
import gql from 'graphql-tag';
import User from './User';
import { Title } from './Item';
import Reviews from './Reviews';
import { StyledButton } from './Reviews';

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

class Account extends Component {
	render() {
		return (
			<User>
				{({ data: { currentUser } }) => {
					return (
						<>
							<Title>{currentUser.name}</Title>
							<StyledButton>Sign Out</StyledButton>
						</>
					);
				}}
			</User>
		);
	}
}

export default Account;
