import React from "react";
import Image from "next/image";
import type { HeroModel } from "@models";
import { useWindowSize } from "@hooks/useWindowSize";
import { ImageButton, Button, Redactor } from "@components/Common/Common";
import styles from "./Hero.module.scss";

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
          <div
            style={{ color: `${data?.textColor ? data?.textColor : "#fff"}` }}
          >
            <h1 className="home">{data?.heading}</h1>
            <Redactor>{data?.description ?? ""}</Redactor>
          </div>

          <div className={styles.heroButtonWrapper}>
            {data?.buttons?.[0]?.buttonLink && (
              <ImageButton
                icon="download-yellow"
                label={data?.buttons?.[0]?.buttonLabel}
                chevron={true}
                labelSpacingLeft={8}
                labelSpacingRight={16}
                href={data?.buttons?.[0]?.buttonLink + "?estate=monteray"}
              />
            )}
            {data?.cta?.[0]?.hyperlink && (
              <Button href={`/${data?.cta?.[0]?.hyperlink?.[0]?.slug}`} rounded>
                Contact Agent
              </Button>
            )}
          </div>
        </div>

        {data?.icon?.[0]?.url && (
          <div className={styles.heroLogoWrapper}>
            <Image
              src={data?.icon?.[0]?.url}
              alt={data?.icon?.[0]?.title}
              width={data?.icon?.[0]?.width}
              height={data?.icon?.[0]?.height}
              layout="responsive"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
