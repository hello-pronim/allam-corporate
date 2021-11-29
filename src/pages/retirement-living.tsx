import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { PageProps } from "@models";
import { propsFind } from "@utils/propsFind";
import { layoutQuery, trustQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import CardGrid from "@components/CardGrid/CardGrid";
import MinimalCard from "@components/MinimalCard/MinimalCard";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import Hero from "@sections/Retirement/Hero/Hero";
import LeadingHomes from "@sections/Retirement/LeadingHomes/LeadingHomes";
import CostAndFee from "@sections/Retirement/CostAndFee/CostAndFee";
import MasterPlan from "@sections/Retirement/MasterPlan/MasterPlan";

const RetirementLiving: NextPage<PageProps> = ({
  pageData,
  trustMakers,
  layoutData,
}) => {
  const pageLayout = get(pageData, "entry.retirementLayout", []);
  const globalPromos = get(pageData, "entry.globalPromos", []);
  const trustFeatures = get(trustMakers, "globalSet.trustFeature", []);
  const fullImageLayout = propsFind(
    pageLayout,
    "retirementLayout_fullImage_BlockType"
  );

  return pageData ? (
    <Layout layoutData={layoutData}>
      <Hero data={propsFind(pageLayout, "retirementLayout_hero_BlockType")} />
      <LeadingHomes
        trustFeatures={trustFeatures}
        titleData={propsFind(
          globalPromos,
          "globalPromos_trustMakers_BlockType"
        )}
      />
      <CardGrid
        title="News and Events"
        col={[1, 2]}
        button={{ label: "View More", url: "#" }}
        padding={[80, 160]}
        background="linear-gradient(180deg, rgba(255,255,255,1) 21%, rgba(237,242,245,1) 91%)"
      >
        <MinimalCard />
        <MinimalCard />
      </CardGrid>
      <FullWidthImage image={fullImageLayout?.backgroundImage?.[0].url} />
      <MasterPlan
        data={propsFind(pageLayout, "retirementLayout_masterPlan_BlockType")}
      />
      <CostAndFee
        data={propsFind(pageLayout, "retirementLayout_feeCovers_BlockType")}
      />
      <RegisterPanel
        data={propsFind(globalPromos, "globalPromos_estateRegister_BlockType")}
      />
    </Layout>
  ) : null;
};

const pageQuery = gql`
  query retirementPage {
    entry(section: "retirementLiving") {
      ... on retirementLiving_retirementLiving_Entry {
        retirementLayout {
          ... on retirementLayout_hero_BlockType {
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
            cta {
              label
              link
            }
          }
          ... on retirementLayout_fullImage_BlockType {
            backgroundImage {
              url
            }
          }
          ... on retirementLayout_masterPlan_BlockType {
            heading
            cta {
              label
              link
            }
          }
          ... on retirementLayout_feeCovers_BlockType {
            heading
            subHeading
            description
            titleImage {
              url
              title
              width
              height
            }
            cta {
              label
              link
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
          ... on globalPromos_estateRegister_BlockType {
            headingRedactor
            description
          }
        }
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(pageQuery);
  const trustMakers = await craftAPI(trustQuery);
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      pageData,
      trustMakers,
      layoutData,
    },
    revalidate: 60,
  };
};

export default RetirementLiving;
