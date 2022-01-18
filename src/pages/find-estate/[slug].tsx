import React, { useMemo } from "react";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";

import craftAPI from "@libs/api";
import {
  layoutQuery,
  fullHomeListQuery,
  simpleNewsQuery,
  fullEstatesQuery,
} from "@libs/queries";

import Layout from "@components/Layout/Layout";

import Hero from "@sections/FindEstateDetail/Hero/Hero";
import Deposit from "@sections/FindEstateDetail/Deposit/Deposit";
import HomeList from "@sections/FindEstateDetail/HomeList/HomeList";
import NewsList from "@sections/FindEstateDetail/NewsList/NewsList";
import MasterPlan from "@sections/FindEstateDetail/MasterPlan/MasterPlan";
import LeadingInfo from "@sections/FindEstateDetail/LeadingInfo/LeadingInfo";
import SignUpEstate from "@sections/FindEstateDetail/SignUpEstate/SignUpEstate";
import BannerGallery from "@sections/FindEstateDetail/BannerGallery/BannerGallery";
import SimilarEstates from "@sections/FindEstateDetail/SimilarEstates/SimilarEstates";

const FindEstateDetail: NextPage<any> = ({
  estate,
  layoutData,
  estateList,
  homeList,
  newsList,
}) => {
  const title = get(estate, "entry.title", "");
  const logo = get(estate, "entry.logo", []);
  const suburb = get(estate, "entry.suburb", "");
  const estateState = get(estate, "entry.estateState", "");
  const postcode = get(estate, "entry.postcode", "");
  const videos = get(estate, "entry.videos", []);
  const documents = get(estate, "entry.documents", null);
  const bannerImages = get(estate, "entry.galleryImages", []);
  const masterPlan = get(estate, "entry.masterPlanImage[0]", "");
  const salesCentre = get(estate, "entry.salesCentre[0]", "");
  const latitude = get(estate, "entry.latitude", "");
  const longitude = get(estate, "entry.longitude", "");

  const filteredEstates: any[] = useMemo(() => {
    return estateList
      ? Array.from(estateList.entries).filter(
          (estate: any) => estate.title !== title
        )
      : [];
  }, [title, estateList]);

  const filteredHomes: any[] = useMemo(() => {
    return homeList
      ? Array.from(homeList?.entries).filter(
          (home: any) => home?.estate[0].title === title
        )
      : [];
  }, [title, homeList]);

  const filteredNews: any[] = useMemo(() => {
    return newsList
      ? Array.from(newsList?.entries).filter((news: any) =>
          news?.linkedEstates.some((estate: any) => estate.title === title)
        )
      : [];
  }, [title, newsList]);

  return (
    <Layout layoutData={layoutData}>
      <Hero
        title={title}
        address={`${suburb}, ${estateState} ${postcode}`}
        logo={logo}
        filteredHomes={filteredHomes}
      />
      <BannerGallery images={bannerImages} videos={videos} logo={logo} />
      <LeadingInfo
        introText={get(estate, "entry.introText", "")}
        salesCentre={salesCentre}
        documents={documents}
      />
      {filteredHomes && (
        <HomeList title={title} filteredHomes={filteredHomes} />
      )}
      <MasterPlan masterPlanImage={masterPlan} />
      <Deposit />
      <NewsList news={filteredNews} />
      <SimilarEstates
        estateList={filteredEstates}
        homeList={homeList.entries}
        latitude={Number(latitude)}
        longitude={Number(longitude)}
      />
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
          documents
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
              linkedEstates {
                ... on estates_default_Entry {
                  slug
                  title
                  streetAddress
                  estateState(label: true)
                  suburb
                  postcode
                }
              }
              officeName
              streetAddress
              suburb
              locationState
              postcode
              daysOpen
              hoursOpen
              phoneNumber
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
  const estateList = await craftAPI(fullEstatesQuery);
  const homeList = await craftAPI(fullHomeListQuery);
  const newsList = await craftAPI(simpleNewsQuery);

  return {
    props: {
      estate,
      layoutData,
      estateList,
      homeList,
      newsList,
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
