import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { HeroModel } from "@models";
import { ImageButton, Button, Redactor } from "@components/Common/Common";
import styles from "./Hero.module.scss";

export interface IHeroProps {
  data?: HeroModel;
}

const Hero = ({ data }: IHeroProps) => {
  return (
    <div className={styles.hero}>
      <div
        className={styles.heroWrapper}
        style={{
          backgroundImage: `linear-gradient(0deg, #e3e3e3, #e3e3e3), url(${data?.backgroundImage?.[0]?.url})`,
        }}
      >
        <div className={styles.heroContent}>
          <h1 className="home">{data?.heading}</h1>
          <Redactor>{data?.description ?? ""}</Redactor>
        </div>

        <div className={styles.heroLogoWrapper}>
          <Image
            alt="monterey-logo"
            src="/assets/icons/icon-monterey-logo.svg"
            width="251"
            height="164"
          />
        </div>
        <div className={styles.heroButtonWrapper}>
          <ImageButton
            href="#"
            icon="download-yellow"
            label="Download Brochure"
            chevron={true}
            labelSpacingLeft={8}
            labelSpacingRight={16}
          />
          <Button rounded={true}>Contact Agent</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
