import React from "react";
import styles from "./FullWidthImage.module.scss";
import css from "@styled-system/css";

export interface FullWidthImageProps {
  image: string;
  alignment?:
    | ["left", "top"]
    | ["left", "center"]
    | ["left", "bottom"]
    | ["right", "top"]
    | ["right", "center"]
    | ["right", "bottom"]
    | ["center", "top"]
    | ["center", "center"]
    | ["center", "bottom"];
}

const FullWidthImage = ({
  image,
  alignment = ["center", "center"],
}: FullWidthImageProps) => {
  return (
    <div
      className={styles.FullWidthImage}
      css={css({
        backgroundImage: `url(${image})`,
        backgroundPosition: `${alignment[0]} ${alignment[1]}`,
      })}
    ></div>
  );
};

export default FullWidthImage;
