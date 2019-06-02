import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import { Title } from './Item';
import Reviews from './Reviews';

import { ItemList } from './Items';
import Item from './Item';
import UserStats from './UserStats';
import Signout from './Signout';
import IsAuthenticated from './IsAuthenticated';

const ITEMS_FOR_USER_QUERY = gql`
	query ITEMS_FOR_USER_QUERY {
		currentUserItems {
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
			<>
				<IsAuthenticated>
					<User>
						{({ data: { currentUser }, loading }) => {
							if (loading) return <p>Loading</p>;
							return (
								<Query query={ITEMS_FOR_USER_QUERY}>
									{({ data, loading, error }) => {
										if (error) return <p>Error...</p>;
										if (loading) return <p>loading...</p>;
										return (
											<>
												<div>
													<Title>My Account! 🏌🏼</Title>
													<Signout />
												</div>
												{currentUser && (
													<UserStats
														me={currentUser}
														itemsCount={data.currentUserItems.length}
													/>
												)}
												<ItemList>
													{data.currentUserItems.map(item => (
														<Item key={item.id} item={item} />
													))}
												</ItemList>
											</>
										);
									}}
								</Query>
							);
						}}
					</User>
				</IsAuthenticated>
			</>
		);
	}
}

export default Account;
