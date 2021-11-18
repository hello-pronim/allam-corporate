import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/GetInTouch/Hero/Hero";
import TabbedContent from "@sections/GetInTouch/TabbedContent/TabbedContent";

import data from "./constants";

const GetInTouch: NextPage = () => {
  return (
    <Layout>
      <Hero heading={data.heading} introBlurb={data.introBlurb} />
      <TabbedContent />
    </Layout>
  );
};

export default GetInTouch;
