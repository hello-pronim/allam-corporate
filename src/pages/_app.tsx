import { useEffect } from "react";
import ReactModal from "react-modal";
import { getClient } from "@libs/api";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import "@styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = getClient();

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  );
}
export default MyApp;
