import React from "react";
import styles from "./MinimalCard.module.scss";
import { card } from "./constants";
import { css } from "@styled-system/css";

export interface MinimalCardProps {}

const MinimalCard = ({}: MinimalCardProps) => {
  return (
    <div
      className={styles.MinimalCard}
      css={css({ backgroundImage: `url(${card.image})` })}
    >
      <h5>{card.title}</h5>
    </div>
  );
};

export default MinimalCard;
