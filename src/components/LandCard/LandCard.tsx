import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { LandModel } from "@models";
import { shimmer, toBase64 } from "@utils/blobImage";
import styles from "./LandCard.module.scss";

export interface ILandCardProps {
  landData: LandModel;
  simple?: boolean;
}

const LandCard = ({ landData, simple = false }: ILandCardProps) => {
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
    <div
      className={`${styles.landCard} ${simple ? styles.landCardSimple : ""}`}
    >
      <div className={styles.landCardTop}>
        {simple ? (
          <div className={styles.landCardTopImage}>
            <Image
              src={landData?.images?.[0].url ?? ""}
              alt={landData?.images?.[0].title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              placeholder="blur"
            />
          </div>
        ) : (
          <Slider {...settings}>
            {landData?.images?.map((image, id) => (
              <div key={id} className={styles.landCardTopImage}>
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
        )}
      </div>

      <div className={styles.landCardBottom}>
        <h5>{address}</h5>

        <div className={styles.landCardBottomInfo}>
          <div className={styles.landCardBottomInfoDetail}>
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
