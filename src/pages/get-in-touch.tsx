import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/GetInTouch/Hero/Hero";
import TabbedContent from "@sections/GetInTouch/TabbedContent/TabbedContent";

const GetInTouch: NextPage = () => {
  return (
    <Layout>
      <Hero heading="Get in Touch" />
      <TabbedContent />
    </Layout>
  );
};

export default GetInTouch;
