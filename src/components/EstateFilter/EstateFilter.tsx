import React, { useState } from "react";
import { ArrowButton, ImageButton } from "@components/Common/Common";
import styles from "./EstateFilter.module.scss";

export interface IEstateFilterProps {}

const EstateFilter = ({}: IEstateFilterProps) => {
  const [viewMode, setViewMode] = useState(false);

  const changeViewMode = () => {
    setViewMode(!viewMode);
  };

  return (
    <div className={styles.estateFilter}>
      <div className={styles.estateFilterWrapper}>
        <div className={styles.estateFilterMobile}>
          <ImageButton
            onClick={changeViewMode}
            icon={viewMode ? "grid-view" : "map"}
            label={viewMode ? "Grid view" : "Map view"}
          />
          <ArrowButton label="Filter" />
        </div>

        <div className={styles.estateFilterDesktop}>
          <span>View by</span>
          <ImageButton icon="grid-view" label="Grid view" />
          <ImageButton icon="map" label="Map view" />
        </div>
      </div>
    </div>
  );
};

export default EstateFilter;
