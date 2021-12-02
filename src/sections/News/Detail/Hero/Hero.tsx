import React from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Redactor } from "@components/Common/Common";

import styles from "./Hero.module.scss";
import { mergeStyles } from "react-select";

type IHeroProps = {
  title: string;
  date?: string;
};

const Hero = ({ title, date }: IHeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroContentTitle}>
            <p>{date}</p>
            <Redactor>{title}</Redactor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
