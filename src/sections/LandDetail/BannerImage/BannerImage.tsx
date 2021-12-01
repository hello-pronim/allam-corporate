import React from "react";
import Image from "next/image";
import styles from "./BannerImage.module.scss";
import { CraftImage } from "@models";

export interface IBannerImageProps {
  image: CraftImage;
}

const BannerImage = ({ image }: IBannerImageProps) => {
  return (
    <div className={styles.bannerImage}>
      <div className={styles.bannerImageContainer}>
        <Image
          src={image.url}
          alt={image.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BannerImage;
