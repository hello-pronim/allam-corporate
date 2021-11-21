import React from "react";
import { Button } from "@components/Common/Common";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import styles from "./HomeList.module.scss";

export interface IHomeListProps {}

const HomeList = ({}: IHomeListProps) => {
  return (
    <div className={styles.homeList}>
      <div className={styles.homeListWrapper}>
        <div className={styles.homeListContent}>
          <h2>Find your perfect home or land in Ardennes</h2>
          <div className={styles.homeListGrid}>
            <div className={styles.homeListGridWrapper}>
              {/* {Array(6)
                .fill("")
                .map((_, id) => (
                  <PropertyCard key={id} />
                ))} */}
            </div>
          </div>
          <div className={styles.homeListContentCTA}>
            <Button color="dark-secondary" size="large" rounded>
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeList;
