import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Retirement/Hero/Hero";
import TrustMakers from "@sections/Home/TrustMakers/TrustMakers";
import CardGrid from "@components/CardGrid/CardGrid";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import MinimalCard from "@components/MinimalCard/MinimalCard";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";
import ContentWithImage from "@components/ContentWithImage/ContentWithImage";
import ImageWithKey from "@components/ImageWithKey/ImageWithKey";
import RegisterModule from "@components/RegisterModule/RegisterModule";

const RetirementLiving: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <TrustMakers />
      <CardGrid title="Retirement homes available" col={[2, 3]}>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </CardGrid>
      <CardGrid title="News and Events" col={[1, 2]} button={{label: 'View More', url: '#'}}>
        <MinimalCard />
        <MinimalCard />
      </CardGrid>
      <FullWidthImage image="/assets/images/retirement-living/full-width.png" />
      <ImageWithKey />
      <ContentWithImage />
      <RegisterModule />
    </Layout>
  );
};

export default RetirementLiving;
