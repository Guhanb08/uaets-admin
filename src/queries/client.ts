import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_API_BASE_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});
