import React from "react";
import { TrustMarkersModel, TrustFeature } from "@models";
import LeadingTrustMarkers from "@components/LeadingTrustMarkers/LeadingTrustMarkers";
import styles from "./TrustMarkers.module.scss";

type ITrustMarkersProps = {
  data?: TrustMarkersModel;
  features?: TrustFeature[];
};

const TrustMarkers = ({ data, features }: ITrustMarkersProps) => {
  return (
    <div className={styles.trustMarkers}>
      <LeadingTrustMarkers
        features={features}
        data={data}
        hasBackground={true}
      />
    </div>
  );
};

export default TrustMarkers;
