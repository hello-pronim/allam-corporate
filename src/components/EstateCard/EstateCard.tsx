import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Slider from "react-slick";

import { EstateModel } from "@models";
import { shimmer, toBase64 } from "@utils/blobImage";

import Icon from "@components/Icons/Icons";
import styles from "./EstateCard.module.scss";

export interface IEstateCardProps {
  estate: EstateModel;
  homesList?: any[];
  simple?: boolean;
}

const EstateCard = ({
  estate,
  homesList = [],
  simple = false,
}: IEstateCardProps) => {
  const settings = {
    className: "estate-card-slider",
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 800,
    fade: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderRef = React.useRef<Slider>(null);
  const [landCount, setLandCount] = useState(0);
  const [homeCount, setHomeCount] = useState(0);
  const addr = `${estate.suburb} ${estate.estateState} ${estate.postcode}`;

  const filteredHomes = useMemo(() => {
    return Array.from(homesList).filter(
      (home) => home.estate[0].title === estate.title && !home.openForInspection
    );
  }, [estate.title, homesList]);

  useEffect(() => {
    setHomeCount(filteredHomes.filter((el) => !el.landOnly).length);
    setLandCount(filteredHomes.filter((el) => el.landOnly).length);
  }, [filteredHomes]);

  return (
    <div
      className={`${styles.estateCard} ${
        simple ? styles.estateCardSimple : ""
      }`}
    >
      <div className={styles.estateCardTop}>
        {simple ? (
          <div className={styles.estateCardTopImage}>
            <Image
              src={estate?.galleryImages?.[0].url ?? ""}
              alt={estate?.galleryImages?.[0].title}
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
          <Slider {...settings} ref={sliderRef}>
            {estate?.galleryImages?.map((image, id) => (
              <div
                className={styles.estateCardTopImage}
                key={id}
                onMouseEnter={() => sliderRef.current?.slickPlay()}
                onMouseLeave={() => sliderRef.current?.slickPause()}
              >
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

        {estate.logo?.[0]?.url && (
          <div className={styles.estateCardTopLogo}>
            <Image
              src={estate.logo?.[0]?.url}
              alt={estate.logo?.[0]?.title}
              width={estate.logo?.[0]?.width}
              height={estate.logo?.[0]?.height}
              layout="responsive"
            />
          </div>
        )}
      </div>

      <div className={styles.estateCardBottom}>
        <h5>{addr}</h5>

        <div className={styles.estateCardBottomInfo}>
          {homeCount > 0 && (
            <div className={styles.estateCardBottomInfoDetail}>
              <Icon type="home-insurance" />
              <span>
                <b>{homeCount} Homes for Sale</b>
              </span>
            </div>
          )}

          {landCount > 0 && (
            <div className={styles.estateCardBottomInfoDetail}>
              <Icon type="land-sale" />
              <span>
                <b>{landCount} Land for Sale</b>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
