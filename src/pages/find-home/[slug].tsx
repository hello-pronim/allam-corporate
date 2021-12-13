import React from "react";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import StickyBar from "@components/StickyBar/StickyBar";
import Hero from "@sections/HomeDetail/Hero/Hero";
import BannerGallery from "@sections/HomeDetail/BannerGallery/BannerGallery";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import HomeInfo from "@sections/HomeDetail/HomeInfo/HomeInfo";
import { landRegisterData } from "@libs/constants";

const HomeDetail: NextPage<any> = ({ home, layoutData }) => {
  const title = get(home, "entry.title", "");
  const estateInfo = get(home, "entry.estate[0]", "");
  const bannerImages = get(home, "entry.images", []);
  const introBlurb = get(home, "entry.introBlurb", "");
  const gallery3dUrl = get(home, "entry.gallery3dUrl", "");
  const offer = get(home, "entry.associatedOffers[0]", "");
  const videos = get(home, "entry.videos", []);
  const homeDesign = get(home, "entry.homeDesign[0].title", "");
  const brochureUrl = get(home, "entry.downloadableBrochure[0].url", "");
  const floorPlan = get(home, "entry.floorPlan[0]");

  return (
    <div>
      <Layout layoutData={layoutData}>
        <Hero data={home?.entry} />
        <BannerGallery
          images={bannerImages}
          videos={videos}
          gallery3dUrl={gallery3dUrl}
        />
        <HomeInfo
          introBlurb={introBlurb}
          estateInfo={estateInfo}
          offer={offer}
          homeDesign={homeDesign}
          brochureUrl={brochureUrl}
          floorPlan={floorPlan}
        />
        <RegisterPanel data={landRegisterData} />
      </Layout>
      <StickyBar title={title} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const slug = get(params, "slug");
  const layoutData = await craftAPI(layoutQuery);

  const homeQuery = gql`
    query homeQuery($slug: [String] = "${slug}") {
      entry(section: "homesAndLand", slug: $slug) {
        ... on homesAndLand_default_Entry {
          title
          suburb
          lotNumber
          address
          bedrooms
          bathrooms
          car
          buildingSize
          landSize
          sellingLabel
          completionDate
          percentageComplete
          floorPlan {
            url
            title
            width
            height
          }
          homeDesign {
            title
          }
          gallery3dUrl
          estate {
            ... on estates_default_Entry {
              title
              salesCentre {
                ... on locations_default_Entry {
                  phoneNumber
                  title
                  officeName
                  streetAddress
                  suburb
                  locationState
                  postcode
                  daysOpen
                  hoursOpen
                }
              }
            }
          }
          associatedOffers {
            ... on promotions_default_Entry {
              title
              shortDescription
              introBlurb
            }
          }
          images {
            title
            url
            width
            height
          }
          videos {
            ... on ourVideos_default_Entry {
              videoLink
              titleImage {
                url
              }
            }
          }
          introBlurb
          latitude
          longitude
          downloadableBrochure {
            url
          }
        }
      }
    }
  `;

  const home = await craftAPI(homeQuery);

  return {
    props: {
      home,
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

export default HomeDetail;
