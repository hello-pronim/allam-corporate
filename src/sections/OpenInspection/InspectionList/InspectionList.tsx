import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { filteredInspection } from "@states/atoms/inspection";
import { Button } from "@components/Common/Common";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import styles from "./InspectionList.module.scss";

export interface IInspectionListProps {}

const InspectionList = ({}: IInspectionListProps) => {
  const MAX_ESTATE_COUNT = 30;
  const homesList = useRecoilValue(filteredInspection);
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
        <div className={styles.homesListingView}>
          <div className={styles.homesListingCards}>
            {visibleHomes?.map((home, id) => (
              <Link href={`/find-home/${home.slug}`} key={id}>
                <a>
                  <PropertyCard key={id} homeData={home} isOpenInspection />
                </a>
              </Link>
            ))}
            <EasyBuyPurchase />
          </div>

          {!isLoadMore && (
            <div className={styles.homesListingViewCTA}>
              <Button size="large" onClick={() => setIsLoadMore(true)} rounded>
                Load more
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InspectionList;
