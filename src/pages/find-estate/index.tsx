import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import { propsFind } from "@utils/propsFind";
import craftAPI from "@libs/api";
import { trustQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindEstate/Hero/Hero";
import EstateListing from "@sections/FindEstate/EstateListing/EstateListing";
import TrustMakers from "@sections/FindEstate/TrustMakers/TrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import Overview from "@sections/FindEstate/Overview/Overview";

type EstatesPageProps = {
  pageData?: any;
  trustMakers?: any;
};

const FindEstate: NextPage<EstatesPageProps> = ({ pageData, trustMakers }) => {
  const heading = get(pageData, "entry.heading", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);

  return (
    <Layout>
      <Hero heading={heading} introBlurb={introBlurb} />
      <Overview />
      {/* <EstateListing />
      <TrustMakers />
      <AllBenefits /> */}
    </Layout>
  );
};

const estateQuery = gql`
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
  const pageData = await craftAPI(estateQuery);
  const trustMakers = await craftAPI(trustQuery);

  return {
    props: {
      pageData,
      trustMakers,
    },
    revalidate: 500,
  };
};

export default FindEstate;
