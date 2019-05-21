import styled from 'styled-components';

const Nav = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	justify-self: end;
	font-size: 2rem;
	a,
	button {
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #fff;
		position: relative;
	}
`;

export default Nav;
