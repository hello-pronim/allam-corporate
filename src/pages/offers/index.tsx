import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Offers/Hero/Hero";
import OffersContent from "@sections/Offers/OffersContent/OffersContent";

const PromotionalOffers: NextPage = () => {
  return (
    <Layout>
      <Hero heading={"Promotional Offers"} />
      <OffersContent />
    </Layout>
  );
};

export default PromotionalOffers;
