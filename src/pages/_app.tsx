import { useEffect } from "react";
import ReactModal from "react-modal";
import type { AppProps } from "next/app";
import "@styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactModal.setAppElement("#__next");
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
