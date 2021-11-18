import React from "react";
import CardGrid from "@components/CardGrid/CardGrid";
import EstateCard from "@components/EstateCard/EstateCard";
import styles from "./SimilarEstates.module.scss";

export interface ISimilarEstatesProps {}

const SimilarEstates = ({}: ISimilarEstatesProps) => {
  return (
    <div className={styles.similarEstates}>
      <div className={styles.similarEstatesWrapper}>
        <CardGrid title="You might also like these Estates" col={[1, 2]}>
          {/* <EstateCard /> */}
          {/* <EstateCard /> */}
        </CardGrid>
      </div>
    </div>
  );
};

export default SimilarEstates;
