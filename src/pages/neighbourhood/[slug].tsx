import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";

import craftAPI from "@libs/api";
import { amenityCategoryQuery } from "@libs/queries";
import { AmenityCategoryModel, NeighborhoodModel } from "@models";
import Neighborhood from "@sections/FindEstateDetail/Neighborhood/Neighborhood";

const SingleNeighborhood: NextPage<any> = ({ neighborhood, categories }) => {
  const neighborhoodData: NeighborhoodModel = neighborhood.entry;
  const categoryList: AmenityCategoryModel[] = get(
    categories,
    "categories",
    null
  );

  return (
    <div>
      <Head>
        <title>{`Neighbourhood - ${neighborhoodData.title}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Neighborhood
        data={neighborhoodData}
        categoryList={categoryList}
        isSinglePage
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const slug = get(params, "slug");

  const query = gql`
    query neighborhoodQuery($slug: [String] = "${slug}") {
      entry(section: "neighborhoods", slug: $slug) {
        ... on neighborhoods_default_Entry {
          title
          amenities {
            ... on amenities_BlockType {
              amenityName
              amenityCategory {
                ... on amenityCategories_Category {
                  title
                }
              }
              address
              suburb
              latitude
              longitude
              externalUrl
            }
          }
        }
      }
    }
  `;

  const neighborhood = await craftAPI(query);
  const categories = await craftAPI(amenityCategoryQuery);

  return {
    props: {
      neighborhood,
      categories,
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

export default SingleNeighborhood;
