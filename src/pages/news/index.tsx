import React, { useState } from "react";
import type { NextPage } from "next";
import { get } from "lodash";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import { gql } from "@apollo/client";
import { NewsModel, OverViewPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import CardGrid from "@components/CardGrid/CardGrid";
import Divider from "@components/Common/Divider/Divider";
import PostCard from "@sections/News/PostCard/PostCard";
import LatestSlider from "@components/LatestSlider/LatestSlider";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import { featuredContent } from "@sections/News/FeaturedPost/constant";
import { PostContent } from "@sections/News/PostCard/constant";
import FeaturedPost from "@sections/News/FeaturedPost/FeaturedPost";
import BackgroundWrapper from "@sections/News/BackgroundWrapper/BackgroundWrapper";

const News: NextPage<OverViewPageProps> = ({ listingData, layoutData }) => {
  console.log(listingData);
  const [videos, setVideos] = useState<NewsModel[]>([]);

  return (
    <Layout layoutData={layoutData}>
      <BackgroundWrapper>
        <FeaturedPost content={featuredContent} />
        <LatestSlider>
          {PostContent.map((post, index) => {
            return <PostCard key={index} content={post} />;
          })}
        </LatestSlider>
        <Divider />
        <CardGrid
          title="Older posts"
          col={[2, 3]}
          colGap={40}
          rowGap={60}
          padding={[51, 80]}
          maxItems={9}
          smallTitle={true}
        >
          {PostContent.map((post, index) => {
            return <PostCard key={index} content={post} />;
          })}
        </CardGrid>
        {/* <AllBenefits /> */}
      </BackgroundWrapper>
    </Layout>
  );
};

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

  return {
    props: {
      layoutData,
      listingData,
    },
    revalidate: 60,
  };
};

export default News;
