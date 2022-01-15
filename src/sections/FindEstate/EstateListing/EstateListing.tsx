import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";

import { filteredEstates } from "@states/atoms/estates";

import { Button } from "@components/Common/Common";
import EstateCard from "@components/EstateCard/EstateCard";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import styles from "./EstateListing.module.scss";

export interface IEstateListingProps {
  homesList: any[];
}

const EstateListing = ({ homesList }: IEstateListingProps) => {
  const MAX_ESTATE_COUNT = 12;
  const estatesList = useRecoilValue(filteredEstates);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const visibleEstates = useMemo(() => {
    return isLoadMore ? estatesList : estatesList.slice(0, MAX_ESTATE_COUNT);
  }, [isLoadMore, estatesList]);

  return (
    <div className={styles.estateListing}>
      <div className={styles.estateListingWrapper}>
        <div className={styles.estateListingView}>
          <div className={styles.estateListingCards}>
            {visibleEstates?.map((estate, id) => (
              <Link href={`/find-estate/${estate.slug}`} key={id}>
                <a>
                  <EstateCard estate={estate} homesList={homesList} />
                </a>
              </Link>
            ))}
            <EasyBuyPurchase />
          </div>

          {!isLoadMore && (
            <div className={styles.estateListingViewCTA}>
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

export default EstateListing;
