import React from "react";
import type { NextPage } from "next";
import craftAPI from "@libs/api";
import { layoutQuery, simpleEstatesQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/GetInTouch/Hero/Hero";
import Contact from "@sections/GetInTouch/Contact/Contact";

type PageProps = {
  locationData: any;
  layoutData: any;
  estateList: any;
};

const GetInTouch: NextPage<PageProps> = ({ layoutData, estateList }) => {
  return (
    <Layout layoutData={layoutData}>
      <Hero heading="Get in Touch" />
      <Contact estateList={estateList} />
    </Layout>
  );
};

export const getStaticProps = async function () {
  const layoutData = await craftAPI(layoutQuery);
  const estateList = await craftAPI(simpleEstatesQuery);

  return {
    props: {
      layoutData,
      estateList
    },
    revalidate: 60,
  };
};

export default GetInTouch;
