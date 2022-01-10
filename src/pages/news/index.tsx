import React, { useState, useEffect, useCallback } from "react";
import type { NextPage } from "next";
import { get } from "lodash";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import { gql } from "@apollo/client";
import { NewsModel, OverViewPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Divider from "@components/Common/Divider/Divider";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import OldPosts from "@sections/News/OldPosts/OldPosts";
import FeaturedPost from "@sections/News/FeaturedPost/FeaturedPost";
import BackgroundWrapper from "@sections/News/BackgroundWrapper/BackgroundWrapper";
import LatestNews from "@sections/News/LatestNews/LatestNews";

const News: NextPage<OverViewPageProps> = ({
  pageData,
  listingData,
  layoutData,
}) => {
  console.log(pageData);
  const [news, setNews] = useState<NewsModel[]>([]);
  const [latestNews, setLatestNews] = useState<NewsModel[]>([]);
  const [oldNews, setOldNews] = useState<NewsModel[]>([]);

  const featuredNews = get(pageData, "entry.featuredNews[0]", []);
  const LATEST_NEWS_COUNT = get(pageData, "entry.latestArticleCount", 4);

  const sortNews = useCallback(() => {
    setNews(
      listingData.entries.sort((a: NewsModel, b: NewsModel) =>
        a.publishDate > b.publishDate ? -1 : 1
      )
    );
  }, [listingData]);

  const splitNews = useCallback(() => {
    setLatestNews(news.slice(0, LATEST_NEWS_COUNT));
    setOldNews(news.slice(LATEST_NEWS_COUNT, news.length));
  }, [news, LATEST_NEWS_COUNT]);

  useEffect(() => {
    splitNews();
  }, [splitNews]);

  useEffect(() => {
    sortNews();
  }, [sortNews]);

  return (
    <Layout layoutData={layoutData}>
      <BackgroundWrapper>
        <FeaturedPost post={featuredNews} />
        <LatestNews news={latestNews} />
        <div style={{ backgroundColor: "#eef2f5" }}>
          <Divider />
        </div>
        <OldPosts posts={oldNews} />
        {/* <AllBenefits /> */}
      </BackgroundWrapper>
    </Layout>
  );
};

const pageQuery = gql`
  query newsPage {
    entry(section: "newsPage") {
      ... on newsPage_newsPage_Entry {
        featuredNews {
          ... on newsAndEvents_default_Entry {
            slug
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
        latestArticleCount
      }
    }
  }
`;

const newsQuery = gql`
  query newsQuery {
    entries(section: "newsAndEvents") {
      ... on newsAndEvents_default_Entry {
        slug
        title
        category
        publishDate
        shortDescription
        description
        titleImage {
          title
          url
        }
        filesDownloads {
          url
        }
        linkedEstates {
          ... on estates_default_Entry {
            title
          }
        }
      }
    }
  }
`;

export const getStaticProps = async function () {
  const layoutData = await craftAPI(layoutQuery);
  const listingData = await craftAPI(newsQuery);
  const pageData = await craftAPI(pageQuery);

  return {
    props: {
      layoutData,
      listingData,
      pageData,
    },
    revalidate: 60,
  };
};

export default News;
