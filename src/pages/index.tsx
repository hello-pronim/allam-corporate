import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Home/Hero/Hero";
import TrustMakers from "@sections/Home/TrustMakers/TrustMakers";
import PerfectEstate from "@sections/Home/PerfectEstate/PerfectEstate";
import Monterey from "@sections/Home/Monterey/Monterey";
import Promotion from "@sections/Home/Promotion/Promotion";
import FindHomes from "@sections/Home/FindHomes/FindHomes";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

type HomePageProps = {
  pageData?: any;
  trustMakers?: any;
};

const Home: NextPage<HomePageProps> = ({ pageData, trustMakers }) => {
  console.log(pageData);
  const heroSlider = get(pageData, "entry.heroSlider", []);
  console.info(heroSlider);

  return (
    <Layout>
      <Hero data={heroSlider} />
      <TrustMakers />
      <PerfectEstate />
      <Monterey />
      <Promotion />
      <FindHomes />
      <AllBenefits />
    </Layout>
  );
};

const homeQuery = gql`
  query home {
    entry(section: "homePage") {
      ... on homePage_homePage_Entry {
        heroSlider {
          ... on heroSlider_BlockType {
            heading
            subHeading
            backgroundImage {
              url
              title
            }
          }
        }
        globalPromos {
          ... on globalPromos_trustMakers_BlockType {
            heading
            description
          }
        }
        homepageLayout {
          ... on homepageLayout_perfectEstate_BlockType {
            heading
            description
            backgroundImage {
              url
            }
            buttons {
              ... on buttons_BlockType {
                buttonLabel
                buttonLink
                buttonType
              }
            }
          }
          ... on homepageLayout_monterey_BlockType {
            headingRedactor
            description
            backgroundImage {
              url
            }
            buttons {
              ... on buttons_BlockType {
                buttonLabel
                buttonLink
                buttonType
              }
            }
            icon {
              url
              width
              height
            }
          }
          ... on homepageLayout_promotion_BlockType {
            leftHeading
            leftSubHeading
            leftLink {
              uri
            }
            rightHeading
            rightSubHeading
            rightLink {
              uri
            }
          }
          ... on homepageLayout_findHomes_BlockType {
            heading
            description
            backgroundImage {
              url
            }
            buttons {
              ... on buttons_BlockType {
                buttonLabel
                buttonLink
                buttonType
              }
            }
          }
        }
      }
    }
  }
`;

const trustQuery = gql`
  query trustMaker {
    globalSet(handle: "trustMakers") {
      ... on trustMakers_GlobalSet {
        trustFeature {
          ... on trustFeature_feature_BlockType {
            heading
            subHeader
            icon {
              url
              width
              height
            }
          }
        }
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(homeQuery);
  const trustMakers = await craftAPI(trustQuery);

  return {
    props: {
      pageData,
      trustMakers,
    },
    revalidate: 20,
  };
};

export default Home;
