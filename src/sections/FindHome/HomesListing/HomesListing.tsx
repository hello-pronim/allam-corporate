import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { orderBy } from "lodash";
import { useRecoilValue } from "recoil";

import { sortHomesKeys } from "@libs/constants";
import { filteredHomes } from "@states/atoms/homes";

import { Button } from "@components/Common/Common";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import SortByOptions from "@components/SortByOptions/SortByOptions";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import styles from "./HomesListing.module.scss";

export interface IHomesListingProps {
  showMap?: boolean;
  setShowMap: (value: boolean) => void;
}

const HomesListing = ({ showMap, setShowMap }: IHomesListingProps) => {
  const MAX_ESTATE_COUNT = 30;
  const homesList = useRecoilValue(filteredHomes);

  const [sortKey, setSortKey] = useState("");
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    setIsLoadMore(homesList.length <= MAX_ESTATE_COUNT);
  }, [homesList]);

  const visibleHomes = useMemo(() => {
    return isLoadMore ? homesList : homesList.slice(0, MAX_ESTATE_COUNT);
  }, [isLoadMore, homesList]);

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
                {orderBy(visibleHomes, [sortKey], ["asc"])?.map((home, id) => (
                  <Link href={`/find-home/${home.slug}`} key={id}>
                    <a>
                      <PropertyCard key={id} homeData={home} />
                    </a>
                  </Link>
                ))}
                <EasyBuyPurchase />
              </div>

              {!isLoadMore && (
                <div className={styles.homesListingViewCTA}>
                  <Button
                    size="large"
                    onClick={() => setIsLoadMore(true)}
                    rounded
                  >
                    Load more
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomesListing;
