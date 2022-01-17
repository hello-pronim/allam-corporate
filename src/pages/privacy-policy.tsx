import React from "react";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import ContentPage from "@components/ContentPage/ContentPage";

type PageProps = {
  pageData: any;
  layoutData: any;
};

const PrivacyPolicy: NextPage<PageProps> = ({ pageData, layoutData }) => {
  const page = pageData.entry;

  return (
    <Layout layoutData={layoutData}>
      <ContentPage content={page.pageContent} />
    </Layout>
  );
};

const pageQuery = gql`
  query contentPage {
    entry(section: "privacyPolicy") {
      ... on privacyPolicy_privacyPolicy_Entry {
        title
        pageContent
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(pageQuery);
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      pageData,
      layoutData,
    },
    revalidate: 60,
  };
};

export default PrivacyPolicy;
