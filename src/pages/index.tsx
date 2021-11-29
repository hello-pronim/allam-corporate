import type { GetStaticProps, NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery, trustQuery } from "@libs/queries";
import { propsFind } from "@utils/propsFind";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Home/Hero/Hero";
import TrustMakers from "@sections/Home/TrustMakers/TrustMakers";
import PerfectEstate from "@sections/Home/PerfectEstate/PerfectEstate";
import Monterey from "@sections/Home/Monterey/Monterey";
import Promotion from "@sections/Home/Promotion/Promotion";
import FindHomes from "@sections/Home/FindHomes/FindHomes";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const Home: NextPage<PageProps> = ({ pageData, trustMakers, layoutData }) => {
  const heroSlider = get(pageData, "entry.heroSlider", []);
  const homeLayouts = get(pageData, "entry.homepageLayout", []);
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);

  return (
    <Layout layoutData={layoutData}>
      <Hero data={heroSlider} />
      <TrustMakers
        features={trustFeatures}
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
      <AllBenefits
        data={propsFind(globalPromos, "globalPromos_easybuy_BlockType")}
      />
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

export const getStaticProps: GetStaticProps = async function (context) {
  const previewToken: any = context.preview
    ? context?.previewData?.token
    : undefined;
  const pageData = await craftAPI(homeQuery, previewToken);
  const layoutData = await craftAPI(layoutQuery, previewToken);
  const trustMakers = await craftAPI(trustQuery, previewToken);

  return {
    props: {
      pageData,
      layoutData,
      trustMakers,
    },
    revalidate: 500,
  };
};

export default Home;
