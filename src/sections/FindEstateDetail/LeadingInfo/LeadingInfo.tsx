import React from "react";
import { LocationModel } from "@models";
import { Redactor } from "@components/Common/Common";
import styles from "./LeadingInfo.module.scss";

type ILeadingInfoProps = {
  introText: string;
  salesCentre?: LocationModel;
  streetAddress?: string;
  estateLocationAddress?: string;
};

const LeadingInfo = ({
  introText,
  salesCentre,
  streetAddress,
  estateLocationAddress,
}: ILeadingInfoProps) => {
  return (
    <div className={styles.leadingInfo}>
      <div className={styles.leadingInfoWrapper}>
        <div className={styles.leadingInfoLeft}>
          <Redactor>{introText ?? ""}</Redactor>
        </div>

        <div className={styles.leadingInfoRight}>
          <div className={styles.leadingInfoRightPanel}>
            <div className={styles.leadingInfoRightPanelLocation}>
              <h3>Estate Location</h3>
              <p>
                {streetAddress}, <br />
                {estateLocationAddress}
              </p>
              {salesCentre?.directionsLink && (
                <a
                  target="_blank"
                  href={salesCentre?.directionsLink}
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              )}
            </div>

            <div className={styles.leadingInfoRightPanelPrice}>
              <h3>Price Range</h3>
              <p>Homes: $1,019,000 — $1,439,000</p>
            </div>

            <div className={styles.leadingInfoRightPanelSales}>
              <h3>{salesCentre?.officeName}</h3>
              <p>{salesCentre?.streetAddress}</p>
              <p>
                <strong>{salesCentre?.daysOpen}</strong>
                {` ${salesCentre?.hoursOpen}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingInfo;
