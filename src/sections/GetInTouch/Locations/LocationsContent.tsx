import React, { useState, useEffect } from "react";
import { css } from "@styled-system/css";
import { LocationModel } from "@models";
import CardGrid from "@components/CardGrid/CardGrid";
import LocationCard from "@components/LocationCard/LocationCard";
import { ImageButton } from "@components/Common/Common";
import styles from "../../GetInTouch/GetInTouch.module.scss";
import { useRouter } from "next/router";

export interface LocationContentProps {
  locations: LocationModel[];
}

const LocationsContent = ({ locations }: LocationContentProps) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const router = useRouter();

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  useEffect(() => {
    getWindowDimensions();

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.TabbedContent}>
      <div
        className={styles.TabbedContentWrapper}
        css={css({
          backgroundImage: `url("/assets/images/temp/contact-background.jpg")`,
        })}
      >
        <div className={styles.TabWrapper}>
          <div className={styles.TabContainer}>
            <ImageButton
              icon="grid-view"
              label={`Contact${windowDimensions.width > 768 ? " Us" : ""} `}
              onClick={() => router.push("/get-in-touch")}
            />
            <div className={styles.Divider}></div>
            <ImageButton
              icon="map"
              label={`${windowDimensions.width > 768 ? "Our " : ""}Locations`}
              css={css({ bg: "#ffca04" })}
              onClick={() => router.reload()}
            />
          </div>
        </div>

        <div className={styles.locationWrapper}>
          <div className={styles.gridWrapper}>
            <CardGrid title="Our locations" col={[1, 2, 3]} padding={[80, 160]}>
              {locations?.map((location, id) => (
                <LocationCard location={location} key={id} />
              ))}
            </CardGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsContent;
