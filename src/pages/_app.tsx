import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { getClient } from "@libs/api";
import ReactModal from "react-modal";
import type { AppProps } from "next/app";
import "@styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactModal.setAppElement("#__next");
  }, []);
  const apolloClient = getClient();

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
