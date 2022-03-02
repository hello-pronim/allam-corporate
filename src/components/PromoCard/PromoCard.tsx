import React, { useEffect, useState } from "react";
import Link from "next/link";
import { OfferModel } from "@models";
import { Redactor } from "@components/Common/Common";
import styles from "./PromoCard.module.scss";

export interface PromoCardProps {
  offer: OfferModel;
  background?: string;
  action?: React.ReactNode;
  variant?: "default" | "side";
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
      } ${variant === "side" ? styles.cardSide : ""}`}
      style={{
        backgroundImage: `url(${cardBackground})`,
        color: `${offer?.textColor ? offer.textColor : "#fff"}`,
      }}
    >
      <div className={styles.cardHeader}>
        <Link href={`/offers/${offer.slug}`}>
          <a>
            <h2>{offer.title}</h2>
          </a>
        </Link>
        <h5>{offer.shortDescription}</h5>
      </div>
      <div className={styles.cardContent}>
        {offer.introBlurb && offer.introBlurb !== "" ? (
          <Redactor>{offer.introBlurb}</Redactor>
        ) : (
          <div></div>
        )}
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
