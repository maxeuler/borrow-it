import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Footnote } from './Signup';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
	mutation SIGN_OUT_MUTATION {
		signout {
			message
		}
	}
`;

const Signout = props => (
	<Mutation
		mutation={SIGN_OUT_MUTATION}
		refetchQueries={[{ query: CURRENT_USER_QUERY }]}
	>
		{signout => (
			<Footnote>
				{/* this looks strange but is for styling purpose */}
				<button onClick={signout}>
					<span className="bold">Sign Out 👋🏼</span>
				</button>
			</Footnote>
		)}
	</Mutation>
);

export default Signout;
