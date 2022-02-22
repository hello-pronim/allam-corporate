import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import craftAPI from "@libs/api";
import { easyBuyFeatureQuery, layoutQuery, trustQuery } from "@libs/queries";
import { propsFind } from "@utils/propsFind";
import { allLandsState } from "@states/atoms/lands";
import { HomeModel, OverViewPageProps } from "@models";

import Layout from "@components/Layout/Layout";
import LeadingTrustMarkers from "@components/LeadingTrustMarkers/LeadingTrustMarkers";
import Hero from "@sections/FindLand/Hero/Hero";
import LandListing from "@sections/FindLand/LandListing/LandListing";
import Overview from "@sections/FindLand/Overview/Overview";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const FindLand: NextPage<OverViewPageProps> = ({
  pageData,
  trustMarkers,
  listingData,
  layoutData,
  easyBuyFeature
}) => {
  const router = useRouter();
  const { query } = router;

  const [showMap, setShowMap] = useState(false);
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const noticeText = get(pageData, "entry.noticeText", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMarkers, "globalSet.trustFeature", []);
  const landsList = get(listingData, "entries", []);
  const setLands = useSetRecoilState(allLandsState);

  useEffect(() => {
    setLands(landsList?.filter((el: HomeModel) => el.landOnly === true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [landsList]);

  if (query?.module === "map-lands") {
    return <Overview isFullScreen />;
  }

  return (
    <Layout layoutData={layoutData}>
      <Hero
        heading={heading}
        introBlurb={introBlurb}
        showMap={showMap}
        setShowMap={setShowMap}
      />
      <LandListing
        easyBuyFeature={easyBuyFeature.globalSet}
        showMap={showMap}
        setShowMap={setShowMap}
        noticeText={noticeText}
      />
      {showMap ? (
        <Overview />
      ) : (
        <>
          <div style={{ background: "#eef2f5" }}>
            <LeadingTrustMarkers
              features={trustFeatures}
              data={propsFind(
                globalPromos,
                "globalPromos_trustMarkers_BlockType"
              )}
            />
          </div>
          <AllBenefits
            data={propsFind(globalPromos, "globalPromos_easybuy_BlockType")}
          />
        </>
      )}
    </Layout>
  );
};

const findLandQuery = gql`
  query findLandPage {
    entry(section: "findLandPage") {
      ... on findLandPage_findLandPage_Entry {
        heading
        introBlurb
        noticeText
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
          ... on globalPromos_easybuy_BlockType {
            headingRedactor
            introBlurb
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
        }
      }
    }
  }
`;

const landsQuery = gql`
  query landsQuery {
    entries(section: "homesAndLand") {
      ... on homesAndLand_default_Entry {
        slug
        title
        landOnly
        lotNumber
        address
        suburb
        estate {
          ... on estates_default_Entry {
            title
          }
        }
        openForInspection
        buildingSize
        landSize
        percentageComplete
        completionDate
        bedrooms
        bathrooms
        car
        images {
          url
          title
          width
          height
        }
        latitude
        longitude
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(findLandQuery);
  const trustMarkers = await craftAPI(trustQuery);
  const listingData = await craftAPI(landsQuery);
  const layoutData = await craftAPI(layoutQuery);
  const easyBuyFeature = await craftAPI(easyBuyFeatureQuery);

  return {
    props: {
      pageData,
      trustMarkers,
      listingData,
      layoutData,
      easyBuyFeature
    },
    revalidate: 60,
  };
};

export default FindLand;
