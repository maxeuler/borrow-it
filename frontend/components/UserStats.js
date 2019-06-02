import React from 'react';
import styled from 'styled-components';

const StyledStats = styled.ul`
	max-width: 1000px;
	margin: 3rem auto;
	display: flex;
	list-style: none;
	border: 1px solid ${props => props.theme.border};
	box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
	padding: 2rem;
	justify-content: space-between;
	li {
		padding: 0 2rem;
		font-size: 2rem;
		span {
			color: ${props => props.theme.black};
		}
	}
`;

const UserStats = props => (
	<div>
		<StyledStats>
			<li>{props.me.name}</li>
			<li>{props.me.email}</li>
			<li>
				{props.itemsCount}
				<span> Items</span>
			</li>
		</StyledStats>
	</div>
);

export default UserStats;
