import React from "react";
import Image from "next/image";

import styles from "./OfferAvailableEstates.module.scss";

export interface OfferAvailableEstatesProps {
  title?: string;
  estates: Array<any>;
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
          {estates.map((estate) => (
            <div key={estate.id} className={styles.logosListItem}>
              <Image
                src={estate.logo}
                alt={estate.name}
                width={372}
                height={178}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferAvailableEstates;
