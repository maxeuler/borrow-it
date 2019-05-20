import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import ItemCard from './styles/ItemCard';
import RequestButton from './styles/RequestButton';

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
				<Title>
					<Link href="/">
						<a>{item.title}</a>
					</Link>
				</Title>
				<p>{item.description}</p>
				<p>{item.maxDays}</p>
				<RequestButton>Send Request</RequestButton>
			</ItemCard>
		);
	}
}

export default Item;
