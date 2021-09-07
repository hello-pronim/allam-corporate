import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { ImageButton } from "@components/Common/Common";
import { heroObj } from "./constant";
import styles from "./Hero.module.scss";

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
              <div className={styles.heroFilter}>
                <p>Find your perfect home without difficulties</p>

                <div className={styles.heroFilterOptions}>
                  <ImageButton icon="estate" label="Estates" homepageFilter />
                  <span>or by</span>
                  <ImageButton
                    icon="home-insurance"
                    label="Homes for Sale"
                    homepageFilter
                  />
                  <ImageButton
                    icon="land-sale"
                    label="Land for Sale"
                    homepageFilter
                  />

                  <div className={styles.heroFilterOptionsSearch}>
                    <Image
                      src={"/assets/icons/icon-search.svg"}
                      alt="icon-search"
                      width={33}
                      height={33}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
