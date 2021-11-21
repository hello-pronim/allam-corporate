import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import { get, map, sortBy } from "lodash";
import craftAPI from "@libs/api";
import { propsFind } from "@utils/propsFind";
import { trustQuery } from "@libs/queries";
import { useSetRecoilState } from "recoil";
import { allLandsState } from "@states/atoms/lands";
import { HomeModel, OverViewPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindHome/Hero/Hero";
import LandListing from "@sections/FindLand/LandListing/LandListing";
import Overview from "@sections/FindHome/Overview/Overview";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const FindLand: NextPage<OverViewPageProps> = ({
  pageData,
  trustMakers,
  listingData,
}) => {
  const [showMap, setShowMap] = useState(false);
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);
  const homesList = get(listingData, "entries", []);
  const suburbList = sortBy(map(homesList, "suburb"));
  const setLands = useSetRecoilState(allLandsState);

  useEffect(() => {
    setLands(homesList?.filter((el: HomeModel) => el.landOnly === true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homesList]);

  return (
    <Layout>
      <Hero
        heading={heading}
        introBlurb={introBlurb}
        setShowMap={setShowMap}
        showMap={showMap}
      />
      {showMap ? (
        <Overview />
      ) : (
        <>
          <LandListing />
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
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(findLandQuery);
  const trustMakers = await craftAPI(trustQuery);
  const listingData = await craftAPI(landsQuery);

  return {
    props: {
      pageData,
      trustMakers,
      listingData,
    },
    revalidate: 500,
  };
};

export default FindLand;
