import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import { get, map, sortBy } from "lodash";
import craftAPI from "@libs/api";
import { propsFind } from "@utils/propsFind";
import { trustQuery } from "@libs/queries";
import { useSetRecoilState } from "recoil";
import { allHomesState } from "@states/atoms/homes";
import { HomeModel, OverViewPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindHome/Hero/Hero";
import HomesListing from "@sections/FindHome/HomesListing/HomesListing";
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
  const suburbList = sortBy(map(homesList, "suburb"));
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
          <HomesListing />
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

export const getStaticProps = async function () {
  const pageData = await craftAPI(pageQuery);
  const trustMakers = await craftAPI(trustQuery);

  return {
    props: {
      pageData,
      trustMakers,
    },
    revalidate: 500,
  };
};

export default OpenInspection;
