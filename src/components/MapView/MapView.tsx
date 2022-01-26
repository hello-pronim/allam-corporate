import React, { useCallback, useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import useSuperCluster from "use-supercluster";
import ReactMapGL, {
  Source,
  Layer,
  MapRef,
  Marker,
  FlyToInterpolator,
} from "react-map-gl";

import { useWindowSize } from "@hooks/useWindowSize";
import { markerPopupState } from "@states/atoms/markerPopup";

import MarkerPopup from "@components/MarkerPopup/MarkerPopup";

import styles from "./MapView.module.scss";

export interface IMapViewProps {
  data: any[];
  geoJSON?: any;
  type?: "estate" | "home" | "land";
  homesList?: any[];
}

const MapView = ({
  data,
  geoJSON = null,
  type = "estate",
  homesList,
}: IMapViewProps) => {
  const { width, height } = useWindowSize();
  const [openPopup, setOpenPopup] = useState(false);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: data.length > 0 ? Number(data[0].latitude) : -37.85,
    longitude: data.length > 0 ? Number(data[0].longitude) : 145.11,
    zoom: 8,
    transitionDuration: 3000,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: d3.easeCubic,
  });
  const setMarkerPopupState = useSetRecoilState(markerPopupState);

  useEffect(() => {
    if (data.length === 0) {
      setViewport({
        ...viewport,
        latitude: -37.85,
        longitude: 145.11,
      });
    } else {
      setViewport({
        ...viewport,
        latitude: Number(data[0].latitude),
        longitude: Number(data[0].longitude),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const dataLayer = {
    id: "data",
    source: "estates",
    type: "fill" as "fill",
    paint: {
      "fill-color": ["get", "color"],
      "fill-opacity": 0.8,
    } as any,
  };

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

  const points = data?.map((el) => ({
    type: "Feature",
    properties: { cluster: false, clusterId: el.slug },
    geometry: {
      type: "Point",
      coordinates: [Number(el.longitude), Number(el.latitude)],
    },
  }));

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const { clusters, supercluster: superCluster } = useSuperCluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  const handleClickMarker = (slug: string) => {
    setMarkerPopupState({
      data: data.find((el: any) => el.slug === slug),
      type,
    });
    setOpenPopup(true);
  };

  return (
    <div className={styles.map}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
        ref={mapRef}
      >
        {geoJSON && (
          <Source id="estates" type="geojson" data={geoJSON}>
            <Layer {...dataLayer} />
          </Source>
        )}
        {data &&
          clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  latitude={latitude}
                  longitude={longitude}
                >
                  <div
                    className={styles.cluster}
                    onClick={() => {
                      const expansionZoom = Math.min(
                        superCluster.getClusterExpansionZoom(cluster.id),
                        20
                      );

                      setViewport({
                        ...viewport,
                        latitude,
                        longitude,
                        zoom: expansionZoom,
                        transitionInterpolator: new FlyToInterpolator({
                          speed: 2,
                        }),
                      });
                    }}
                  >
                    <div className={styles.clusterMarker}>
                      <Image
                        src={"/assets/icons/icon-union.svg"}
                        alt={cluster.properties.clusterId}
                        width={40}
                        height={52}
                      />
                      <span>{pointCount}</span>
                    </div>
                  </div>
                </Marker>
              );
            }

            return (
              <Marker
                key={`crime-${cluster.properties.clusterId}`}
                latitude={latitude}
                longitude={longitude}
                onClick={() => handleClickMarker(cluster.properties.clusterId)}
              >
                {geoJSON ? (
                  <div
                    style={{
                      transform: `translate(-20px, -28px)`,
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={"/assets/icons/icon-pin-drop.svg"}
                      alt={cluster.properties.clusterId}
                      width={40}
                      height={56}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      transform: `translate(-20px, -26px)`,
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={"/assets/icons/icon-pin.svg"}
                      alt={cluster.properties.clusterId}
                      width={40}
                      height={52}
                    />
                  </div>
                )}
              </Marker>
            );
          })}
        {openPopup && (
          <MarkerPopup
            onClose={() => setOpenPopup(false)}
            homesList={homesList}
          />
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapView;
