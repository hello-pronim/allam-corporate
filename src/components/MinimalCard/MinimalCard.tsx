import React from "react";
import { css } from "@styled-system/css";
import styles from "./MinimalCard.module.scss";

export interface MinimalCardProps {
  data?: any;
}

const MinimalCard = ({ data }: MinimalCardProps) => {
  return data ? (
    <div
      className={styles.MinimalCard}
      css={css({ backgroundImage: `url(${data?.titleImage?.[0].url})` })}
    >
      <h5>{data.title}</h5>
    </div>
  ) : null;
};

export default MinimalCard;
