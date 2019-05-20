import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import ItemCard from './styles/ItemCard';
import StyledLink from './styles/StyledLink';

export const Title = styled.h3`
	font-size: 2rem;
	text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
	text-transform: uppercase;
	text-align: center;
	a {
		color: ${props => props.theme.black};
		text-decoration: none;
	}
`;

class Item extends Component {
	render() {
		const { item } = this.props;

		return (
			<ItemCard>
				{item.image && <img src={item.image} alt={item.title} />}
				<Title>
					<Link href="/">
						<a>{item.title}</a>
					</Link>
				</Title>
				<p>{item.description}</p>
				<p>{item.maxDays}</p>
				<Link
					href={{
						pathname: 'item',
						query: { id: item.id }
					}}
				>
					<StyledLink>View Details</StyledLink>
				</Link>
			</ItemCard>
		);
	}
}

export default Item;
