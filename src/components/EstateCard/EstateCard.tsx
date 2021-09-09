import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Icon from "@components/Icons/Icons";
import styles from "./EstateCard.module.scss";

export interface IEstateCardProps {}

const EstateCard = ({}: IEstateCardProps) => {
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

  return (
    <div className={styles.estateCard}>
      <div className={styles.estateCardTop}>
        <Slider {...settings}>
          <Image
            src={"/assets/images/temp/img-temp-card-1.jpg"}
            alt="estate-card-image"
            width={492}
            height={355}
          />
          <Image
            src={"/assets/images/temp/img-temp-card-2.jpg"}
            alt="estate-card-image"
            width={492}
            height={355}
          />
          <Image
            src={"/assets/images/temp/img-temp-card-1.jpg"}
            alt="estate-card-image"
            width={492}
            height={355}
          />
          <Image
            src={"/assets/images/temp/img-temp-card-2.jpg"}
            alt="estate-card-image"
            width={492}
            height={355}
          />
        </Slider>

        <div className={styles.estateCardTopLogo}>
          <Image
            src={"/assets/images/estate/Logo-Ardennes.png"}
            alt="estate-card-image"
            width={156}
            height={110}
            objectFit={"cover"}
          />
        </div>
      </div>

      <div className={styles.estateCardBottom}>
        <p>
          <b>Ardennes Avenue, Edmondson Park NSW 2174</b>
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
