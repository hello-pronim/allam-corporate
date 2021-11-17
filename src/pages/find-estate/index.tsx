import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { get, map, sortBy } from "lodash";
import { useSetRecoilState } from "recoil";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { EstatesPageProps } from "@models";
import { trustQuery } from "@libs/queries";
import { propsFind } from "@utils/propsFind";
import { allEstateState } from "@states/atoms/estates";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindEstate/Hero/Hero";
import EstateListing from "@sections/FindEstate/EstateListing/EstateListing";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import Overview from "@sections/FindEstate/Overview/Overview";

const FindEstate: NextPage<EstatesPageProps> = ({
  pageData,
  trustMakers,
  estatesData,
}) => {
  const [showMap, setShowMap] = useState(false);
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);
  const estateList = get(estatesData, "entries", []);
  const suburbList = sortBy(map(estateList, "suburb"));
  const setEstates = useSetRecoilState(allEstateState);

  useEffect(() => {
    setEstates(estateList);
  }, [estateList]);

  return (
    <Layout>
      <Hero
        heading={heading}
        introBlurb={introBlurb}
        setShowMap={setShowMap}
        showMap={showMap}
        suburbList={suburbList}
      />
      {showMap ? (
        <Overview />
      ) : (
        <>
          <EstateListing />
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

const estatesQuery = gql`
  query estatesQuery {
    entries(section: "estates") {
      ... on estates_default_Entry {
        title
        introText
        estateState(label: true)
        estateStatus
        retirementLiving
        logo {
          title
          url
          width
          height
        }
        postcode
        suburb
        latitude
        longitude
        geojson
        downloadableBrochure {
          url
        }
        masterPlanImage {
          url
        }
        galleryImages {
          title
          url
          width
          height
        }
        offersLink {
          ... on offersLink_BlockType {
            internalOffer {
              ... on promotions_default_Entry {
                title
                shortDescription
                introBlurb
                description
              }
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
  const estatesData = await craftAPI(estatesQuery);

  return {
    props: {
      pageData,
      trustMakers,
      estatesData,
    },
    revalidate: 500,
  };
};

export default FindEstate;
