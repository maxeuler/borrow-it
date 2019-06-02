import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import { Title } from './Item';
import Reviews from './Reviews';
import { Footnote } from './Signup';
import { ItemList } from './Items';
import Item from './Item';
import UserStats from './UserStats';

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
				<User>
					{({ data: { currentUser } }) => {
						return (
							<Query query={ITEMS_FOR_USER_QUERY}>
								{({ data, loading, error }) => {
									return (
										<>
											<div>
												<Title>My Account! 🏌🏼</Title>
												<Footnote>
													{/* this looks strange but is for styling purpose */}
													<button>
														<span className="bold">Sign Out 👋🏼</span>
													</button>
												</Footnote>
											</div>
											<UserStats
												me={currentUser}
												itemsCount={data.currentUserItems.length}
											/>
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
			</>
		);
	}
}

export default Account;
