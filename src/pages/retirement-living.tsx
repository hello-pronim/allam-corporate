import React, { useMemo } from "react";
import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";

import craftAPI from "@libs/api";
import { OverViewPageProps } from "@models";
import { propsFind } from "@utils/propsFind";
import { layoutQuery, simpleNewsQuery, trustQuery } from "@libs/queries";

import Layout from "@components/Layout/Layout";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";

import Hero from "@sections/Retirement/Hero/Hero";
import CostAndFee from "@sections/Retirement/CostAndFee/CostAndFee";
import MasterPlan from "@sections/Retirement/MasterPlan/MasterPlan";
import RelatedNews from "@sections/Retirement/RelatedNews/RelatedNews";
import LeadingHomes from "@sections/Retirement/LeadingHomes/LeadingHomes";

const RetirementLiving: NextPage<OverViewPageProps> = ({
  pageData,
  trustMakers,
  layoutData,
  newsList,
}) => {
  const ESTATE_TITLE = "Monterey";
  const pageLayout = get(pageData, "entry.retirementLayout", []);
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);
  const fullImageLayout = propsFind(
    pageLayout,
    "retirementLayout_fullImage_BlockType"
  );

  const filteredNews: any[] = useMemo(() => {
    return newsList
      ? Array.from(newsList?.entries).filter((news: any) =>
          news?.linkedEstates.some(
            (estate: any) => estate.title === ESTATE_TITLE
          )
        )
      : [];
  }, [newsList]);

  return pageData ? (
    <Layout layoutData={layoutData}>
      <Hero data={propsFind(pageLayout, "retirementLayout_hero_BlockType")} />
      <LeadingHomes
        trustFeatures={trustFeatures}
        titleData={propsFind(
          globalPromos,
          "globalPromos_trustMakers_BlockType"
        )}
      />
      <RelatedNews news={filteredNews} />
      <FullWidthImage image={fullImageLayout?.backgroundImage?.[0].url} />
      <MasterPlan
        data={propsFind(pageLayout, "retirementLayout_masterPlan_BlockType")}
      />
      <CostAndFee
        data={propsFind(pageLayout, "retirementLayout_feeCovers_BlockType")}
      />
      <RegisterPanel
        data={propsFind(globalPromos, "globalPromos_estateRegister_BlockType")}
      />
    </Layout>
  ) : null;
};

const pageQuery = gql`
  query retirementPage {
    entry(section: "retirementLiving") {
      ... on retirementLiving_retirementLiving_Entry {
        retirementLayout {
          ... on retirementLayout_hero_BlockType {
            heading
            description
            backgroundImage {
              url
            }
            buttons {
              ... on buttons_BlockType {
                buttonLabel
                buttonLink
                buttonType
              }
            }
            cta {
              label
              link
            }
          }
          ... on retirementLayout_fullImage_BlockType {
            backgroundImage {
              url
            }
          }
          ... on retirementLayout_masterPlan_BlockType {
            heading
            cta {
              label
              link
            }
          }
          ... on retirementLayout_feeCovers_BlockType {
            heading
            subHeading
            description
            titleImage {
              url
              title
              width
              height
            }
            cta {
              label
              link
            }
          }
        }

        globalPromos {
          ... on globalPromos_trustMakers_BlockType {
            heading
            description
            hascta
            cta {
              label
              link
            }
          }
          ... on globalPromos_estateRegister_BlockType {
            headingRedactor
            description
          }
        }
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(pageQuery);
  const trustMakers = await craftAPI(trustQuery);
  const layoutData = await craftAPI(layoutQuery);
  const newsList = await craftAPI(simpleNewsQuery);

  return {
    props: {
      pageData,
      trustMakers,
      layoutData,
      newsList,
    },
    revalidate: 60,
  };
};

export default RetirementLiving;
