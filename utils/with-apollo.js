import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';
import { getCookie } from '~utils/cookie-operation';
import { Authorization, EndPoint } from './env-config';

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      credentials: 'include',
      uri: EndPoint,
      fetchOptions: {
        credentials: 'include',
      },
      request: (operation) => {
        if (typeof window !== 'undefined' && window) {
          const token = getCookie(Authorization);
          operation.setContext({
            headers: {
              [Authorization]: token || '',
            },
          });
        }
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
