import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import classnames from "classnames/bind";
import Icon from "@components/Icons/Icons";
import TrustMark from "@components/TrustMark/TrustMark";
import { Redactor } from "@components/Common/Common";
import { TrustMarkersModel, TrustFeature } from "@models";
import styles from "./LeadingTrustMarkers.module.scss";

type ILeadingTrustMarkersProps = {
  hasBackground?: boolean;
  data?: TrustMarkersModel;
  features?: TrustFeature[];
};

const cx = classnames.bind(styles);

const LeadingTrustMarkers = ({
  hasBackground = true,
  data,
  features,
}: ILeadingTrustMarkersProps) => {
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
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
    <div
      className={cx("trustMarkers", {
        trustMarkersWithBackground: hasBackground,
      })}
    >
      <div className={styles.trustMarkersWrapper}>
        <div className={styles.trustMarkersContent}>
          <h2 className="home">{data?.heading}</h2>
          <div className={styles.trustMarkersContentText}>
            <Redactor>{data?.description ?? ""}</Redactor>
          </div>
        </div>

        <div className={`${styles.trustMarkersSlider} trustMaker-slider`}>
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

          {data?.hascta && data?.cta?.[0]?.hyperlink && (
            <div className={styles.trustMarkersCTA}>
              <Link href={`/${data?.cta?.[0]?.hyperlink?.[0]?.slug}`}>
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

export default LeadingTrustMarkers;
