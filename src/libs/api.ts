import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getClient = () => {
  return new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });
};

const craftAPI = async (query: DocumentNode) => {
  const apolloClient = getClient();
  const { data } = await apolloClient.query({
    query: query,
  });

  return data;
};

export default craftAPI;
