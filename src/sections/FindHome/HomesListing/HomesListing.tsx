import React from "react";
import { Button } from "@components/Common/Common";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import styles from "./HomesListing.module.scss";

export interface IHomesListingProps {}

const HomesListing = ({}: IHomesListingProps) => {
  return (
    <div className={styles.homesListing}>
      <div className={styles.homesListingWrapper}>
        <div className={styles.homesListingView}>
          <div className={styles.homesListingCards}>
            {Array(8)
              .fill("")
              .map((_, id) => (
                <PropertyCard key={id} />
              ))}
            <EasyBuyPurchase />
          </div>

          <div className={styles.homesListingViewCTA}>
            <Button size="large" rounded>
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomesListing;
