import { Query } from 'react-apollo';
import Router from 'next/router';
import { CURRENT_USER_QUERY } from './User';
import Authentication from './Authentication';

const IsAuthenticated = props => (
	<Query query={CURRENT_USER_QUERY}>
		{({ data, loading }) => {
			if (loading) return <p>Loading...</p>;
			if (!data.currentUser) {
				return <Authentication />;
			}
			return props.children;
		}}
	</Query>
);

export default IsAuthenticated;
