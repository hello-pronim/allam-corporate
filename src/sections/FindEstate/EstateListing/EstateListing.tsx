import React from "react";
import { Button } from "@components/Common/Common";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import { EstateModel } from "@models";
import EstateCard from "@components/EstateCard/EstateCard";
import styles from "./EstateListing.module.scss";

export interface IEstateListingProps {
  estateList: EstateModel[];
}

const EstateListing = ({ estateList }: IEstateListingProps) => {
  console.log(estateList);
  return (
    <div className={styles.estateListing}>
      <div className={styles.estateListingWrapper}>
        <div className={styles.estateListingView}>
          <div className={styles.estateListingCards}>
            {estateList?.map((estate, id) => (
              <EstateCard key={id} estate={estate} />
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
