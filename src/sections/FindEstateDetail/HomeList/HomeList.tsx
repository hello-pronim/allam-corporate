import React from "react";
import { HomeModel } from "@models";
import { Button } from "@components/Common/Common";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import styles from "./HomeList.module.scss";

export interface IHomeListProps {
  filteredHomes?: HomeModel[];
}

const HomeList = ({ filteredHomes }: IHomeListProps) => {
  return (
    <div className={styles.homeList}>
      <div className={styles.homeListWrapper}>
        <div className={styles.homeListContent}>
          <h2>Find your perfect home or land in Ardennes</h2>
          <div className={styles.homeListGrid}>
            <div className={styles.homeListGridWrapper}>
              {filteredHomes?.map((home, id) => (
                <PropertyCard homeData={home} key={id} />
              ))}
            </div>
          </div>
          <div className={styles.homeListContentCTA}>
            <Button href="/find-home" color="dark-secondary" rounded>
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeList;
