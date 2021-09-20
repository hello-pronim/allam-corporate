import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/FindEstateDetail/Hero/Hero";

const FindEstateDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <Layout>
      <Hero />
      {/* <AllBenefits /> */}
    </Layout>
  );
};

export default FindEstateDetail;
