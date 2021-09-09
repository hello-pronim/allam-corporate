import React from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import styles from "./Hero.module.scss";

export interface IHeroProps {}

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <h1>Find your perfect estate</h1>
          <p>
            Aliquam leo aliquam ut turpis sed mattis varius. Enim augue
            tincidunt phasellus blandit tempor commodo, tempor ut egestas in.
            Amet, in donec quis purus. Ultrices in dui facilisis sit hac porta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
