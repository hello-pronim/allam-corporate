import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { orderBy } from "lodash";
import { useRecoilValue } from "recoil";

import { sortLandKeys } from "@libs/constants";
import { filteredLands } from "@states/atoms/lands";

import { Button } from "@components/Common/Common";
import LandCard from "@components/LandCard/LandCard";
import SortByOptions from "@components/SortByOptions/SortByOptions";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import styles from "./LandListing.module.scss";

export interface ILandListingProps {
  noticeText?: string;
  showMap?: boolean;
  setShowMap: (value: boolean) => void;
  easyBuyFeature?: any;
}

const LandListing = ({
  noticeText,
  showMap,
  setShowMap,
  easyBuyFeature
}: ILandListingProps) => {
  const MAX_ESTATE_COUNT = 30;
  const landsList = useRecoilValue(filteredLands);

  const [sortKey, setSortKey] = useState("");
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    setIsLoadMore(landsList.length <= MAX_ESTATE_COUNT);
  }, [landsList]);

  const visibleLands = useMemo(() => {
    return isLoadMore ? landsList : landsList.slice(0, MAX_ESTATE_COUNT);
  }, [isLoadMore, landsList]);

  return (
    <div className={styles.landListing}>
      <div className={styles.landListingWrapper}>
        <div className={styles.landListingNotice}>
          <p>{landsList.length === 0 ? noticeText : ""}</p>
        </div>
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
                {orderBy(visibleLands, [sortKey], ["asc"])?.map((land, id) => (
                  <Link href={`/find-land/${land.slug}`} key={id}>
                    <a>
                      <LandCard landData={land} />
                    </a>
                  </Link>
                ))}
                <EasyBuyPurchase data={easyBuyFeature} />
              </div>

              {!isLoadMore && (
                <div className={styles.landListingViewCTA}>
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

export default LandListing;
