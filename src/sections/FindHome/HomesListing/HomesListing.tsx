import React, { useState } from "react";
import Link from "next/link";
import { orderBy } from "lodash";
import { useRecoilValue } from "recoil";
import { filteredHomes } from "@states/atoms/homes";
import { Button } from "@components/Common/Common";
import { sortHomesKeys } from "@libs/constants";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import SortByOptions from "@components/SortByOptions/SortByOptions";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import styles from "./HomesListing.module.scss";

export interface IHomesListingProps {
  showMap?: boolean;
  setShowMap: (value: boolean) => void;
}

const HomesListing = ({ showMap, setShowMap }: IHomesListingProps) => {
  const homesList = useRecoilValue(filteredHomes);
  const [sortKey, setSortKey] = useState("");

  return (
    <div className={styles.homesListing}>
      <div className={styles.homesListingWrapper}>
        <SortByOptions
          options={sortHomesKeys}
          resultCount={homesList.length}
          showMap={showMap}
          setShowMap={setShowMap}
          setSortKey={setSortKey}
        />
        {!showMap && (
          <div className={styles.homesListingContainer}>
            <div className={styles.homesListingView}>
              <div className={styles.homesListingCards}>
                {orderBy(homesList, [sortKey], ["asc"])?.map((home, id) => (
                  <Link href={`/find-home/${home.slug}`} key={id}>
                    <a>
                      <PropertyCard key={id} homeData={home} />
                    </a>
                  </Link>
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
        )}
      </div>
    </div>
  );
};

export default HomesListing;
