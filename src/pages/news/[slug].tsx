import React from "react";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { easyBuyQuery, layoutQuery } from "@libs/queries";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/News/Detail/Hero/Hero";
import DetailContent from "@sections/News/Detail/DetailContent/DetailContent";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const NewsDetail: NextPage<PageProps> = ({ pageData, layoutData, easyBuy }) => {
  const title = get(pageData, "entry.title", "");
  const description = get(pageData, "entry.description", "");
  const publishDate = get(pageData, "entry.publishDate", "");
  const titleImage = get(pageData, "entry.titleImage[0]", "");

  const faqs = [
    {
      id: "0",
      date: "Sept 23, 2021",
      title: "What Insurance Do You Really Need for An Investment Property?",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat mattis vel id sociis diam id congue amet. Aliquam porttitor auctor amet, pretium sapien posuere non.</p>",
    },
    {
      id: "1",
      date: "Sept 23, 2021",
      title: "8 Must Have When Choosing A Rental Property",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat mattis vel id sociis diam id congue amet. Aliquam porttitor auctor amet, pretium sapien posuere non.</p>",
    },
  ];

  const footerPanelData = {
    headingRedactor:
      "<h1><strong>Like to know more about Allam Homes?</strong><br/>Contact an Allam home specialist.</h1>",
    introBlurb:
      "<p>Our history spans 25 years and during that time we’ve helped thousands  of customers find a new home, with homes and estates spread across many of Sydney’s most popular areas.</p>",
    buttons: [
      {
        buttonType: "light",
        buttonLink: "/get-in-touch",
        buttonLabel: "Contact an Agent",
      },
    ],
  };

  return (
    <Layout layoutData={layoutData}>
      <Hero title={title} date={publishDate} bannerImage={titleImage} />
      <DetailContent content={description} faqs={faqs} />
      <AllBenefits data={easyBuy?.globalSet?.easyBuy[0]} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const slug = get(params, "slug");
  const layoutData = await craftAPI(layoutQuery);

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
