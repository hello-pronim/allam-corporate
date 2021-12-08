import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Slider from "react-slick";
import { HomeModel } from "@models";
import Icon from "@components/Icons/Icons";
import { shimmer, toBase64 } from "@utils/blobImage";
import styles from "./PropertyCard.module.scss";

export interface PropertyCardProps {
  homeData: HomeModel;
  isOpenInspection?: boolean;
}

const PropertyCard = ({
  homeData,
  isOpenInspection = false,
}: PropertyCardProps) => {
  const settings = {
    className: "estate-card-slider",
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    fade: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // const address = `${homeData.lotNumber}, ${homeData.address}`;
  const address = `${homeData.title}`;

  return (
    <div className={styles.propertyCard}>
      <div className={styles.propertyCardTop}>
        {!isOpenInspection && (
          <div className={styles.propertyCardTopBar}>
            <span className={styles.propertyCardTopBarText}>
              {homeData.percentageComplete}% Completed
            </span>
            {homeData.completionDate && (
              <span className={styles.propertyCardTopBarText}>
                Move In {dayjs(homeData.completionDate).format("MMM YYYY")}
              </span>
            )}
            <div className={styles.propertyCardTopBarCompletion}>
              <span
                style={{
                  height: "100%",
                  width: `${homeData.percentageComplete}%`,
                }}
              />
            </div>
          </div>
        )}
        <Slider {...settings}>
          {homeData?.images?.map((image, id) => (
            <div key={id} className={styles.propertyCardTopImage}>
              <Image
                src={image.url}
                alt={image.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                placeholder="blur"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.propertyCardBottom}>
        {isOpenInspection && (
          <div className={styles.propertyCardBottomInspection}>
            <p>
              {homeData.inspectionTimes?.[0]?.days
                ? `Open for Inspection: ${homeData.inspectionTimes?.[0]?.days}`
                : "FOR SALE"}
            </p>
          </div>
        )}

        <h5>{address}</h5>
        <div className={styles.propertyCardBottomInfo}>
          <div className={styles.propertyCardBottomInfoDetail}>
            <Icon type="bed" />
            <span>{homeData.bedrooms}</span>
          </div>
          <div className={styles.propertyCardBottomInfoDetail}>
            <Icon type="bath" />
            <span>{homeData.bathrooms}</span>
          </div>
          <div className={styles.propertyCardBottomInfoDetail}>
            <Icon type="car" />
            <span>{homeData.car}</span>
          </div>
          <div className={styles.propertyCardBottomInfoDetail}>
            <p>Build size</p>
            <span>{homeData.buildingSize}sq</span>
          </div>
          <div className={styles.propertyCardBottomInfoDetail}>
            <p>Land size</p>
            <span className={styles.superComp}>
              {homeData.landSize}m<sup>2</sup>
            </span>
          </div>
        </div>
        {!isOpenInspection && homeData.homeDesign?.[0] && (
          <p>
            <b>Home Design: </b>
            <span>{homeData.homeDesign?.[0]?.title}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
