import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import { get } from "lodash";
import craftAPI from "@libs/api";
import { propsFind } from "@utils/propsFind";
import { easyBuyFeatureQuery, fullHomeListQuery, layoutQuery, trustQuery } from "@libs/queries";
import { useSetRecoilState } from "recoil";
import { allInspectionState } from "@states/atoms/inspection";
import { HomeModel, OverViewPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import Hero from "@sections/OpenInspection/Hero/Hero";
import InspectionList from "@sections/OpenInspection/InspectionList/InspectionList";
import Overview from "@sections/OpenInspection/Overview/Overview";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const OpenInspection: NextPage<OverViewPageProps> = ({
  pageData,
  trustMakers,
  listingData,
  layoutData,
  easyBuyFeature
}) => {
  const [showMap, setShowMap] = useState(false);
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);
  const homesList = get(listingData, "entries", []);
  const setHomes = useSetRecoilState(allInspectionState);

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
    <Layout layoutData={layoutData}>
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
          <InspectionList easyBuyFeature={easyBuyFeature.globalSet} />
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
  const listingData = await craftAPI(fullHomeListQuery);
  const layoutData = await craftAPI(layoutQuery);
  const easyBuyFeature = await craftAPI(easyBuyFeatureQuery);

  return {
    props: {
      pageData,
      trustMakers,
      listingData,
      layoutData,
      easyBuyFeature
    },
    revalidate: 60,
  };
};

export default OpenInspection;
