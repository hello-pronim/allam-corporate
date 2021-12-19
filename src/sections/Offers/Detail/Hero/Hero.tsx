import React, { useState, useEffect } from "react";
import Image from "next/image";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Button, Redactor } from "@components/Common/Common";

import styles from "./Hero.module.scss";
import { CraftImage } from "@models";

type IHeroProps = {
  title: string;
  shortDescription: string;
  heroBackground?: CraftImage;
};

const Hero = ({ title, shortDescription, heroBackground }: IHeroProps) => {
  return (
    <div
      className={`${styles.offerHero} ${heroBackground ? styles.bgHero : ""}`}
      style={{
        backgroundImage: `url(${
          heroBackground?.url
            ? heroBackground?.url
            : "/assets/icons/icon-panel-type-1.svg"
        })`,
      }}
    >
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroContentTop}>
            <div className={styles.heroContentTopMain}>
              <h1>{title}</h1>
              {shortDescription && <h3>{shortDescription}</h3>}
            </div>
            {!heroBackground && (
              <div className={styles.heroContentTopExtra}>
                <div className={styles.heroContentTopExtraImage}>
                  <Image
                    src={"/assets/images/img-easyBuy-seal-waxMain.png"}
                    alt="easy-buy-mark"
                    width={192}
                    height={190}
                    layout="responsive"
                  />
                </div>
                <div className={styles.heroContentTopExtraAction}>
                  <div className={styles.heroContentTopExtraActionButtons}>
                    <Button color="dark" rounded>
                      Register your interest
                    </Button>
                    <Button color="light" rounded>
                      Contact an Agent
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
