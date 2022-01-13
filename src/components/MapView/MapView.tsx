import React, { useCallback, useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Image from "next/image";
import useSupercluster from "use-supercluster";
import ReactMapGL, { MapRef, Marker, FlyToInterpolator } from "react-map-gl";
import { useWindowSize } from "@hooks/useWindowSize";
import styles from "./MapView.module.scss";

export interface IMapViewProps {
  data: any[];
}

const MapView = ({ data }: IMapViewProps) => {
  const { width, height } = useWindowSize();
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: data.length > 0 ? Number(data[0].latitude) : -37.85,
    longitude: data.length > 0 ? Number(data[0].longitude) : 145.11,
    zoom: 8,
    transitionDuration: 5000,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: d3.easeCubic,
  });

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

  const points = data?.map((home) => ({
    type: "Feature",
    properties: { cluster: false, clusterId: home.slug },
    geometry: {
      type: "Point",
      coordinates: [Number(home.longitude), Number(home.latitude)],
    },
  }));

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <div className={styles.map}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
        ref={mapRef}
      >
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
                        supercluster.getClusterExpansionZoom(cluster.id),
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
              >
                <div style={{ transform: `translate(-20px, -26px)` }}>
                  <Image
                    src={"/assets/icons/icon-pin.svg"}
                    alt={cluster.properties.clusterId}
                    width={40}
                    height={52}
                  />
                </div>
              </Marker>
            );
          })}
      </ReactMapGL>
    </div>
  );
};

export default MapView;
