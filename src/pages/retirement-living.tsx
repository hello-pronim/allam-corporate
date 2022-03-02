import React, { useMemo } from "react";
import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";

import craftAPI from "@libs/api";
import { OverViewPageProps } from "@models";
import { propsFind } from "@utils/propsFind";
import {
  fullHomeListQuery,
  layoutQuery,
  simpleNewsQuery,
  retirementTrustQuery,
  fullEstatesQuery,
} from "@libs/queries";

import Layout from "@components/Layout/Layout";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";

import Hero from "@sections/Retirement/Hero/Hero";
import CostAndFee from "@sections/Retirement/CostAndFee/CostAndFee";
import MasterPlan from "@sections/Retirement/MasterPlan/MasterPlan";
import RelatedNews from "@sections/Retirement/RelatedNews/RelatedNews";
import LeadingHomes from "@sections/Retirement/LeadingHomes/LeadingHomes";
import RetirementEstates from "@sections/Retirement/Estates/Estates";

const RetirementLiving: NextPage<OverViewPageProps> = ({
  pageData,
  retirementTrustMarkers,
  layoutData,
  newsList,
  homesList,
  estateList,
}) => {
  const ESTATE_TITLE = "Monterey";
  const pageLayout = get(pageData, "entry.retirementLayout", []);
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(
    retirementTrustMarkers,
    "globalSet.trustFeature",
    []
  );
  const fullImageLayout = propsFind(
    pageLayout,
    "retirementLayout_fullImage_BlockType"
  );

  const filteredEstates: any[] = useMemo(() => {
    return estateList
      ? Array.from(estateList?.entries).filter(
          (estate: any) => estate.retirementLiving === "yes"
        )
      : [];
  }, [estateList]);

  const filteredHomes: any[] = useMemo(() => {
    return homesList
      ? Array.from(homesList?.entries).filter(
          (home: any) =>
            home?.estate[0].title === ESTATE_TITLE && home?.landOnly === false
        )
      : [];
  }, [homesList]);

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
      {filteredHomes.length !== 0 && (
        <LeadingHomes
          trustFeatures={trustFeatures}
          titleData={propsFind(
            globalPromos,
            "globalPromos_trustMarkers_BlockType"
          )}
          homes={filteredHomes}
        />
      )}
      {filteredNews.length ? <RelatedNews news={filteredNews} /> : null}
      <FullWidthImage image={fullImageLayout?.backgroundImage?.[0].url} />
      {filteredEstates.length ? (
        <RetirementEstates estates={filteredEstates} />
      ) : null}

      {propsFind(pageLayout, "retirementLayout_masterPlan_BlockType") ? (
        <MasterPlan
          data={propsFind(pageLayout, "retirementLayout_masterPlan_BlockType")}
        />
      ) : null}
      {propsFind(pageLayout, "retirementLayout_feeCovers_BlockType") ? (
        <CostAndFee
          data={propsFind(pageLayout, "retirementLayout_feeCovers_BlockType")}
        />
      ) : null}
      {/* <RegisterPanel
        data={propsFind(globalPromos, "globalPromos_estateRegister_BlockType")}
      /> */}
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
            textColor
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
              hyperlink {
                slug
              }
            }
            icon {
              url
              width
              height
              title
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
          ... on globalPromos_trustMarkers_BlockType {
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
  const retirementTrustMarkers = await craftAPI(retirementTrustQuery);
  const layoutData = await craftAPI(layoutQuery);
  const newsList = await craftAPI(simpleNewsQuery);
  const homesList = await craftAPI(fullHomeListQuery);
  const estateList = await craftAPI(fullEstatesQuery);

  return {
    props: {
      pageData,
      retirementTrustMarkers,
      layoutData,
      newsList,
      homesList,
      estateList,
    },
    revalidate: 60,
  };
};

export default RetirementLiving;
