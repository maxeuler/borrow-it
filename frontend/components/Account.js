import React, { Component } from 'react';
import User from './User';
import { Title } from './Item';
import Reviews from './Reviews';

class Account extends Component {
	render() {
		return (
			<User>
				{({ data: { currentUser } }) => {
					return (
						<React.Fragment>
							<Title>{currentUser.name}</Title>
							<Reviews />
						</React.Fragment>
					);
				}}
			</User>
		);
	}
}

export default Account;
