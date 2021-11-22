import React from "react";
import { get } from "lodash";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/GetInTouch/Hero/Hero";
import TabbedContent from "@sections/GetInTouch/TabbedContent/TabbedContent";

type PageProps = {
  locationData: any;
};

const GetInTouch: NextPage<PageProps> = ({ locationData }) => {
  return (
    <Layout>
      <Hero heading="Get in Touch" />
      <TabbedContent locations={get(locationData, "entries", [])} />
    </Layout>
  );
};

const locationsQuery = gql`
  query locationsQuery {
    entries(section: "locations") {
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
  }
`;

export const getStaticProps = async function () {
  const locationData = await craftAPI(locationsQuery);

  return {
    props: {
      locationData,
    },
    revalidate: 500,
  };
};

export default GetInTouch;
