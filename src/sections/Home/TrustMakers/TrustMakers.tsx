import React from "react";
import { TrustMakersModel, TrustFeature } from "@models";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import styles from "./TrustMakers.module.scss";

type ITrustMakersProps = {
  data?: TrustMakersModel;
  features?: TrustFeature[];
};

const TrustMakers = ({ data, features }: ITrustMakersProps) => {
  return (
    <div className={styles.trustMakers}>
      <LeadingTrustMakers
        features={features}
        data={data}
        hasBackground={false}
      />
    </div>
  );
};

export default TrustMakers;
