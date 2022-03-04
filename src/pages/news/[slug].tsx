import React, { useMemo } from "react";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";

import craftAPI from "@libs/api";
import { easyBuyQuery, layoutQuery, simpleNewsQuery } from "@libs/queries";

import Layout from "@components/Layout/Layout";
import Hero from "@sections/News/Detail/Hero/Hero";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import DetailContent from "@sections/News/Detail/DetailContent/DetailContent";

const NewsDetail: NextPage<any> = ({
  pageData,
  layoutData,
  easyBuy,
  newsList,
}) => {
  const title = get(pageData, "entry.title", "");
  const description = get(pageData, "entry.description", "");
  const publishDate = get(pageData, "entry.publishDate", "");
  const titleImage = get(pageData, "entry.titleImage[0]", "");

  const filteredNews: any[] = useMemo(() => {
    return newsList
      ? Array.from(newsList?.entries).filter(
          (news: any) => news.title !== title
        )
      : [];
  }, [title, newsList]);

  return (
    <Layout layoutData={layoutData}>
      <Hero title={title} date={publishDate} bannerImage={titleImage} />
      <DetailContent content={description} faqs={filteredNews} />
      <AllBenefits data={easyBuy?.globalSet?.easyBuy[0]} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const slug = get(params, "slug");
  const layoutData = await craftAPI(layoutQuery);
  const newsList = await craftAPI(simpleNewsQuery);

  const newsQuery = gql`
    query newsQuery($slug: [String] = "${slug}") {
      entry(section: "newsAndEvents", slug: $slug) {
        ... on newsAndEvents_default_Entry {
          title
          description
          category
          publishDate
          shortDescription
          titleImage {
            url
            title
            width
            height
          }
          linkedEstates {
            ... on estates_default_Entry {
              title
            }
          }
          filesDownloads {
            url
          }
        }
      }
    }
  `;

  const pageData = await craftAPI(newsQuery);
  const easyBuy = await craftAPI(easyBuyQuery);

  return {
    props: {
      pageData,
      easyBuy,
      layoutData,
      newsList,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default NewsDetail;
