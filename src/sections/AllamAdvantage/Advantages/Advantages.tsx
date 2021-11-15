import React from "react";
import AdvantagesList from "@components/AdvantagesList/AdvantagesList";
import { AdvantageModel } from "@models";
import styles from "./Advantages.module.scss";

export interface AdvantagesProps {
  subheading?: string;
  advantageList: AdvantageModel[];
}

const Advantages = ({ subheading, advantageList }: AdvantagesProps) => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantagesWrapper}>
        <h2>{subheading}</h2>

        <div className={styles.advantagesList}>
          <AdvantagesList list={advantageList} />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
