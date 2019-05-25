import React, { Component } from 'react';
import User from './User';
import { Title } from './Item';

class Account extends Component {
	render() {
		return (
			<User>
				{({ data: { currentUser } }) => {
					return <Title>{currentUser.name}</Title>;
				}}
			</User>
		);
	}
}

export default Account;
