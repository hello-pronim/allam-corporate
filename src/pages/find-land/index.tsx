import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindLand/Hero/Hero";
import HomesListing from "@sections/FindHome/HomesListing/HomesListing";
import TrustMakers from "@sections/FindEstate/TrustMakers/TrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const FindLand: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <HomesListing />
      <TrustMakers />
      <AllBenefits />
    </Layout>
  );
};

export default FindLand;
