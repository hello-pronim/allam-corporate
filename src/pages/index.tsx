import type { GetStaticProps, NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";

import { NormalPageProps, PageProps } from "@models";
import craftAPI from "@libs/api";
import { easyBuyQuery, layoutQuery, simpleEstatesQuery, trustQuery } from "@libs/queries";
import { propsFind } from "@utils/propsFind";

import Layout from "@components/Layout/Layout";
import Hero from "@sections/Home/Hero/Hero";
import TrustMarkers from "@sections/Home/TrustMarkers/TrustMarkers";
import PerfectEstate from "@sections/Home/PerfectEstate/PerfectEstate";
import Monterey from "@sections/Home/Monterey/Monterey";
import Promotion from "@sections/Home/Promotion/Promotion";
import FindHomes from "@sections/Home/FindHomes/FindHomes";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const Home: NextPage<NormalPageProps> = ({
  estateList,
  pageData,
  trustMarkers,
  layoutData,
  easyBuy
}) => {
  const heroSlider = get(pageData, "entry.heroSlider", []);
  const homeLayouts = get(pageData, "entry.homepageLayout", []);
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMarkers, "globalSet.trustFeature", []);

  return (
    <Layout layoutData={layoutData}>
      <Hero data={heroSlider} />
      <TrustMarkers
        features={trustFeatures}
        data={propsFind(globalPromos, "globalPromos_trustMarkers_BlockType")}
      />
      <PerfectEstate
        data={propsFind(homeLayouts, "homepageLayout_perfectEstate_BlockType")}
        estates={estateList.entries}
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
        data={easyBuy.globalSet.easyBuy[0]}
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
            bannerHyperlink {
              slug
            }
          }
        }
        globalPromos {
          ... on globalPromos_trustMarkers_BlockType {
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
            leftLabel
            leftLink {
              ... on promotions_default_Entry {
                slug
              }
            }
            image {
              url
            }
            rightHeading
            rightSubHeading
            rightLabel
            rightLink {
              ... on promotions_default_Entry {
                slug
              }
            }
          }
          ... on homepageLayout_findHomes_BlockType {
            heading
            description
            backgroundImage {
              url
            }
            textcolor
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

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}: {
  preview?: any;
  previewData?: any;
}) {
  const previewToken: any = preview ? previewData?.token : undefined;
  const pageData = await craftAPI(homeQuery, previewToken);
  const layoutData = await craftAPI(layoutQuery, previewToken);
  const trustMarkers = await craftAPI(trustQuery, previewToken);
  const estateList = await craftAPI(simpleEstatesQuery, previewToken);
  const easyBuy = await craftAPI(easyBuyQuery, previewToken);

  return {
    props: {
      pageData,
      layoutData,
      trustMarkers,
      estateList,
      easyBuy,
    },
    revalidate: 60,
  };
};

export default Home;
