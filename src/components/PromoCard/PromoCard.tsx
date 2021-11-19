import React, { useEffect, useState } from "react";

import styles from "./PromoCard.module.scss";

export interface PromoCardProps {
  offer: {
    title?: string;
    subTitle?: string;
    description?: string;
  };
  background?: string;
  action?: React.ReactNode;
  size?: "large" | "normal";
}

const defaultBackgrounds = [
  "/assets/icons/icon-panel-type-1.svg",
  "/assets/icons/icon-panel-type-2-desktop.svg",
];

const PromoCard = ({
  offer,
  action,
  background,
  size = "normal",
}: PromoCardProps) => {
  const [cardBackground, setCardBackground] = useState(defaultBackgrounds[0]);

  useEffect(() => {
    if (background) setCardBackground(background);
    else {
      if (size === "large") setCardBackground(defaultBackgrounds[1]);
      else setCardBackground(defaultBackgrounds[0]);
    }
  }, [size, background]);

  return (
    <div
      className={`${size === "large" ? styles.cardLarge : styles.card} ${
        background ? styles.imageCard : ""
      }`}
      style={{ backgroundImage: `url(${cardBackground})` }}
    >
      <div className={styles.cardHeader}>
        <h1>{offer.title}</h1>
        <h5>{offer.subTitle}</h5>
      </div>
      <div className={styles.cardContent}>
        <p>{offer.description}</p>
        <div
          className={`${styles.cardActions} ${
            background ? styles.alignRight : ""
          }`}
        >
          {action}
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
