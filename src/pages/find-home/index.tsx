import React, { useState } from "react";
import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import { propsFind } from "@utils/propsFind";
import craftAPI from "@libs/api";
import { trustQuery } from "@libs/queries";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindHome/Hero/Hero";
import HomesListing from "@sections/FindHome/HomesListing/HomesListing";
import Overview from "@sections/FindHome/Overview/Overview";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const FindHome: NextPage<PageProps> = ({ pageData, trustMakers }) => {
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
  const pageData = await craftAPI(findHomesQuery);
  const trustMakers = await craftAPI(trustQuery);

  return {
    props: {
      pageData,
      trustMakers,
    },
    revalidate: 500,
  };
};

export default FindHome;
