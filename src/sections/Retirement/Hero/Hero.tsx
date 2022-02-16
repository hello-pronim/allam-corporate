import React from "react";
import Image from "next/image";
import type { HeroModel } from "@models";
import { useWindowSize } from "@hooks/useWindowSize";
import { ImageButton, Button, Redactor } from "@components/Common/Common";
import styles from "./Hero.module.scss";
import ExternalLink from "@components/ExternalLink/ExternalLink";

export interface IHeroProps {
  data?: HeroModel;
}

const Hero = ({ data }: IHeroProps) => {
  const { width } = useWindowSize();

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage:
          width >= 768
            ? `linear-gradient(270deg, rgba(0, 0, 0, 0.8) 15.12%, rgba(0, 0, 0, 0) 37.64%), url(${data?.backgroundImage?.[0]?.url})`
            : `url(${data?.backgroundImage?.[0]?.url})`,
      }}
    >
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1 className="home">{data?.heading}</h1>
          <Redactor>{data?.description ?? ""}</Redactor>

          <div className={styles.heroButtonWrapper}>
            {data?.buttons?.[0]?.buttonLink && (
              <ExternalLink href={data?.buttons?.[0]?.buttonLink}>
                <ImageButton
                  icon="download-yellow"
                  label={data?.buttons?.[0]?.buttonLabel}
                  chevron={true}
                  labelSpacingLeft={8}
                  labelSpacingRight={16}
                />
              </ExternalLink>
            )}
            {data?.cta?.[0]?.hyperlink && (
              <Button href={`/${data?.cta?.[0]?.hyperlink?.[0]?.slug}`} rounded>
                Contact Agent
              </Button>
            )}
          </div>
        </div>

        <div className={styles.heroLogoWrapper}>
          <Image
            alt="monterey-logo"
            src="/assets/icons/icon-monterey-logo.svg"
            width="251"
            height="164"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
