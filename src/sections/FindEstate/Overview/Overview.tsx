import React, { useCallback, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import ReactMapGL, { Source, Layer, MapRef, Marker } from "react-map-gl";

import { filteredEstates } from "@states/atoms/estates";

import MapView from "@components/MapView/MapView";

import { convertGeoJSON } from "@utils/convertGeoJSON";

import styles from "./Overview.module.scss";

export interface IOverviewProps {}

const Overview = ({}: IOverviewProps) => {
  const [geoList, setGeoList] = useState<any>();
  const estatesList = useRecoilValue(filteredEstates);

  const fetchGeoJSON = useCallback(() => {
    const features = estatesList
      .map((estate) => estate.geojson)
      .map((json) => convertGeoJSON(json))
      .reduce((prev, cur) => [...prev, ...cur.features], []);

    setGeoList({
      type: "FeatureCollection",
      features: features,
    });
  }, [estatesList]);

  useEffect(() => {
    fetchGeoJSON();
  }, [fetchGeoJSON]);

  return (
    <div className={styles.overview}>
      <MapView data={estatesList} geoJSON={geoList} />
    </div>
  );
};

export default Overview;
