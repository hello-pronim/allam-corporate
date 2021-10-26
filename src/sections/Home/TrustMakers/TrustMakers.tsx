import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Icon from "@components/Icons/Icons";
import TrustMark from "@components/TrustMark/TrustMark";
import { Redactor } from "@components/Common/Common";
import { TrustMakersModel } from "@models";
import { marksObj } from "./constant";
import styles from "./TrustMakers.module.scss";

type ITrustMakersProps = {
  data?: TrustMakersModel;
};

const TrustMakers = ({ data }: ITrustMakersProps) => {
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
          <h2 className="home">{data?.heading}</h2>
          <div className={styles.trustMakersContentText}>
            <Redactor>{data?.description ?? ""}</Redactor>
          </div>
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

          {data?.hascta && (
            <div className={styles.trustMakersCTA}>
              <Link href={data?.cta?.[0]?.link ?? "/"}>
                <a>
                  <span>{data?.cta?.[0]?.label}</span>
                  <Icon type="arrow-right" />
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrustMakers;
