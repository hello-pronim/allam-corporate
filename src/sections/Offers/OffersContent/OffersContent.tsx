import React, { useState, useEffect } from "react";
import { Button } from "@components/Common/Common";
import PromoCard from "@components/PromoCard/PromoCard";

import styles from "./OffersContent.module.scss";

export interface OffersContentProps {}

const OffersContent = () => {
  const defaultOfferIndex = 0;
  const offers = [
    {
      id: 1,
      title: "4 bed home from $123,450",
      subTitle: "Pay the rest when you move in!",
      description:
        "Our history spans 25 years and during that time we’ve helped thousands  of customers find a new home, with homes and estates spread across many of Sydney’s most popular areas.",
    },
    {
      id: 2,
      title: "10% Deposit is all you need",
      subTitle: "Pay the rest when you move in!",
      description:
        "Our history spans 25 years and during that time we’ve helped thousands  of customers find a new home, with homes and estates spread across many of Sydney’s most popular areas.",
    },
  ];

  return (
    <div className={styles.offersContainer}>
      <div className={styles.offersWrapper}>
        <div className={`${styles.row} ${styles.recommendedOffer}`}>
          <PromoCard
            offer={offers[defaultOfferIndex]}
            action={
              <Button color="light" rounded>
                Contact an Agent today!
              </Button>
            }
            size="large"
          />
        </div>
        <div className={`${styles.row} ${styles.offersList}`}>
          {offers.map((offer) => (
            <PromoCard
              key={offer.id}
              offer={offer}
              action={
                <Button color="light" rounded>
                  Contact an Agent today!
                </Button>
              }
            />
          ))}
        </div>
        <div className={`${styles.row} ${styles.moreOffer}`}>
          <PromoCard
            offer={{
              title: "Free Solar with your New Home",
              subTitle:
                "It's Time to Get Smart and Save Big with Free Solar Power. SAVE UP TO $44K*",
              description: "",
            }}
            background="/assets/temp/img-hero-homepage-2.jpg"
            action={
              <Button color="light" rounded>
                Find out more today!
              </Button>
            }
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default OffersContent;
