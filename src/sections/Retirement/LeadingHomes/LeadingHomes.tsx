import React, { useState } from "react";
import Link from "next/link";
import { TrustMarkersModel, TrustFeature } from "@models";
import LeadingTrustMarkers from "@components/LeadingTrustMarkers/LeadingTrustMarkers";
import CardGrid from "@components/CardGrid/CardGrid";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import { Button } from "@components/Common/Common";
import styles from "./LeadingHomes.module.scss";

export interface ILeadingHomesProps {
  titleData?: TrustMarkersModel;
  trustFeatures?: TrustFeature[];
  homes: any[];
}

const LeadingHomes = ({
  titleData,
  trustFeatures,
  homes,
}: ILeadingHomesProps) => {
  const [moreHomes, setMoreHomes] = useState(false);
  const [allHomes, setAllHomes] = useState(homes?.slice(0, 6));
  const loadMore = () => {
    setMoreHomes(true);
    setAllHomes(homes);
  };

  return (
    <div className={styles.leadingHomes}>
      <div className={styles.leadingHomesWrapper}>
        <LeadingTrustMarkers
          features={trustFeatures}
          data={titleData}
          hasBackground={false}
        />

        <div className={styles.leadingHomesProperty}>
          <CardGrid
            title="Retirement homes available"
            maxItems={homes.length}
            col={[1, 2, 3]}
          >
            {allHomes.map((home) => (
              <Link href={`/find-home/${home.slug}`} key={home.slug}>
                <a>
                  <PropertyCard homeData={home} />
                </a>
              </Link>
            ))}
          </CardGrid>
          {!moreHomes && (
            <div className={styles.leadingHomesPropertyCTA}>
              <div className={styles.leadingHomesPropertyCTAWrapper}>
                <Button color="primary" onClick={loadMore} rounded>
                  Load more
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadingHomes;
