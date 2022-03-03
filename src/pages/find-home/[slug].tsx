import React from "react";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";

import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import { landRegisterData } from "@libs/constants";

import { InclusionModel } from "@models";
import Layout from "@components/Layout/Layout";
import StickyBar from "@components/StickyBar/StickyBar";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import Hero from "@sections/HomeDetail/Hero/Hero";
import HomeInfo from "@sections/HomeDetail/HomeInfo/HomeInfo";
import BannerGallery from "@sections/HomeDetail/BannerGallery/BannerGallery";

const HomeDetail: NextPage<any> = ({ home, layoutData }) => {
  const title = get(home, "entry.title", "");
  const crmId = get(home, "entry.crmId", "");
  const estateInfo = get(home, "entry.estate[0]", "");
  const bannerImages = get(home, "entry.images", []);
  const introBlurb = get(home, "entry.introBlurb", "");
  const gallery3dUrl = get(home, "entry.gallery3dUrl", "");
  const offer = get(home, "entry.associatedOffers[0]", "");
  const videos = get(home, "entry.videos", []);
  const homeDesign = get(home, "entry.homeDesign", "");
  const brochureUrl = get(home, "entry.downloadableBrochure[0].url", null);
  const floorPlan = get(home, "entry.floorPlan[0]");
  const featuresInclusion: InclusionModel = get(
    home,
    "entry.featuresInclusion[0]",
    null
  );

  return (
    <div>
      <Layout layoutData={layoutData}>
        <Hero data={home?.entry} estateId={estateInfo.estateId} crmId={crmId} />
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
          featuresInclusion={featuresInclusion}
        />
        {/* <RegisterPanel data={landRegisterData} /> */}
      </Layout>
      <StickyBar title={title} estateId={estateInfo.estateId} crmId={crmId} />
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
          crmId
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
          openForInspection
          floorPlan {
            url
            title
            width
            height
          }
          homeDesign
          gallery3dUrl
          estate {
            ... on estates_default_Entry {
              title
              estateId
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
          featuresInclusion {
            ... on inclusions_default_Entry {
              inclusionLevel
              inclusionsBrochure {
                url
              }
              featuredInclusions
              fullInclusionTable {
                ... on fullInclusionTable_BlockType {
                  inclusionCategory
                  inclusionList {
                    inclusionName
                  }
                }
              }
            }
          }
          associatedOffers {
            ... on promotions_default_Entry {
              title
              shortDescription
              slug
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
