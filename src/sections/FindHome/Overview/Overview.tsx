import React, { useCallback, useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import useSupercluster from "use-supercluster";
import ReactMapGL, { MapRef, Marker, FlyToInterpolator } from "react-map-gl";
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
