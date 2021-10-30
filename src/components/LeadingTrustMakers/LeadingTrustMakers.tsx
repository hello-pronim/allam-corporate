import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Icon from "@components/Icons/Icons";
import TrustMark from "@components/TrustMark/TrustMark";
import { Redactor } from "@components/Common/Common";
import { TrustMakersModel, TrustFeature } from "@models";
import styles from "./LeadingTrustMakers.module.scss";

type ILeadingTrustMakersProps = {
  data?: TrustMakersModel;
  features?: TrustFeature[];
};

const LeadingTrustMakers = ({ data, features }: ILeadingTrustMakersProps) => {
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
            {features?.map((feature: TrustFeature, id: number) => (
              <TrustMark
                key={id}
                icon={feature?.icon?.[0]}
                title={feature?.heading}
                description={feature?.subHeading}
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

export default LeadingTrustMakers;
