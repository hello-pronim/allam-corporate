import React from "react";
import Image from "next/image";
import Icon from "@components/Icons/Icons";
import { CraftImage } from "@models";
import styles from "./TrustMark.module.scss";

export interface ITrustMarkProps {
  icon?: CraftImage;
  title?: string;
  description?: string;
}

const TrustMark = ({ icon, title, description }: ITrustMarkProps) => {
  return (
    <div className={styles.trustMark}>
      {icon && (
        <div className={styles.trustMarkIcon}>
          <Image
            src={icon.url}
            alt={icon.title}
            width={icon.width}
            height={56}
          />
        </div>
      )}

      <div className={styles.trustMarkTitle}>
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default TrustMark;
