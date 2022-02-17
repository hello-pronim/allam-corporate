import React from "react";
import type { NextPage } from "next";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/GetInTouch/Hero/Hero";
import Contact from "@sections/GetInTouch/Contact/Contact";

type PageProps = {
  locationData: any;
  layoutData: any;
};

const GetInTouch: NextPage<PageProps> = ({ layoutData }) => {
  return (
    <Layout layoutData={layoutData}>
      <Hero heading="Get in Touch" />
      <Contact />
    </Layout>
  );
};

export const getStaticProps = async function () {
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      layoutData,
    },
    revalidate: 60,
  };
};

export default GetInTouch;
