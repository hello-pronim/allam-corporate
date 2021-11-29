import React, { useState, useEffect } from "react";
import Image from "next/image";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Button, Redactor } from "@components/Common/Common";

import styles from "./Hero.module.scss";

type IHeroProps = {
  offer?: any;
  background?: any;
};

const defaultBackground = "/assets/icons/icon-panel-type-2-desktop.svg";
const Hero = ({ offer, background }: IHeroProps) => {
  const [heroBackground, setHeroBackground] = useState(defaultBackground);
  const { title, subTitle } = offer;

  useEffect(() => {
    if (background) setHeroBackground(background);
    else setHeroBackground(defaultBackground);
  }, [background]);

  return (
    <div
      className={background ? styles.bgHero : styles.defaultHero}
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroContentTop}>
            <div className={styles.heroContentTopTitle}>
              <h1>{title}</h1>
            </div>
            {!background && (
              <>
                <div className={styles.heroContentTopImage}>
                  <Image
                    src={"/assets/images/img-easyBuy-seal-waxMain.png"}
                    alt="easy-buy-mark"
                    width={192}
                    height={190}
                    layout="responsive"
                  />
                </div>
                <div className={styles.heroContentTopAction}>
                  <div className={styles.heroContentTopActionButtons}>
                    <Button color="dark">Register your interest</Button>
                    <Button color="light">Contact an Agent</Button>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className={styles.heroContentBottom}>
            {subTitle && (
              <div className={styles.heroContentBottomText}>
                <Redactor>{subTitle}</Redactor>
              </div>
            )}
            {background && (
              <div className={styles.heroContentBottomAction}>
                <div className={styles.heroContentBottomActionButtons}>
                  <Button color="light">Register your interest</Button>
                  <Button color="dark">Contact an Agent</Button>
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
