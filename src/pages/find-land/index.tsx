import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import { useSetRecoilState } from "recoil";

import craftAPI from "@libs/api";
import { layoutQuery, trustQuery } from "@libs/queries";
import { propsFind } from "@utils/propsFind";
import { allLandsState } from "@states/atoms/lands";
import { HomeModel, OverViewPageProps } from "@models";

import Layout from "@components/Layout/Layout";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import Hero from "@sections/FindLand/Hero/Hero";
import LandListing from "@sections/FindLand/LandListing/LandListing";
import Overview from "@sections/FindLand/Overview/Overview";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const FindLand: NextPage<OverViewPageProps> = ({
  pageData,
  trustMakers,
  listingData,
  layoutData,
}) => {
  const [showMap, setShowMap] = useState(false);
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);
  const landsList = get(listingData, "entries", []);
  const setLands = useSetRecoilState(allLandsState);

  useEffect(() => {
    setLands(landsList?.filter((el: HomeModel) => el.landOnly === true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [landsList]);

  return (
    <Layout layoutData={layoutData}>
      <Hero
        heading={heading}
        introBlurb={introBlurb}
        showMap={showMap}
        setShowMap={setShowMap}
      />
      <LandListing showMap={showMap} setShowMap={setShowMap} />
      {showMap ? (
        <Overview />
      ) : (
        <>
          <div style={{ background: "#eef2f5" }}>
            <LeadingTrustMakers
              features={trustFeatures}
              data={propsFind(
                globalPromos,
                "globalPromos_trustMakers_BlockType"
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
  const trustMakers = await craftAPI(trustQuery);
  const listingData = await craftAPI(landsQuery);
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      pageData,
      trustMakers,
      listingData,
      layoutData,
    },
    revalidate: 60,
  };
};

export default FindLand;
