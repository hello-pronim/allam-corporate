import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import { OverViewPageProps } from "@models";
import craftAPI from "@libs/api";
import {
  layoutQuery,
  trustQuery,
  simpleHomeListQuery,
  fullEstatesQuery,
  easyBuyFeatureQuery,
} from "@libs/queries";
import { allEstateState } from "@states/atoms/estates";

import Layout from "@components/Layout/Layout";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import Hero from "@sections/FindEstate/Hero/Hero";
import Overview from "@sections/FindEstate/Overview/Overview";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import EstateListing from "@sections/FindEstate/EstateListing/EstateListing";

import { propsFind } from "@utils/propsFind";
import { getSuburbs } from "@utils/getSuburbs";

const FindEstate: NextPage<OverViewPageProps> = ({
  pageData,
  trustMakers,
  listingData,
  layoutData,
  homesList,
  easyBuyFeature
}) => {
  const router = useRouter();
  const { query } = router;

  const [showMap, setShowMap] = useState(false);
  const [suburbList, setSuburbList] = useState<string[]>([]);
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);
  const setEstates = useSetRecoilState(allEstateState);

  useEffect(() => {
    const estateList = get(listingData, "entries", []);
    setEstates(estateList);
    setSuburbList(getSuburbs(estateList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingData]);

  if (query?.module === "map-estates") {
    return <Overview homesList={homesList.entries} isFullScreen />;
  }

  return (
    <Layout layoutData={layoutData}>
      <Hero
        heading={heading}
        introBlurb={introBlurb}
        setShowMap={setShowMap}
        showMap={showMap}
        suburbList={suburbList}
      />
      {showMap ? (
        <Overview homesList={homesList.entries} />
      ) : (
        <>
          <EstateListing easyBuyFeature={easyBuyFeature.globalSet} homesList={homesList.entries} />
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
  query estatePage {
    entry(section: "findEstatePage") {
      ... on findEstatePage_findEstatePage_Entry {
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
  const listingData = await craftAPI(fullEstatesQuery);
  const layoutData = await craftAPI(layoutQuery);
  const homesList = await craftAPI(simpleHomeListQuery);
  const easyBuyFeature = await craftAPI(easyBuyFeatureQuery);

  return {
    props: {
      pageData,
      trustMakers,
      listingData,
      layoutData,
      homesList,
      easyBuyFeature
    },
    revalidate: 60,
  };
};

export default FindEstate;
