import type { NextPage } from "next";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Offers/Hero/Hero";
import OffersContent from "@sections/Offers/OffersContent/OffersContent";
import { PageProps } from "@models";

const PromotionalOffers: NextPage<PageProps> = ({ layoutData }) => {
  return (
    <Layout layoutData={layoutData}>
      <Hero heading={"Promotional Offers"} />
      <OffersContent />
    </Layout>
  );
};

export const getStaticProps = async function () {
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      layoutData,
    },
    revalidate: 60,
  };
};

export default PromotionalOffers;
