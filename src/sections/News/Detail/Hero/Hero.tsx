import React from "react";
import Image from "next/image";
import { CraftImage } from "@models";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { formateDate } from "@utils/formatDate";
import styles from "./Hero.module.scss";

type IHeroProps = {
  title: string;
  date: string;
  bannerImage: CraftImage;
};

const Hero = ({ title, date, bannerImage }: IHeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBreadcrumb}>
        <BreadCrumb />
      </div>

      <div className={styles.heroBannerMobile}>
        <div className={styles.heroBannerTextWrapper}>
          <p className={styles.heroBannerText}>{formateDate(date)}</p>
        </div>
        <div className={styles.heroBannerImage}>
          <Image
            src={bannerImage.url}
            alt="hero-banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroContentTitle}>
            <p>{formateDate(date)}</p>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
