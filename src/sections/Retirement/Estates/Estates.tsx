import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@components/Common/Common";
import CardGrid from "@components/CardGrid/CardGrid";
import EstateCard from "@components/EstateCard/EstateCard";

import styles from "./Estates.module.scss";

export interface IRetirementEstatesProps {
  estates: any[];
}

const RetirementEstates = ({ estates }: IRetirementEstatesProps) => {
  const [moreEstates, setMoreEstates] = useState(false);
  const [allEstates, setAllEstates] = useState(estates?.slice(0, 6));
  const loadMore = () => {
    setMoreEstates(true);
    setAllEstates(estates);
  };

  return (
    <div className={styles.retirementEstates}>
      <div className={styles.retirementEstatesWrapper}>
        <div className={styles.retirementEstatesProperty}>
          <CardGrid
            title="Retirement Estates"
            maxItems={estates.length}
            col={[1, 2, 3]}
          >
            {allEstates.map((estate) => (
              <Link href={`/find-estate/${estate.slug}`} key={estate.slug}>
                <a>
                  <EstateCard estate={estate} />
                </a>
              </Link>
            ))}
          </CardGrid>
          {!moreEstates && (
            <div className={styles.retirementEstatesPropertyCTA}>
              <div className={styles.retirementEstatesPropertyCTAWrapper}>
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

export default RetirementEstates;
