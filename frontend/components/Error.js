import styled from 'styled-components';

const StyledError = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid red;
`;

const Error = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => {
      <StyledError key={i}>
        <strong>Oooohhhhps 😮👉🏼 </strong>
		    {error.message.replace('GraphQL error: ', '')}
      </StyledError>
    })
  }
  return (
    <StyledError>
      <strong>Oooohhhhps 😮👉🏼 </strong>
      {error.message.replace('GraphQL error: ', '')}
	  </StyledError>;
    )
};

export default Error;