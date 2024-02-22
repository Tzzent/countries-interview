import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_COUNTRIES_API_URL,
  cache: new InMemoryCache(),
});

export const CountriesProvider = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}