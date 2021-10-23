import type { NextPage } from "next";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Home/Hero/Hero";
import TrustMakers from "@sections/Home/TrustMakers/TrustMakers";
import PerfectEstate from "@sections/Home/PerfectEstate/PerfectEstate";
import Monterey from "@sections/Home/Monterey/Monterey";
import Promotion from "@sections/Home/Promotion/Promotion";
import FindHomes from "@sections/Home/FindHomes/FindHomes";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import { getClient } from "@libs/api";

type HomePageProps = {
  data: any;
};

const Home: NextPage<HomePageProps> = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <Hero />
      <TrustMakers />
      <PerfectEstate />
      <Monterey />
      <Promotion />
      <FindHomes />
      <AllBenefits />
    </Layout>
  );
};

const query = gql`
  query home {
    entry(section: "homePage") {
      ... on homePage_homePage_Entry {
        heroSlider {
          ... on heroSlider_BlockType {
            heading
            subHeading
          }
        }
      }
    }
  }
`;

export const getStaticProps = async function () {
  const data = await craftAPI(query);

  return {
    props: {
      data,
    },
    revalidate: 20,
  };
};

export default Home;
