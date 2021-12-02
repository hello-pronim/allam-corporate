import React from "react";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import StickyBar from "@components/Stickybar/Stickybar";
import Hero from "@sections/LandDetail/Hero/Hero";
import BannerImage from "@sections/LandDetail/BannerImage/BannerImage";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import LandInfo from "@sections/LandDetail/LandInfo/LandInfo";
import { landRegisterData } from "@libs/constants";

const LandDetail: NextPage<any> = ({ land, layoutData }) => {
  const title = get(land, "entry.title", "");
  const estateInfo = get(land, "entry.estate[0]", "");
  const sellingLabel = get(land, "entry.sellingLabel");
  const landSize = get(land, "entry.landSize", 0);
  const bannerImage = get(land, "entry.images[0]", "");
  const introBlurb = get(land, "entry.introBlurb", "");
  const offer = get(land, "entry.associatedOffers[0]", "");

  return (
    <div>
      <Layout layoutData={layoutData}>
        <Hero title={title} landSize={landSize} sellingLabel={sellingLabel} />
        <BannerImage image={bannerImage} />
        <LandInfo
          introBlurb={introBlurb}
          estateInfo={estateInfo}
          offer={offer}
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

  const landQuery = gql`
    query landQuery($slug: [String] = "${slug}") {
      entry(section: "homesAndLand", slug: $slug) {
        ... on homesAndLand_default_Entry {
          title
          suburb
          lotNumber
          address
          estate {
            ... on estates_default_Entry {
              title
              salesCentre {
                ... on locations_default_Entry {
                  title
                  phoneNumber
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
          sellingLabel
          landSize
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

  const land = await craftAPI(landQuery);

  return {
    props: {
      land,
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

export default LandDetail;
