import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindEstate/Hero/Hero";
import EstateListing from "@sections/FindEstate/EstateListing/EstateListing";
import TrustMakers from "@sections/FindEstate/TrustMakers/TrustMakers";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const FindEstate: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <EstateListing />
      <TrustMakers />
      <AllBenefits />
    </Layout>
  );
};

export default FindEstate;
