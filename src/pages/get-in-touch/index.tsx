import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Header from "@sections/GetInTouch/Header/Header";
import TabbedContent from "@sections/GetInTouch/TabbedContent/TabbedContent";

const GetInTouch: NextPage = () => {
  return (
    <Layout>
      <Header />
      <TabbedContent/>
    </Layout>
  );
};

export default GetInTouch;
