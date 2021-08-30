import React from "react";
import Head from "next/head";
import Header from "@components/Header/Header";
// import Footer from '../Footer/Footer'
import styles from "./Layout.module.scss";

export interface ILayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const Layout = ({ title = "Allam Corp Website", children }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <main className={styles.main}>{children}</main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
