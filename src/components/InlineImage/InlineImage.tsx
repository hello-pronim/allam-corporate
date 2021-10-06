import React from "react";
import styles from "./InlineImage.module.scss";
import Image from 'next/image';
import { css } from "@styled-system/css";
import rem from "src/utils/pxRem";

export interface InlineImageProps {
  alt?: string;
  src: string;
  width: number;
  height: number;
  padding?: number | number[];
}

const InlineImage = ({ alt, src, width, height, padding=[]}: InlineImageProps) => {
  return (
    <div
      className={styles.InlineImage}
      css={css({py: rem(padding)})}
    >
      <Image alt={alt} src={src} width={width} height={height} />
    </div>
  );
};

export default InlineImage;
