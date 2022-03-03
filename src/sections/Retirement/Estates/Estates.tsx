import React from "react";
import Link from "next/link";

import CardGrid from "@components/CardGrid/CardGrid";
import EstateCard from "@components/EstateCard/EstateCard";

import styles from "./Estates.module.scss";

export interface IRetirementEstatesProps {
  estates: any[];
}

const RetirementEstates = ({ estates }: IRetirementEstatesProps) => {
  return (
    <div className={styles.retirementEstates}>
      <div className={styles.retirementEstatesWrapper}>
        <div className={styles.retirementEstatesProperty}>
          <CardGrid
            title="Retirement Estates"
            maxItems={estates.length}
            col={[1, 2, 3]}
          >
            {estates?.map((estate) => (
              <Link href={`/find-estate/${estate.slug}`} key={estate.slug}>
                <a>
                  <EstateCard estate={estate} />
                </a>
              </Link>
            ))}
          </CardGrid>
        </div>
      </div>
    </div>
  );
};

export default RetirementEstates;
