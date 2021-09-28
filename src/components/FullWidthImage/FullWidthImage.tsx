import React from "react";
import styles from "./FullWidthImage.module.scss";
import css from "@styled-system/css";

export interface FullWidthImageProps {
  image: string;
}

const FullWidthImage = ({ image }: FullWidthImageProps) => {
  return (
    <div
      className={styles.FullWidthImage}
      css={css({ backgroundImage: `url(${image})` })}
    ></div>
  );
};

export default FullWidthImage;
