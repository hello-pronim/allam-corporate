import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getClient = (previewToken: any = undefined) => {
  return new ApolloClient({
    uri: `${API_URL}${previewToken ? `?token=${previewToken}` : ""}`,
    cache: new InMemoryCache(),
  });
};

const craftAPI = async (query: DocumentNode, previewToken: any = undefined) => {
  const apolloClient = getClient(previewToken);
  const { data } = await apolloClient.query({
    query: query,
  });

  return data;
};

export default craftAPI;
