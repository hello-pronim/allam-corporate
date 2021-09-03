import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Icon from "@components/Icons/Icons";
import TrustMark from "@components/TrustMark/TrustMark";
import { marksObj } from "./constant";
import styles from "./TrustMakers.module.scss";

export interface ITrustMakersProps {}

const TrustMakers = () => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2.5,
          dots: false,
        },
      },
      {
        breakpoint: 564,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.trustMakers}>
      <div className={styles.trustMakersWrapper}>
        <div className={styles.trustMakersContent}>
          <h2>Allam’s homes are move in ready</h2>
          <p>
            Our history spans 25 years and during that time we’ve helped
            thousands of customers find a new home, with homes and estates
            spread across many of Sydney’s most popular areas.
          </p>
        </div>

        <div className={`${styles.trustMakersSlider} trustMaker-slider`}>
          <Slider {...settings}>
            {marksObj?.map((el: any, id: number) => (
              <TrustMark
                key={id}
                icon={el.icon}
                title={el.title}
                description={el.description}
              />
            ))}
          </Slider>

          <div className={styles.trustMakersCTA}>
            <Link href="/">
              <a>
                <span>View all the Allam Advantages</span>
                <Icon type="arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustMakers;
