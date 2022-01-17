import React from "react";
import { LocationModel } from "@models";
import { Redactor } from "@components/Common/Common";
import styles from "./LeadingInfo.module.scss";
import LocationCard from "@components/LocationCard/LocationCard";

type ILeadingInfoProps = {
  introText: string;
  salesCentre?: LocationModel;
};

const LeadingInfo = ({ introText, salesCentre }: ILeadingInfoProps) => {
  return (
    <div className={styles.leadingInfo}>
      <div className={styles.leadingInfoWrapper}>
        <div className={styles.leadingInfoLeft}>
          <Redactor>{introText ?? ""}</Redactor>
        </div>

        <div className={styles.leadingInfoRight}>
          <div className={styles.leadingInfoRightPanel}>
            <LocationCard location={salesCentre} showEstateButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingInfo;
