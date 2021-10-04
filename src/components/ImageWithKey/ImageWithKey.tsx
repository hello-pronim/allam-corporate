import React from "react";
import Image from "next/image";
import styles from "./ImageWithKey.module.scss";
import css from "@styled-system/css";
import { ImageButton } from "@components/Common/Common";

export interface ImageWithKeyProps {}

const ImageWithKey = ({}: ImageWithKeyProps) => {
  return (
    <div className={styles.ContentWithImage}>
      <div className={styles.TopBlock}>
        <h2>Monterey Masterplan</h2>
      </div>
      <div className={styles.ImageWrapper}>
        <Image
          alt=""
          className={styles.ContentRightImage}
          src="/assets/images/temp/masterplan.jpg"
          width="866.5"
          height="748"
        ></Image>
      </div>
      <div className={styles.ContentLeft}>
        <p>
          <ol>
            <li>Hilltop Parkland</li>
            <li>Men’s Shed & Workshop*</li>
            <li>Community Clubhouse & Pool*</li>
            <li>Bowling Green*</li>
            <li>BBQ Pavillion*</li>
            <li>Tennis Court*</li>
            <li>Parkland</li>
            <li>Community Garden</li>
            <li>Caravan & Boat Parking</li>
          </ol>
        </p>
      </div>

      <div className={styles.BottomBlock}>
        <ImageButton
          href="#"
          icon="easy-buy"
          label="Download Masterplan"
          chevron={true}
          labelSpacingLeft={8}
          labelSpacingRight={16}
          css={css({ backgroundColor: "#ffca00" })}
        />
      </div>
    </div>
  );
};

export default ImageWithKey;
