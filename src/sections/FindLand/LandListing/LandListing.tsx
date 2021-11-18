import React from "react";
import { Button } from "@components/Common/Common";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import EstateCard from "@components/EstateCard/EstateCard";
import styles from "./LandListing.module.scss";

export interface ILandListingProps {}

const LandListing = ({}: ILandListingProps) => {
  return (
    <div className={styles.landListing}>
      <div className={styles.landListingWrapper}>
        <div className={styles.landListingView}>
          <div className={styles.landListingCards}>
            {/* {Array(8)
              .fill("")
              .map((_, id) => (
                <EstateCard key={id} />
              ))} */}
            <EasyBuyPurchase />
          </div>

          <div className={styles.landListingViewCTA}>
            <Button size="large" rounded>
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandListing;
