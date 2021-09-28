import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindLand/Hero/Hero";
import LandListing from "@sections/FindLand/LandListing/LandListing";
import TrustMakers from "@sections/FindEstate/TrustMakers/TrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const FindLand: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <LandListing />
      <TrustMakers />
      <AllBenefits />
    </Layout>
  );
};

export default FindLand;
