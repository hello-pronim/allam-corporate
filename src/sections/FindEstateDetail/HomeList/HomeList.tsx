import React from "react";
import Link from "next/link";
import { HomeModel } from "@models";
import { Button } from "@components/Common/Common";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import styles from "./HomeList.module.scss";

export interface IHomeListProps {
  title: string;
  filteredHomes?: HomeModel[];
}

const HomeList = ({ title, filteredHomes }: IHomeListProps) => {
  console.log(filteredHomes);

  return (
    <div className={styles.homeList}>
      <div className={styles.homeListWrapper}>
        <div className={styles.homeListContent}>
          <h2>Find your perfect home or land in {title}</h2>
          <div className={styles.homeListGrid}>
            <div className={styles.homeListGridWrapper}>
              {filteredHomes?.slice(0, 9).map((home, id) => (
                <Link href={`/find-home/${home.slug}`} key={id}>
                  <a>
                    <PropertyCard homeData={home} />
                  </a>
                </Link>
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
