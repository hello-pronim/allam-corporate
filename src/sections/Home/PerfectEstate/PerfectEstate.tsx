import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { estateObj } from "./constant";
import styles from "./PerfectEstate.module.scss";
import { Button } from "@components/Common/Common";

export interface IPerfectEstateProps {}

const PerfectEstate = ({}: IPerfectEstateProps) => {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          variableWidth: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.perfectEstate}>
      <div className={styles.perfectEstateWrapper}>
        <div className={styles.perfectEstateContent}>
          <h2 className="home">Find the perfect estate for your lifestyle</h2>
          <p>
            Our history spans 25 years and during that time we’ve helped
            thousands of customers find a new home, with homes and estates
            spread across many of Sydney’s most popular areas.
          </p>
        </div>
      </div>

      <div className={styles.perfectEstateLogos}>
        <div className={styles.perfectEstateLogosText}>
          <p>Explore our Estates</p>
        </div>

        <div
          className={`${styles.perfectEstateLogosSlider} estate-logo-slider`}
        >
          <Slider {...settings}>
            {estateObj?.map((estate: any, id: number) => (
              <div className={styles.perfectEstateSlideImage} key={id}>
                <Image
                  src={estate.image}
                  alt="estate-logo"
                  width={312}
                  height={178}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.perfectEstateLogosCTA}>
          <Button>View all Estates(10)</Button>
        </div>
      </div>
    </div>
  );
};

export default PerfectEstate;
