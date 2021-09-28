import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindHome/Hero/Hero";
import HomesListing from "@sections/FindHome/HomesListing/HomesListing";
import TrustMakers from "@sections/FindEstate/TrustMakers/TrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const FindHome: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <HomesListing />
      <TrustMakers />
      <AllBenefits />
    </Layout>
  );
};

export default FindHome;
