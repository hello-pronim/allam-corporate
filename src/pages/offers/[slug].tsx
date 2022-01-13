import type { NextPage } from "next";
import get from "lodash/get";
import { GetStaticProps, GetStaticPaths } from "next";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Offers/Detail/Hero/Hero";
import DetailContent from "@sections/Offers/Detail/DetailContent/DetailContent";
import OfferAvailableEstates from "@sections/Offers/Detail/OfferAvailbleEstates/OfferAvailbleEstates";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";

const PromotionalOfferDetail: NextPage<PageProps> = ({
  pageData,
  layoutData,
}) => {
  console.log(pageData);
  const title = get(pageData, "entry.title", "");
  const description = get(pageData, "entry.description", "");
  const introBlurb = get(pageData, "entry.introBlurb", "");
  const shortDescription = get(pageData, "entry.shortDescription", "");
  const heroBackground = get(pageData, "entry.titleImage[0]", "");

  const registerPanelData = {
    headingRedactor:
      "<h2><strong>To take advantage fo this offer,</strong><br /> Simply register your interest today</h2>",
    description:
      "<h5>Available at selected estates<br/>Offer available from 18 June to 19 July, 2021</h5><p>Excludes garden and dual occupancy homes and land Includes: solar panels, inverter & battery Terms and conditions apply</p>",
  };

  const estates = [
    {
      id: 1,
      name: "Ardennes",
      logo: "/assets/images/estate/Logo-Ardennes-1.png",
    },
    {
      id: 2,
      name: "Killarney",
      logo: "/assets/images/estate/Logo-Madison-Rise-1.png",
    },
    {
      id: 2,
      name: "Madison Rise",
      logo: "/assets/images/estate/Logo-Madison-Rise-1.png",
    },
    {
      id: 3,
      name: "Fernlea",
      logo: "/assets/images/estate/Logo-Fernlea-1.png",
    },
    {
      id: 4,
      name: "Mirragan",
      logo: "/assets/images/estate/Logo-Mirragan-1.png",
    },
    {
      id: 5,
      name: "Ravenswood",
      logo: "/assets/images/estate/Logo-Ravenswood-1.png",
    },
    {
      id: 6,
      name: "Sophia Waters",
      logo: "/assets/images/estate/Logo-Sophia-Waters-1.png",
    },
  ];

  return (
    <Layout layoutData={layoutData}>
      <Hero
        title={title}
        shortDescription={shortDescription}
        heroBackground={heroBackground}
      />

      <DetailContent description={description} />
      <OfferAvailableEstates
        title="Offer available at these estates"
        estates={estates}
      />
      <RegisterPanel data={registerPanelData} />
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
