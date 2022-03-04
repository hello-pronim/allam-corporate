import React from "react";
import { OfferModel } from "@models";
import { Button } from "@components/Common/Common";
import PromoCard from "@components/PromoCard/PromoCard";
import styles from "./OffersContent.module.scss";

export interface OffersContentProps {
  offers: OfferModel[];
}

const OffersContent = ({ offers }: OffersContentProps) => {
  return (
    <div className={styles.offers}>
      <div className={styles.offersWrapper}>
        <div className={styles.offersWrapperInside}>
          {offers.map((offer, id) => (
            <div
              key={id}
              className={`${styles.offersSingle} ${
                id % 3 === 0 ? styles.offersSingleLarge : ""
              } ${id % 3 === 1 ? styles.offersSingleLeft : ""} ${
                id % 3 === 2 ? styles.offersSingleRight : ""
              }`}
            >
              <PromoCard
                offer={offer}
                background={
                  offer?.titleImage ? offers[0]?.titleImage?.[0].url : ""
                }
                action={
                  <Button color="light" href={`/offers/${offer.slug}`} rounded>
                    View offer details
                  </Button>
                }
                size={id % 3 === 0 ? "large" : "normal"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersContent;
