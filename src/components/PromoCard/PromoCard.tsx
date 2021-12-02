import React, { useEffect, useState } from "react";
import { Redactor } from "@components/Common/Common";
import styles from "./PromoCard.module.scss";

export interface PromoCardProps {
  offer: {
    title?: string;
    shortDescription?: string;
    introBlurb?: string;
  };
  background?: string;
  action?: React.ReactNode;
  variant?: "default" | "mobile";
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
  variant = "default",
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
      } ${variant === "mobile" ? styles.cardMobile : ""}`}
      style={{ backgroundImage: `url(${cardBackground})` }}
    >
      <div className={styles.cardHeader}>
        <h1>{offer.title}</h1>
        <h5>{offer.shortDescription}</h5>
      </div>
      <div className={styles.cardContent}>
        <Redactor>{offer.introBlurb ?? ""}</Redactor>
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
