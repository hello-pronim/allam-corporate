import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindEstateDetail/Hero/Hero";
import BannerGallery from "@sections/FindEstateDetail/BannerGallery/BannerGallery";
import LeadingInfo from "@sections/FindEstateDetail/LeadingInfo/LeadingInfo";
import HomeList from "@sections/FindEstateDetail/HomeList/HomeList";

const FindEstateDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Hero />
      <BannerGallery />
      <LeadingInfo />
      <HomeList />
    </Layout>
  );
};

export default FindEstateDetail;
