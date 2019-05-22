import React, { Component } from 'react';
import Signup from './Signup';
import Signin from './Signin';

class Authentication extends Component {
	state = {
		hasAccount: true
	};

	toggleHaveAccount = () => {
		this.setState(prevState => ({
			hasAccount: !prevState.hasAccount
		}));
	};

	render() {
		return (
			<React.Fragment>
				{this.state.hasAccount ? (
					<Signin toggleHaveAccount={this.toggleHaveAccount} />
				) : (
					<Signup toggleHaveAccount={this.toggleHaveAccount} />
				)}
			</React.Fragment>
		);
	}
}

export default Authentication;
