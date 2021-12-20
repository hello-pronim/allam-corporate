import React from "react";
import { Redactor } from "@components/Common/Common";
import styles from "./DetailContent.module.scss";

export interface DetailContentProps {
  description: string;
}

const DetailContent = ({ description }: DetailContentProps) => {
  return (
    <div className={styles.offerDetail}>
      <div className={styles.offerDetailWrapper}>
        <div className={styles.offerDetailContainer}>
          <div className={styles.offerDetailDescription}>
            {description && <Redactor>{description}</Redactor>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
