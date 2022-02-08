import React from "react";
import Head from "next/head";
import { get } from "lodash";
import { useRouter } from "next/router";

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
  title = "Allam Property Group - Now Selling - New Ready Built Homes",
  layoutData,
  children,
}: ILayoutProps) => {
  const router = useRouter();

  const { query } = router;

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
      {!query?.noHeader && <Header navItems={navigation} />}

      <main className={styles.main}>{children}</main>

      {!query?.noFooter && <Footer footerData={footer} />}
    </>
  );
};

export default Layout;
