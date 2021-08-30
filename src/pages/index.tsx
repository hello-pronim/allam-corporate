import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Home/Hero/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
