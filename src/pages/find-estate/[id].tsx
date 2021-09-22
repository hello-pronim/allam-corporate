import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindEstateDetail/Hero/Hero";
import BannerGallery from "@sections/FindEstateDetail/BannerGallery/BannerGallery";

const FindEstateDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Hero />
      <BannerGallery />
    </Layout>
  );
};

export default FindEstateDetail;
