import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "http://localhost:3001",
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
