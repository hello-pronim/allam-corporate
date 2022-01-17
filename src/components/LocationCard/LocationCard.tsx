import React from "react";
import { Button } from "@components/Common/Common";
import styles from "./LocationCard.module.scss";

export interface ILocationCardProps {
  location: any;
}

const LocationCard = ({ location }: ILocationCardProps) => {
  return (
    <div className={styles.locationCard}>
      <h5>{location?.linkedEstates?.[0]?.title} Estate</h5>
      <p>{`${location?.linkedEstates?.[0]?.streetAddress},`}</p>
      <p>{`${location?.linkedEstates?.[0]?.suburb} ${location?.linkedEstates?.[0]?.estateState} ${location?.linkedEstates?.[0]?.postcode}`}</p>

      <div className={styles.divider} />

      <h5>{location.officeName}</h5>
      <p>
        {`${location.streetAddress},`}
        <br />
        {`${location.suburb} ${location.locationState} ${location.postcode}`}
      </p>
      <p>
        <strong>{location.daysOpen}</strong>
        {` ${location.hoursOpen}`}
        <br />
        {location.phoneNumber && (
          <>
            <strong>Phone</strong> {location.phoneNumber}
          </>
        )}
      </p>
      <div className={styles.divider} />
      <div className={styles.locationCardCTAs}>
        {location?.directionsLink && (
          <Button rounded href={location.directionsLink}>
            Get directions
          </Button>
        )}
        {location?.linkedEstates?.[0] && (
          <Button
            color="light"
            rounded
            href={`/find-estate/${location?.linkedEstates?.[0]?.slug}`}
          >
            View estate
          </Button>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
