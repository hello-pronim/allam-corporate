import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { ImageButton, Button } from "@components/Common/Common";
import { heroObj } from "./constant";
import styles from "./Hero.module.scss";
import monterey from "/assets/retirement-living/monterey-logo.svg";

export interface IHeroProps {}

const Hero = () => {
  const settings = {
    className: "hero-slider",
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.hero}>
      <Slider {...settings}>
        {heroObj.map((el, id: number) => (
          <div key={id} className={styles.heroSingleSlide}>
            <div
              className={styles.heroWrapper}
              style={{
                backgroundImage: `linear-gradient(0deg, #e3e3e3, #e3e3e3), url(${el.imageUrl})`,
              }}
            >
              <div className={styles.heroContent}>
                <h1 className="home">{el.title}</h1>
                <h5>{el.subtitle}</h5>
              </div>
              <div className={styles.heroLogoWrapper}>
                <Image
                  alt=""
                  src="/assets/images/retirement-living/monterey-logo.svg"
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
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
