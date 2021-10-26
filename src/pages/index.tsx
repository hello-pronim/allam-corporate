import type { NextPage } from "next";
import get from "lodash/get";
import { propsFind } from "@utils/propsFind";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { trustQuery } from "@libs/queries";
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
  const homeLayouts = get(pageData, "entry.homepageLayout", []);
  const globalPromos = get(pageData, "entry.globalPromos", []);

  return (
    <Layout>
      <Hero data={heroSlider} />
      <TrustMakers
        data={propsFind(globalPromos, "globalPromos_trustMakers_BlockType")}
      />
      <PerfectEstate
        data={propsFind(homeLayouts, "homepageLayout_perfectEstate_BlockType")}
      />
      <Monterey
        data={propsFind(homeLayouts, "homepageLayout_monterey_BlockType")}
      />
      <Promotion
        data={propsFind(homeLayouts, "homepageLayout_promotion_BlockType")}
      />
      <FindHomes
        data={propsFind(homeLayouts, "homepageLayout_findHomes_BlockType")}
      />
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
            }
          }
        }
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
            leftHeadingRedactor
            leftSubHeading
            leftLink {
              uri
            }
            image {
              url
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

export const getStaticProps = async function () {
  const pageData = await craftAPI(homeQuery);
  const trustMakers = await craftAPI(trustQuery);

  return {
    props: {
      pageData,
      trustMakers,
    },
    revalidate: 500,
  };
};

export default Home;
