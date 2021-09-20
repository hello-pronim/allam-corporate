import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Button, ActionButton, ImageButton } from "@components/Common/Common";
import styles from "./Hero.module.scss";

export interface IHeroProps {}

const Hero = () => {
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroContentBack}>
            <ActionButton
              type="chevron-left"
              label="Back"
              onClick={() => router.back()}
            />
          </div>

          <div className={styles.heroContentText}>
            <h1>Ardennes Avenue</h1>
            <h5>Edmondson Park, NSW 2174</h5>

            <div className={styles.heroContentButtons}>
              <ImageButton
                icon="home-insurance"
                label="Homes for Sale"
                count={12}
              />
              <ImageButton icon="land-sale" label="Land for Sale" count={12} />

              <div className={styles.heroContentButtonsCondition}>
                <Button rounded>Contact Agent</Button>
              </div>
            </div>
          </div>

          <div className={styles.heroContentLogo}>
            <Image
              src={"/assets/images/estate/White-Logo-Ardennes.png"}
              alt="hero-logo"
              layout="responsive"
              width={624}
              height={356}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
