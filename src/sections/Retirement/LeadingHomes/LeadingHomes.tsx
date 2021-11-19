import React from "react";
import { TrustMakersModel, TrustFeature } from "@models";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import CardGrid from "@components/CardGrid/CardGrid";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import { Button, Redactor } from "@components/Common/Common";
import styles from "./LeadingHomes.module.scss";

export interface ILeadingHomesProps {
  titleData?: TrustMakersModel;
  trustFeatures?: TrustFeature[];
}

const LeadingHomes = ({ titleData, trustFeatures }: ILeadingHomesProps) => {
  return (
    <div className={styles.leadingHomes}>
      <div className={styles.leadingHomesWrapper}>
        <LeadingTrustMakers
          features={trustFeatures}
          data={titleData}
          hasBackground={false}
        />

        <div className={styles.leadingHomesProperty}>
          {/* <CardGrid
            title="Retirement homes available"
            col={[1, 2, 3]}
            padding={0}
          >
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </CardGrid> */}

          <div className={styles.leadingHomesPropertyCTA}>
            <div className={styles.leadingHomesPropertyCTAWrapper}>
              <Button color="primary" href="/" size="large" rounded>
                Load more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingHomes;
