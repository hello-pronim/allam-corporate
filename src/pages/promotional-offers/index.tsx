import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/PromotionalOffers/Hero/Hero";
import OffersContent from "@sections/PromotionalOffers/OffersContent/OffersContent";

import data from "./constants";

const PromotionalOffers: NextPage = () => {
  return (
    <Layout>
      <Hero heading={data.heading} introBlurb={data.introBlurb} />
      <OffersContent />
    </Layout>
  );
};

export default PromotionalOffers;
