import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Title } from './Item';
import RequestButton from './styles/RequestButton';

const StyledItemDetail = styled.div`
	max-width: 1200px;
	margin: 3rem auto;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-flow: column;
	min-height: 500px;
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.itemData {
		margin: 3rem;
		font-size: 1.5rem;
	}
`;

const ItemDetail = props => (
	<StyledItemDetail>
		<img src="./static/testimage.png" alt="" />
		<div className="itemData">
			<Title>Item Detail</Title>
			<p>Details</p>
			<RequestButton>Send Request</RequestButton>
		</div>
	</StyledItemDetail>
);

export default ItemDetail;
