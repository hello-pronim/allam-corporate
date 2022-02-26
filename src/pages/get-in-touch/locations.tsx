import React from "react";
import { get } from "lodash";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/GetInTouch/Hero/Hero";
import LocationsContent from "@sections/GetInTouch/Locations/LocationsContent";

type PageProps = {
  locationData: any;
  layoutData: any;
};

const Locations: NextPage<PageProps> = ({ locationData, layoutData }) => {
  return (
    <Layout layoutData={layoutData}>
      <Hero heading="Get in Touch" />
      <LocationsContent locations={get(locationData, "entries", [])} />
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
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      locationData,
      layoutData,
    },
    revalidate: 60,
  };
};

export default Locations;
