import React from "react";
import MapboxMap from "@components/MapboxMap/MapboxMap";
import styles from "./Overview.module.scss";

export interface IOverviewProps {}

const Overview = ({}: IOverviewProps) => {
  return (
    <div className={styles.overview}>
      <MapboxMap />
    </div>
  );
};

export default Overview;
