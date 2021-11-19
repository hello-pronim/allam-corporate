import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { HomeModel } from "@models";
import { shimmer, toBase64 } from "@utils/blobImage";
import Icon from "@components/Icons/Icons";
import { card } from "./constants";
import styles from "./PropertyCard.module.scss";

export interface PropertyCardProps {
  homeData: HomeModel;
}

const PropertyCard = ({ homeData }: PropertyCardProps) => {
  console.log(homeData);
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

  const address = `${homeData.lotNumber}, ${homeData.address}`;

  return (
    <div className={styles.propertyCard}>
      <div className={styles.propertyCardTop}>
        <div className={styles.propertyCardTopBar}>
          <span className={styles.propertyCardTopBarText}>
            {homeData.percentageComplete}% Completed
          </span>
          <span className={styles.propertyCardTopBarText}>
            Move In {card.moveIn}
          </span>
          <div className={styles.propertyCardTopBarCompletion}>
            <span
              style={{
                height: "100%",
                width: `${homeData.percentageComplete}%`,
              }}
            />
          </div>
        </div>
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
        <p>
          <b>Home Design:</b> <span>{card.homeDesign}</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
