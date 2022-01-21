import React from "react";
import { LocationModel } from "@models";
import { Redactor } from "@components/Common/Common";
import styles from "./LeadingInfo.module.scss";
import LocationCard from "@components/LocationCard/LocationCard";

type ILeadingInfoProps = {
  introText: string;
  salesCentre?: LocationModel;
  documents: string;
};

const LeadingInfo = ({
  documents,
  introText,
  salesCentre,
}: ILeadingInfoProps) => {
  return (
    <div className={styles.leadingInfo}>
      <div className={styles.leadingInfoWrapper}>
        <div className={styles.leadingInfoLeft}>
          <Redactor>{introText ?? ""}</Redactor>
          <div className={styles.leadingInfoLeftDocuments}>
            {documents && <Redactor>{documents}</Redactor>}
          </div>
        </div>

        <div className={styles.leadingInfoRight}>
          {salesCentre && (
            <div className={styles.leadingInfoRightPanel}>
              <LocationCard location={salesCentre} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadingInfo;
