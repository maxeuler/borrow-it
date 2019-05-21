import React from 'react';
import Link from 'next/link';
import Nav from './styles/NavStyle';

const NavBar = props => (
	<Nav>
		<Link href="/items">
			<a>Marketplace</a>
		</Link>
		<Link href="/sell">
			<a>Upload</a>
		</Link>
		<Link href="/auth">
			<a>Sign Up</a>
		</Link>
	</Nav>
);

export default NavBar;
