import React from "react";
import { useRecoilValue } from "recoil";
import { filteredEstates } from "@states/atoms/estates";
import { EstateModel } from "@models";
import { Button } from "@components/Common/Common";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import EstateCard from "@components/EstateCard/EstateCard";
import styles from "./EstateListing.module.scss";

export interface IEstateListingProps {}

const EstateListing = () => {
  const estatesList = useRecoilValue(filteredEstates);

  return (
    <div className={styles.estateListing}>
      <div className={styles.estateListingWrapper}>
        <div className={styles.estateListingView}>
          <div className={styles.estateListingCards}>
            {estatesList?.map((estate, id) => (
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
