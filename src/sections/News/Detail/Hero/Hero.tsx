import React from "react";
import Image from "next/image";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Redactor } from "@components/Common/Common";

import styles from "./Hero.module.scss";
import { mergeStyles } from "react-select";

type IHeroProps = {
  title: string;
  date?: string;
  bannerImage: string;
};

const Hero = ({ title, date, bannerImage }: IHeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBreadcrumb}>
        <BreadCrumb />
      </div>
      <div className={styles.heroBannerMobile}>
        <div className={styles.heroBannerTextWrapper}>
          <p className={styles.heroBannerText}>{date}</p>
        </div>
        <div className={styles.heroBannerImage}>
          <Image
            src={bannerImage}
            alt="hero-banner"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.heroWrapper}>
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
