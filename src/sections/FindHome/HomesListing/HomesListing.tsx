import React from "react";
import { useRecoilValue } from "recoil";
import { filteredHomes } from "@states/atoms/homes";
import { Button } from "@components/Common/Common";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import styles from "./HomesListing.module.scss";

export interface IHomesListingProps {}

const HomesListing = ({}: IHomesListingProps) => {
  const homesList = useRecoilValue(filteredHomes);

  return (
    <div className={styles.homesListing}>
      <div className={styles.homesListingWrapper}>
        <div className={styles.homesListingView}>
          <div className={styles.homesListingCards}>
            {homesList?.map((home, id) => (
              <PropertyCard key={id} homeData={home} />
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
