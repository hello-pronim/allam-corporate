import React from "react";
import { useRecoilValue } from "recoil";
import { HomeModel } from "@models";
import { filteredHomes } from "@states/atoms/homes";
import MapView from "@components/MapView/MapView";
import styles from "./Overview.module.scss";

export interface IOverviewProps {}

const Overview = ({}: IOverviewProps) => {
  const homesList: HomeModel[] = useRecoilValue(filteredHomes);

  return (
    <div className={styles.overview}>
      <MapView data={homesList} />
    </div>
  );
};

export default Overview;
