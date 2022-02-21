import React from "react";
import Link from "next/link";
import { TrustMakersModel, TrustFeature } from "@models";
import LeadingTrustMakers from "@components/LeadingTrustMakers/LeadingTrustMakers";
import CardGrid from "@components/CardGrid/CardGrid";
import PropertyCard from "@components/PropertyCard/PropertyCard";
import { Button } from "@components/Common/Common";
import styles from "./LeadingHomes.module.scss";

export interface ILeadingHomesProps {
  titleData?: TrustMakersModel;
  trustFeatures?: TrustFeature[];
  homes: any[];
}

const LeadingHomes = ({
  titleData,
  trustFeatures,
  homes,
}: ILeadingHomesProps) => {
  return (
    <div className={styles.leadingHomes}>
      <div className={styles.leadingHomesWrapper}>
        <LeadingTrustMakers
          features={trustFeatures}
          data={titleData}
          hasBackground={true}
        />

        <div className={styles.leadingHomesProperty}>
          <CardGrid title="Retirement homes available" col={[1, 2, 3]}>
            {homes.slice(0, 6).map((home) => (
              <Link href={`/find-home/${home.slug}`} key={home.slug}>
                <a>
                  <PropertyCard homeData={home} />
                </a>
              </Link>
            ))}
          </CardGrid>

          <div className={styles.leadingHomesPropertyCTA}>
            <div className={styles.leadingHomesPropertyCTAWrapper}>
              <Button color="primary" href="/find-home" rounded>
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
