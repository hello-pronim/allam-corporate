import React, { useState } from "react";
import { orderBy } from "lodash";
import { useRecoilValue } from "recoil";
import { filteredLands } from "@states/atoms/lands";
import { sortLandKeys } from "@libs/constants";
import { Button } from "@components/Common/Common";
import LandCard from "@components/LandCard/LandCard";
import SortByOptions from "@components/SortByOptions/SortByOptions";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import styles from "./LandListing.module.scss";

export interface ILandListingProps {
  showMap?: boolean;
  setShowMap: (value: boolean) => void;
}

const LandListing = ({ showMap, setShowMap }: ILandListingProps) => {
  const [sortKey, setSortKey] = useState("");
  const landsList = useRecoilValue(filteredLands);

  return (
    <div className={styles.landListing}>
      <div className={styles.landListingWrapper}>
        <SortByOptions
          options={sortLandKeys}
          resultCount={landsList.length}
          showMap={showMap}
          setShowMap={setShowMap}
          setSortKey={setSortKey}
        />
        {!showMap && (
          <div className={styles.landListingContainer}>
            <div className={styles.landListingView}>
              <div className={styles.landListingCards}>
                {orderBy(landsList, [sortKey], ["asc"])?.map((land, id) => (
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
        )}
      </div>
    </div>
  );
};

export default LandListing;
