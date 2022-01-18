import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { HomeLayoutModel } from "@models";
import { Button, Redactor } from "@components/Common/Common";
import styles from "./PerfectEstate.module.scss";
import { estateFilterState } from "@states/atoms/estates";

export interface IPerfectEstateProps {
  data?: HomeLayoutModel;
  estates: any[];
}

const PerfectEstate = ({ data, estates = [] }: IPerfectEstateProps) => {
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
    <div
      className={styles.perfectEstate}
      style={{
        backgroundImage: `linear-gradient(
          180deg,
          rgba(62, 62, 62, 0.2) 0%,
          rgba(255, 255, 255, 0) 100%
        ), url(${data?.backgroundImage?.[0]?.url})`,
      }}
    >
      <div className={styles.perfectEstateWrapper}>
        <div className={styles.perfectEstateContent}>
          <h2 className="home">{data?.heading}</h2>
          <div className={styles.perfectEstateContentText}>
            <Redactor>{data?.description ?? ""}</Redactor>
          </div>
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
            {estates.map((estate: any, id: number) => (
              <div className={styles.perfectEstateSlideImage} key={id}>
                {estate.logo?.[0]?.url && (
                  <Image
                    src={estate.logo?.[0]?.url}
                    alt={estate.logo?.[0]?.title}
                    width={estate.logo?.[0]?.width}
                    height={estate.logo?.[0]?.height}
                    layout="responsive"
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.perfectEstateLogosCTA}>
          <Button
            color={data?.buttons?.[0]?.buttonType}
            href={data?.buttons?.[0]?.buttonLink}
            rounded
          >
            {`${data?.buttons?.[0]?.buttonLabel} (${estates?.length})`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PerfectEstate;
