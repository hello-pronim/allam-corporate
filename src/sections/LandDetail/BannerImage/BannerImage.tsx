import React from "react";
import styles from "./BannerImage.module.scss";
import { CraftImage } from "@models";

export interface IBannerImageProps {
  image: CraftImage;
}

const BannerImage = ({ image }: IBannerImageProps) => {
  return (
    <div className={styles.bannerImage}>
      <div
        className={styles.bannerImageContainer}
        style={{ backgroundImage: `url(${image.url})` }}
      />
    </div>
  );
};

export default BannerImage;
