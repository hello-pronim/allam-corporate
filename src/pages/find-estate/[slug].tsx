import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindEstateDetail/Hero/Hero";
import BannerGallery from "@sections/FindEstateDetail/BannerGallery/BannerGallery";
import LeadingInfo from "@sections/FindEstateDetail/LeadingInfo/LeadingInfo";
import HomeList from "@sections/FindEstateDetail/HomeList/HomeList";
import MasterPlan from "@sections/FindEstateDetail/MasterPlan/MasterPlan";
import Deposit from "@sections/FindEstateDetail/Deposit/Deposit";
import News from "@sections/FindEstateDetail/News/News";
import SimilarEstates from "@sections/FindEstateDetail/SimilarEstates/SimilarEstates";
import SignUpEstate from "@sections/FindEstateDetail/SignUpEstate/SignUpEstate";

const FindEstateDetail: NextPage<any> = ({ estate, layoutData }) => {
  const title = get(estate, "entry.title", "");
  const logo = get(estate, "entry.logo", []);
  const suburb = get(estate, "entry.suburb", "");
  const estateState = get(estate, "entry.estateState", "");
  const postcode = get(estate, "entry.postcode", "");

  return (
    <Layout layoutData={layoutData}>
      <Hero
        title={title}
        address={`${suburb}, ${estateState} ${postcode}`}
        logo={logo}
      />
      <BannerGallery />
      <LeadingInfo introText={get(estate, "entry.introText", "")} />
      <HomeList />
      <MasterPlan />
      <Deposit />
      <News />
      <SimilarEstates />
      <SignUpEstate />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const slug = get(params, "slug");
  const layoutData = await craftAPI(layoutQuery);

  const estateQuery = gql`
    query estateQuery($slug: [String] = "${slug}") {
      entry(section: "estates", slug: $slug) {
        ... on estates_default_Entry {
          title
          introText
          streetAddress
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

  const estate = await craftAPI(estateQuery);

  return {
    props: {
      estate,
      layoutData,
    },
    revalidate: 500,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default FindEstateDetail;
