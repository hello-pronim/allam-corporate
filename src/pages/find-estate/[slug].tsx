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
  const videos = get(estate, "entry.videos", []);
  const bannerImages = get(estate, "entry.galleryImages", []);
  const masterPlan = get(estate, "entry.masterPlanImage[0]", "");
  const salesCentre = get(estate, "entry.salesCentre[0]", "");
  const streetAddress = get(estate, "entry.streetAddress", "");
  const estateLocationAddress = `${suburb} ${estateState} ${postcode}`;

  console.log(estate);

  return (
    <Layout layoutData={layoutData}>
      <Hero
        title={title}
        address={`${suburb}, ${estateState} ${postcode}`}
        logo={logo}
      />
      <BannerGallery images={bannerImages} videos={videos} logo={logo} />
      <LeadingInfo
        introText={get(estate, "entry.introText", "")}
        streetAddress={streetAddress}
        salesCentre={salesCentre}
        estateLocationAddress={estateLocationAddress}
      />
      <HomeList />
      <MasterPlan masterPlanImage={masterPlan} />
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
          videos {
            ... on ourVideos_default_Entry {
              videoLink
              titleImage {
                url
              }
            }
          }
          salesCentre {
            ... on locations_default_Entry {
              title
              phoneNumber
              streetAddress
              officeName
              suburb
              locationState
              postcode
              daysOpen
              hoursOpen
              directionsLink
            }
          }
          masterPlanImage {
            title
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
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default FindEstateDetail;
