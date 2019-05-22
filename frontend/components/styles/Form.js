import styled from 'styled-components';

const Form = styled.form`
	padding: 3rem;
	border: 1px solid ${props => props.theme.border};
	box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
	font-size: 1.4rem;
	line-height: 2rem;
	max-width: 900px;
	margin: 4rem auto;
	label {
		display: block;
		margin-bottom: 1.2rem;
	}
	input,
	textarea {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid ${props => props.theme.border};
		font-size: 1.2rem;
		margin-top: 0.5rem;
	}
	textarea {
		height: 100px;
	}
	fieldset {
		border: none;
		padding: 0;
	}
	button {
		background: ${props => props.theme.primaryColor};
		padding: 1rem 3rem;
		margin-top: 1rem;
		border: 1px solid ${props => props.theme.border};
		border-radius: 2px;
		color: #fff;
		font-size: 1.6rem;
		font-weight: 600;
		float: right;
	}
`;

export default Form;
