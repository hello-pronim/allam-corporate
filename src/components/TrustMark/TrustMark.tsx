import React from "react";
import Icon from "@components/Icons/Icons";
import styles from "./TrustMark.module.scss";

export interface ITrustMarkProps {
  icon: string;
  title?: string;
  description?: string;
}

const TrustMark = ({ icon, title, description }: ITrustMarkProps) => {
  return (
    <div className={styles.trustMark}>
      <div className={styles.trustMarkIcon}>
        <Icon type={icon} />
      </div>

      <div className={styles.trustMarkTitle}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TrustMark;
