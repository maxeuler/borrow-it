import styled from 'styled-components';

const Form = styled.form`
	padding: 2rem;
	border: 1px solid ${props => props.theme.border};
	font-size: 1.4rem;
	line-height: 2rem;
	label {
		display: block;
		margin-bottom: 1.2rem;
	}
	input,
	textarea {
		width: 100%;
		padding: 1rem;
		border: 1px solid ${props => props.theme.border};
		font-size: 1.2rem;
	}
	fieldset {
		border: none;
		padding: 0;
	}
	button {
		background: ${props => props.theme.primaryColor};
		padding: 1rem 3rem;
		border: 1px solid ${props => props.theme.border};
		border-radius: 2px;
		color: #fff;
		font-size: 1.6rem;
		font-weight: 600;
		float: right;
	}
`;

export default Form;
