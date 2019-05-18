import React from 'react';
import Link from 'next/link';
import Nav from './styles/NavStyle';

const NavBar = props => (
	<Nav>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/sell">
			<a>Sell</a>
		</Link>
	</Nav>
);

export default NavBar;
