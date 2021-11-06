import React from "react";
import type { NextPage } from "next";

import Icon from "@components/Icons/Icons";

const Home: NextPage = () => {
  return (
    <>
      <Icon type="easy-buy" />
      <Icon type="shield" />
      <Icon type="land-sale" />
      <Icon type="home-insurance" />
      <Icon type="estate" />
      <Icon type="close" />
      <Icon type="arrow-left" />
      <Icon type="arrow-right" />
    </>
  );
};

export default Home;
