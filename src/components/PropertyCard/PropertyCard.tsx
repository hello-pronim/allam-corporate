import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Icon from "@components/Icons/Icons";
import styles from "./PropertyCard.module.scss";
import {card} from './constants';

export interface PropertyCardProps {

}

const PropertyCard = ({}: PropertyCardProps) => {
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
    <div className={styles.propertyCard}>
      <div className={styles.propertyCardTop}>
      <div className={styles.propertyCardTopBar}>
          <span className={styles.propertyCardTopBarText}>{card.progPercent}% Completed</span>
          <span className={styles.propertyCardTopBarText}>Move In {card.moveIn}</span>
          <div className={styles.propertyCardTopBarCompletion}>
              <span style={{height: '100%', width: `${card.progPercent}%`}}></span>
          </div>
      </div>
        <Slider {...settings}>
        {card.images.map((img) => {
                return (
                    <div key={img.id} className={styles.propertyCardTopImage}>
                    <Image
                      src={img.imageUrl}
                      alt="property-card-image"
                      width={img.width}
                      height={img.height}
                      layout="responsive"
                    />
                  </div>      
                )
            })}
        </Slider>
      </div>

      <div className={styles.propertyCardBottom}>
        <h5>
          {card.address}
        </h5>

        <div className={styles.propertyCardBottomInfo}>
          <div className={styles.propertyCardBottomInfoDetail}>
            <Icon type="bed" />
            <span>
              {card.bed}
            </span>
          </div>
          <div className={styles.propertyCardBottomInfoDetail}>
            <Icon type="bath" />
            <span>
            {card.bath}
            </span>
          </div>
          <div className={styles.propertyCardBottomInfoDetail}>
            <Icon type="car" />
            <span>
            {card.car}
            </span>
          </div>
          <div className={styles.propertyCardBottomInfoDetail}>
          Build size
            <span>
            {card.buildSize}sq
            </span>
          </div>
          <div className={styles.propertyCardBottomInfoDetail}>
          Land size
            <span className={styles.superComp}>
            {card.landSize}m<sup>2</sup>
            </span>
          </div>                                
        </div>
        <p>
            Home Design: <span>{card.homeDesign}</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
