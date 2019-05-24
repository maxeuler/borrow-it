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
					<Link href="/sell">
						<a>Upload</a>
					</Link>
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
