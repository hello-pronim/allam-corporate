import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Home/Hero/Hero";
import TrustMakers from "@sections/Home/TrustMakers/TrustMakers";
import PerfectEstate from "@sections/Home/PerfectEstate/PerfectEstate";
import Monterey from "@sections/Home/Monterey/Monterey";
import Promotion from "@sections/Home/Promotion/Promotion";
import FindHomes from "@sections/Home/FindHomes/FindHomes";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <TrustMakers />
      <PerfectEstate />
      <Monterey />
      <Promotion />
      <FindHomes />
    </Layout>
  );
};

export default Home;
