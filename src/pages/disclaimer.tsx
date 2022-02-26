import React from "react";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/ContentPages/Hero/Hero";
import PageContent from "@components/PageContent/PageContent";

type PageProps = {
  pageData: any;
  layoutData: any;
};

const Disclaimer: NextPage<PageProps> = ({ pageData, layoutData }) => {
  const page = pageData.entry;

  return (
    <Layout layoutData={layoutData}>
      <Hero heading={page.title} />
      <PageContent content={page.pageContent} />
    </Layout>
  );
};

const pageQuery = gql`
  query contentPage {
    entry(section: "disclaimer") {
      ... on disclaimer_disclaimer_Entry {
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

export default Disclaimer;
