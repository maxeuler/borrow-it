import React from 'react';
import Link from 'next/link';
import User from './User';
import Nav from './styles/NavStyle';

const NavBar = props => (
	<User>
		{({ data: { currentUser } }) => (
			<Nav>
				<Link href="/items">
					<a>Marketplace</a>
				</Link>
				{currentUser && (
					<React.Fragment>
						<Link href="/sell">
							<a>Upload</a>
						</Link>
						<Link href="/account">
							<a>Account</a>
						</Link>
					</React.Fragment>
				)}
				{!currentUser && (
					<Link href="/auth">
						<a>Sign In</a>
					</Link>
				)}
			</Nav>
		)}
	</User>
);

export default NavBar;
