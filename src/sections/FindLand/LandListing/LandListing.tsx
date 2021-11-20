import React from "react";
import { Button } from "@components/Common/Common";
import { useRecoilValue } from "recoil";
import { filteredLands } from "@states/atoms/lands";
import LandCard from "@components/LandCard/LandCard";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import styles from "./LandListing.module.scss";

export interface ILandListingProps {}

const LandListing = ({}: ILandListingProps) => {
  const landsList = useRecoilValue(filteredLands);

  return (
    <div className={styles.landListing}>
      <div className={styles.landListingWrapper}>
        <div className={styles.landListingView}>
          <div className={styles.landListingCards}>
            {landsList?.map((land, id) => (
              <LandCard landData={land} key={id} />
            ))}
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
