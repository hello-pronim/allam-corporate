import React from "react";
import { Redactor } from "@components/Common/Common";

import styles from "./DetailContent.module.scss";

export interface DetailContentProps {
  description: string;
}

const DetailContent = ({ description }: DetailContentProps) => {
  return (
    <div className={styles.offerDetailPanel}>
      <div className={styles.offerDetailWrapper}>
        <div className={styles.offerDescription}>
          {description && <Redactor>{description}</Redactor>}
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
