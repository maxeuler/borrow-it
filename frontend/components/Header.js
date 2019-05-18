import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import styled from 'styled-components';

const StyledHeader = styled.header`
	.bar {
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		background: #f1c40f;
	}
`;

const Heading = styled.h1`
	font-size: 3rem;
	margin-left: 2rem;
	position: relative;
	a {
		color: #fff;
		text-decoration: none;
	}
`;

const Header = props => (
	<StyledHeader>
		<div className="bar">
			<Heading>
				<Link href="/">
					<a>Borrow It!</a>
				</Link>
			</Heading>
			<NavBar />
		</div>
	</StyledHeader>
);

export default Header;
