import React from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { filteredInspection } from "@states/atoms/inspection";
import { Button } from "@components/Common/Common";
import EasyBuyPurchase from "@components/EasyBuyPurchase/EasyBuyPurchase";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import styles from "./InspectionList.module.scss";

export interface IInspectionListProps {}

const InspectionList = ({}: IInspectionListProps) => {
  const homesList = useRecoilValue(filteredInspection);

  return (
    <div className={styles.homesListing}>
      <div className={styles.homesListingWrapper}>
        <div className={styles.homesListingView}>
          <div className={styles.homesListingCards}>
            {homesList?.map((home, id) => (
              <Link href={`/find-home/${home.slug}`} key={id}>
                <a>
                  <PropertyCard key={id} homeData={home} isOpenInspection />
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
    </div>
  );
};

export default InspectionList;
