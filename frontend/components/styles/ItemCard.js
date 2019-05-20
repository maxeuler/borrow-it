import styled from 'styled-components';

const ItemCard = styled.div`
	background: #fff;
	border: 1px solid ${props => props.theme.border};
	position: relative;
	display: flex;
	flex-direction: column;
	text-align: center;
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
	}
	p {
		font-size: 1.4rem;
		font-weight: 300;
		flex-grow: 1;
	}
`;

export default ItemCard;
