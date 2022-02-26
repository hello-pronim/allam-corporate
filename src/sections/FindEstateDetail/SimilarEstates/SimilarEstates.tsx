import React, { useMemo } from "react";
import Link from "next/link";
import { EstateModel } from "@models";
import EstateCard from "@components/EstateCard/EstateCard";
import styles from "./SimilarEstates.module.scss";
import { getDistance } from "@utils/getDistance";

export interface ISimilarEstatesProps {
  estateList: EstateModel[];
  homeList: any[];
  latitude: number;
  longitude: number;
}

const SimilarEstates = ({
  estateList,
  homeList,
  latitude,
  longitude,
}: ISimilarEstatesProps) => {
  const nearbyEstates = useMemo(() => {
    return estateList
      .sort((estate1, estate2) =>
        getDistance(
          Number(estate1.latitude),
          Number(estate1.longitude),
          latitude,
          longitude,
          "K"
        ) >
        getDistance(
          latitude,
          longitude,
          Number(estate2.latitude),
          Number(estate2.longitude),
          "K"
        )
          ? 1
          : -1
      )
      .slice(0, 2);
  }, [estateList, latitude, longitude]);

  return (
    <div className={styles.similarEstates}>
      <div className={styles.similarEstatesWrapper}>
        <div className={styles.similarEstatesContainer}>
          <h2>You might also like these Estates</h2>
          <div className={styles.similarEstatesList}>
            {nearbyEstates.map((estate, id) => (
              <Link href={`/find-estate/${estate.slug}`} key={id}>
                <a>
                  <EstateCard estate={estate} homesList={homeList} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarEstates;
