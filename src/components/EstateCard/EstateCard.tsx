import React from "react";
import styles from "./EstateCard.module.scss";

export interface IEstateCardProps {}

const EstateCard = ({}: IEstateCardProps) => {
  return (
    <div className={styles.estateCard}>
      <div></div>
    </div>
  );
};

export default EstateCard;
