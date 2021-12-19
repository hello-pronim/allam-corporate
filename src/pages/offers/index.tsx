import type { NextPage } from "next";
import { get } from "lodash";
import craftAPI from "@libs/api";
import { gql } from "@apollo/client";
import { PageProps } from "@models";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Offers/Hero/Hero";
import OffersContent from "@sections/Offers/OffersContent/OffersContent";

const PromotionalOffers: NextPage<PageProps> = ({ pageData, layoutData }) => {
  const offersList = get(pageData, "entries", []);

  return (
    <Layout layoutData={layoutData}>
      <Hero heading={"Promotional Offers"} />
      <OffersContent offers={offersList} />
    </Layout>
  );
};

const offersQuery = gql`
  query offersQuery {
    entries(section: "promotions") {
      ... on promotions_default_Entry {
        title
        publishDate
        expiryDate
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
      }
    }
  }
`;

export const getStaticProps = async function () {
  const layoutData = await craftAPI(layoutQuery);
  const pageData = await craftAPI(offersQuery);

  return {
    props: {
      layoutData,
      pageData,
    },
    revalidate: 60,
  };
};

export default PromotionalOffers;
