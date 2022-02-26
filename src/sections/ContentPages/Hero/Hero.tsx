import React from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import styles from "./Hero.module.scss";

type IHeroProps = {
  heading?: string;
};

const Hero = ({ heading }: IHeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <h1>{heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
