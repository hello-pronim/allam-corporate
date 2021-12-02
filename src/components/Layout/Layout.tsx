import React from "react";
import Head from "next/head";
import { get } from "lodash";
import { NavItemModel } from "@models";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import styles from "./Layout.module.scss";

export interface ILayoutProps {
  title?: string;
  layoutData?: any;
  children?: React.ReactNode;
}

const Layout = ({
  title = "Allam Corp Website",
  layoutData,
  children,
}: ILayoutProps) => {
  const navigation: NavItemModel[] = get(
    layoutData,
    "navigation.menuItems",
    []
  );
  const footer: any = get(layoutData, "footer");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header navItems={navigation} />

      <main className={styles.main}>{children}</main>

      <Footer footerData={footer} />
    </>
  );
};

export default Layout;
