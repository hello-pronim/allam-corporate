import type { NextPage } from "next";
import get from "lodash/get";
import { GetStaticProps, GetStaticPaths } from "next";
import { gql } from "@apollo/client";

import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import { offerRegisterPanelData } from "@libs/constants";
import { EstateModel, PageProps } from "@models";

import Layout from "@components/Layout/Layout";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";

import Hero from "@sections/Offers/Detail/Hero/Hero";
import DetailContent from "@sections/Offers/Detail/DetailContent/DetailContent";
import OfferAvailableEstates from "@sections/Offers/Detail/OfferAvailbleEstates/OfferAvailbleEstates";

const PromotionalOfferDetail: NextPage<PageProps> = ({
  pageData,
  layoutData,
}) => {
  const title = get(pageData, "entry.title", "");
  const description = get(pageData, "entry.description", "");
  const textColor = get(pageData, "entry.textColor", null);
  const shortDescription = get(pageData, "entry.shortDescription", "");
  const heroBackground = get(pageData, "entry.titleImage[0]", "");
  const linkedEstates: EstateModel[] = get(pageData, "entry.linkedEstates", []);
  const registerPanel = get(pageData, "entry.registerPanel[0]", null);

  return (
    <Layout layoutData={layoutData}>
      <Hero
        title={title}
        shortDescription={shortDescription}
        heroBackground={heroBackground}
      />

      <DetailContent description={description} />
      {linkedEstates.length > 0 && (
        <OfferAvailableEstates
          title="Offer available at these estates"
          estates={linkedEstates}
        />
      )}
      {/* <RegisterPanel
        data={registerPanel ? registerPanel : offerRegisterPanelData}
      /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const slug = get(params, "slug");
  const layoutData = await craftAPI(layoutQuery);

  const offerQuery = gql`
    query offerQuery($slug: [String] = "${slug}") {
      entry(section: "promotions", slug: $slug) {
        ... on promotions_default_Entry {
          slug
          title
          publishDate
          expiryDate
          textColor
          shortDescription
          introBlurb
          description
          homePageBanner {
            title
            url
          }
          titleImage {
            title
            url
          }
          filesDownloads {
            url
          }
          linkedEstates {
            ... on estates_default_Entry {
              title
              logo {
                url
                title
                width
                height
              }
            }
          }
          registerPanel {
            ... on registerPanel_registerPanel_BlockType {
              headingRedactor
              description
            }
          }
        }
      }
    }
  `;

  const pageData = await craftAPI(offerQuery);

  return {
    props: {
      pageData,
      layoutData,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default PromotionalOfferDetail;
