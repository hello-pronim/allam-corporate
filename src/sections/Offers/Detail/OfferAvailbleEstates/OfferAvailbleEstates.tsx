import React from "react";
import Image from "next/image";

import { EstateModel } from "@models";
import styles from "./OfferAvailableEstates.module.scss";

export interface OfferAvailableEstatesProps {
  title?: string;
  estates: EstateModel[];
}

const OfferAvailableEstates = ({
  title,
  estates,
}: OfferAvailableEstatesProps) => {
  return (
    <div className={styles.logosPanel}>
      <div className={styles.logosWrapper}>
        {title && <h3>{title}</h3>}
        <div className={styles.logosList}>
          {estates?.map((estate) => (
            <div key={estate.title} className={styles.logosListItem}>
              <div className={styles.logosListItemImage}>
                <Image
                  src={estate.logo?.[0].url}
                  alt={estate.logo?.[0].title}
                  width={estate.logo?.[0].width}
                  height={estate.logo?.[0].height}
                  layout="responsive"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferAvailableEstates;
