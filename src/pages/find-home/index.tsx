import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import craftAPI from "@libs/api";
import { fullHomeListQuery, layoutQuery, trustQuery } from "@libs/queries";
import { allHomesState } from "@states/atoms/homes";
import { HomeModel, OverViewPageProps } from "@models";

import Layout from "@components/Layout/Layout";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import Hero from "@sections/FindHome/Hero/Hero";
import Overview from "@sections/FindHome/Overview/Overview";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import HomesListing from "@sections/FindHome/HomesListing/HomesListing";

import { propsFind } from "@utils/propsFind";

const FindHome: NextPage<OverViewPageProps> = ({
  pageData,
  trustMakers,
  listingData,
  layoutData,
}) => {
  const router = useRouter();
  const { query } = router;

  const [showMap, setShowMap] = useState(false);
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);
  const homesList = get(listingData, "entries", []);
  const setHomes = useSetRecoilState(allHomesState);

  useEffect(() => {
    setHomes(homesList?.filter((el: HomeModel) => el.landOnly === false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homesList]);

  if (query?.module === "map-homes") {
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
      <HomesListing setShowMap={setShowMap} showMap={showMap} />
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

const findHomesQuery = gql`
  query findHomesPage {
    entry(section: "findHomesPage") {
      ... on findHomesPage_findHomesPage_Entry {
        heading
        introBlurb
        globalPromos {
          ... on globalPromos_trustMakers_BlockType {
            heading
            description
            hascta
            cta {
              label
              hyperlink {
                slug
              }
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
  const pageData = await craftAPI(findHomesQuery);
  const trustMakers = await craftAPI(trustQuery);
  const listingData = await craftAPI(fullHomeListQuery);
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

export default FindHome;
