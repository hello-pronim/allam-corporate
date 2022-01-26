import React from "react";
import { useRecoilValue } from "recoil";
import { filteredLands } from "@states/atoms/lands";
import MapView from "@components/MapView/MapView";
import styles from "./Overview.module.scss";

export interface IOverviewProps {}

const Overview = ({}: IOverviewProps) => {
  const landsList = useRecoilValue(filteredLands);

  return (
    <div className={styles.overview}>
      <MapView data={landsList} type="land" />
    </div>
  );
};

export default Overview;
