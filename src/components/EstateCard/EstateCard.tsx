import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { EstateModel } from "@models";
import Icon from "@components/Icons/Icons";
import styles from "./EstateCard.module.scss";

export interface IEstateCardProps {
  estate: EstateModel;
}

const EstateCard = ({ estate }: IEstateCardProps) => {
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

  const addr = `${estate.suburb} ${estate.estateState} ${estate.postcode}`;

  return (
    <div className={styles.estateCard}>
      <div className={styles.estateCardTop}>
        <Slider {...settings}>
          {estate?.galleryImages?.map((image, id) => (
            <div className={styles.estateCardTopImage} key={id}>
              <Image
                src={image.url}
                alt={image.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        </Slider>

        {estate.logo?.[0]?.url && (
          <div className={styles.estateCardTopLogo}>
            <Image
              src={estate.logo?.[0]?.url}
              alt={estate.logo?.[0]?.title}
              width={156}
              height={110}
              objectFit={"contain"}
            />
          </div>
        )}
      </div>

      <div className={styles.estateCardBottom}>
        <p>
          <b>{addr}</b>
        </p>

        <div className={styles.estateCardBottomInfo}>
          <div className={styles.estateCardBottomInfoDetail}>
            <Icon type="home-insurance" />
            <span>
              <b>17 Homes for Sale</b>
            </span>
          </div>

          <div className={styles.estateCardBottomInfoDetail}>
            <Icon type="land-sale" />
            <span>
              <b>6 Land for Sale</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
