import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { toIdValue } from 'apollo-utilities';

export default new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id || null,
    cacheResolvers: {
      Query: {
        // this is a way to find a cache target based on query variables
        // since at this stage, apollo does not know what the __typename of the result
        // and it can not assume all the data items have unique id across the project
        note: (_, { id }) => toIdValue(id),
      },
    },
  }),
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-only',
    }
  },
});
