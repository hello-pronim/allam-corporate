import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { LandModel } from "@models";
import { shimmer, toBase64 } from "@utils/blobImage";
import styles from "./LandCard.module.scss";

export interface LandCardProps {
  landData: LandModel;
}

const LandCard = ({ landData }: LandCardProps) => {
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

  const address = `${landData.title}`;

  return (
    <div className={styles.propertyCard}>
      <div className={styles.propertyCardTop}>
        <Slider {...settings}>
          {landData?.images?.map((image, id) => (
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
            <p>Land size</p>
            <span className={styles.superComp}>
              {landData.landSize}m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandCard;
