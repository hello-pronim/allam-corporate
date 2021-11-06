import React, { useState } from "react";
import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { trustQuery } from "@libs/queries";
import { propsFind } from "@utils/propsFind";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindLand/Hero/Hero";
import LandListing from "@sections/FindLand/LandListing/LandListing";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import Overview from "@sections/FindLand/Overview/Overview";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const OpenInspection: NextPage<PageProps> = ({ pageData, trustMakers }) => {
  const [showMap, setShowMap] = useState(false);
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);

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
