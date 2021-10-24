import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import StaticHero from "@components/StaticHero/StaticHero";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";
import TextBlock from "@components/TextBlock/TextBlock";
import Header from "@sections/GetInTouch/Header/Header";
import TabbedContent from "@sections/GetInTouch/TabbedContent/TabbedContent";
import InlineImage from "@components/InlineImage/InlineImage";
import Timeline from '@components/Timeline/Timeline';

const GetInTouch: NextPage = () => {
  return (
    <Layout>
      <Header></Header>
      <TabbedContent/>
    </Layout>
  );
};

export default GetInTouch;
