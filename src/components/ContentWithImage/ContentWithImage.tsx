import React from "react";
import Image from "next/image";
import styles from "./ContentWithImage.module.scss";
import css from "@styled-system/css";
import { ImageButton } from "@components/Common/Common";

export interface ContentWithImageProps {}

const ContentWithImage = ({}: ContentWithImageProps) => {
  return (
    <div className={styles.ContentWithImage}>
      <div className={styles.TopBlock}>
        <h5>Your Weekly Fee Covers</h5>
        <h2>Costs and fees</h2>
        <p>
          Making your purchase with Allam Easy. No progress payments, No
          interest while the home is under construction and no contract
          variants.
        </p>
      </div>
      <div className={styles.ContentLeft}>
        <p>
          <ul>
            <li>Lease to occupy the site</li>
            <li>Streetscape and park mowing</li>
            <li>Council land rates</li>
            <li>Up keep of facilities and infrastructure</li>
            <li>Management and administration of the community</li>
            <li>Ground rent</li>
            <li>Maintenance and community areas and gardens</li>
            <li>Community bus</li>
          </ul>
        </p>
      </div>
      <div className={styles.ContentRight}>
        <Image
          alt=""
          className={styles.ContentRightImage}
          src="/assets/images/retirement-living/content-image.png"
          width="732"
          height="434"
        ></Image>
      </div>
      <div className={styles.BottomBlock}>
        <ImageButton
          href="#"
          icon="easy-buy"
          label="Download Brochure"
          chevron={true}
          labelSpacingLeft={8}
          labelSpacingRight={16}
          css={css({ backgroundColor: "#ffca00" })}
        />
      </div>
    </div>
  );
};

export default ContentWithImage;
