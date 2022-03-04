import type { NextPage } from "next";
import { get } from "lodash";
import craftAPI from "@libs/api";

import { PageProps } from "@models";
import { layoutQuery, offersQuery } from "@libs/queries";

import Layout from "@components/Layout/Layout";
import Hero from "@sections/Offers/Hero/Hero";
import OffersContent from "@sections/Offers/OffersContent/OffersContent";

const PromotionalOffers: NextPage<PageProps> = ({ pageData, layoutData }) => {
  const offersList = get(pageData, "entries", []);

  return (
    <Layout layoutData={layoutData}>
      <Hero heading={"Promotional Offers"} />
      <OffersContent offers={offersList} />
    </Layout>
  );
};

export const getStaticProps = async function () {
  const layoutData = await craftAPI(layoutQuery);
  const pageData = await craftAPI(offersQuery);

  return {
    props: {
      layoutData,
      pageData,
    },
    revalidate: 60,
  };
};

export default PromotionalOffers;
