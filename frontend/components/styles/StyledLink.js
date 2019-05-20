import styled from 'styled-components';

const StyledLink = styled.a`
	width: 100%;
	border: none;
	border-top: 1px solid ${props => props.theme.border};
	background: ${props => props.theme.primaryColor};
	color: #fff;
	font-size: 2rem;
	padding: 1rem;
	cursor: pointer;
`;

export default StyledLink;
