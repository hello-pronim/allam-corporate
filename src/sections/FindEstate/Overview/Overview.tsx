import React, { useCallback, useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { filteredEstates } from "@states/atoms/estates";
import ReactMapGL, {
  Source,
  Layer,
  MapRef,
  Marker,
  FlyToInterpolator,
} from "react-map-gl";
import { useWindowSize } from "@hooks/useWindowSize";
import styles from "./Overview.module.scss";

export interface IOverviewProps {}

const Overview = ({}: IOverviewProps) => {
  const [geoList, setGeoList] = useState<string[]>([]);
  const estatesList = useRecoilValue(filteredEstates);

  useEffect(() => {
    setGeoList(
      estatesList.map((estate) => estate.geojson).filter((el) => el !== "{}")
    );
  }, [estatesList]);

  console.log(geoList);

  const { width, height } = useWindowSize();
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -37.85,
    longitude: 145.11,
    zoom: 8,
    bearing: 0,
    pitch: 0,
  });

  // useEffect(() => {
  //   if (data.length === 0) {
  //     setViewport({
  //       ...viewport,
  //       latitude: -37.85,
  //       longitude: 145.11,
  //     });
  //   } else {
  //     setViewport({
  //       ...viewport,
  //       latitude: Number(data[0].latitude),
  //       longitude: Number(data[0].longitude),
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  const mapRef = useRef<MapRef>(null);

  const updateViewport = useCallback(() => {
    setViewport({
      ...viewport,
      width: "100%",
      height: "100%",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  useEffect(() => {
    updateViewport();
  }, [updateViewport]);

  const dataLayer = {
    id: "data",
    source: "test",
    type: "fill" as "fill",
    paint: {
      "fill-color": "red",
      "fill-opacity": 0.8,
    },
  };

  return (
    <div className={styles.overview}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={setViewport}
        ref={mapRef}
        // interactiveLayerIds={["data"]}
      >
        {/* {geoList.map((data, id) => ( */}
        <Source
          id="test"
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                      [-67.13734, 45.13745],
                      [-66.96466, 44.8097],
                      [-68.03252, 44.3252],
                      [-69.06, 43.98],
                      [-70.11617, 43.68405],
                      [-70.64573, 43.09008],
                      [-70.75102, 43.08003],
                      [-70.79761, 43.21973],
                      [-70.98176, 43.36789],
                      [-70.94416, 43.46633],
                      [-71.08482, 45.30524],
                      [-70.66002, 45.46022],
                      [-70.30495, 45.91479],
                      [-70.00014, 46.69317],
                      [-69.23708, 47.44777],
                      [-68.90478, 47.18479],
                      [-68.2343, 47.35462],
                      [-67.79035, 47.06624],
                      [-67.79141, 45.70258],
                      [-67.13734, 45.13745],
                    ],
                  ],
                },
                properties: {
                  name: "Monterey Estate",
                },
              },
            ],
          }}
        >
          <Layer {...dataLayer} />
        </Source>
        {/* ))} */}
      </ReactMapGL>
    </div>
  );
};

export default Overview;
