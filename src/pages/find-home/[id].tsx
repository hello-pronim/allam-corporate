import type { NextPage } from "next";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
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

const FindHomeDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Hero />
      <BannerGallery />
      <LeadingInfo />
      <HomeList />
      <MasterPlan />
      <Deposit />
      <News />
      <SimilarEstates />
      <SignUpEstate />
    </Layout>
  );
};

const homesQuery = gql`
  query homesQuery {
    entries(section: "homesAndLand") {
      ... on homesAndLand_default_Entry {
        title
        landOnly
        lotNumber
        address
        suburb
        estate {
          ... on estates_default_Entry {
            title
          }
        }
        openForInspection
        inspectionTimes {
          ... on inspectionTimes_BlockType {
            days
            time
          }
        }
        buildingSize
        landSize
        percentageComplete
        completionDate
        bedrooms
        bathrooms
        car
        latitude
        longitude
        introBlurb
        features
        gallery3dUrl
        images {
          url
          title
          width
          height
        }
        downloadableBrochure {
          url
          title
        }
      }
    }
  }
`;

export default FindHomeDetail;
