import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import { get } from "lodash";
import craftAPI from "@libs/api";
import { propsFind } from "@utils/propsFind";
import { trustQuery } from "@libs/queries";
import { useSetRecoilState } from "recoil";
import { allHomesState } from "@states/atoms/homes";
import { HomeModel, OverViewPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/OpenInspection/Hero/Hero";
import InspectionList from "@sections/OpenInspection/InspectionList/InspectionList";
import Overview from "@sections/FindHome/Overview/Overview";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const OpenInspection: NextPage<OverViewPageProps> = ({
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

  const setHomes = useSetRecoilState(allHomesState);

  useEffect(() => {
    setHomes(
      homesList?.filter(
        (el: HomeModel) =>
          el.landOnly === false && el.openForInspection === true
      )
    );
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
          <InspectionList />
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

const pageQuery = gql`
  query openInspection {
    entry(section: "openForInspection") {
      ... on openForInspection_openForInspection_Entry {
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

const homesQuery = gql`
  query homesQuery {
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
        inspectionTimes {
          ... on inspectionTimes_BlockType {
            days
            time
          }
        }
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
  const pageData = await craftAPI(pageQuery);
  const trustMakers = await craftAPI(trustQuery);
  const listingData = await craftAPI(homesQuery);

  return {
    props: {
      pageData,
      trustMakers,
      listingData,
    },
    revalidate: 500,
  };
};

export default OpenInspection;