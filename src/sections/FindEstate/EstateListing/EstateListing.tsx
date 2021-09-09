import React from "react";
import { Button } from "@components/Common/Common";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import EstateCard from "@components/EstateCard/EstateCard";
import styles from "./EstateListing.module.scss";

export interface IEstateListingProps {}

const EstateListing = ({}: IEstateListingProps) => {
  return (
    <div className={styles.estateListing}>
      <div className={styles.estateListingWrapper}>
        <div className={styles.estateListingView}>
          <div className={styles.estateListingCards}>
            {Array(8)
              .fill("")
              .map((_, id) => (
                <EstateCard key={id} />
              ))}
            <EasyBuyPurchase />
          </div>

          <div className={styles.estateListingViewCTA}>
            <Button size="large" rounded>
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateListing;
