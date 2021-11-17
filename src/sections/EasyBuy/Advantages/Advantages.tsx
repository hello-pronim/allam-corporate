import React from "react";
import { AdvantageModel } from "@models";
import { Redactor } from "@components/Common/Common";

import AdvantagesList from "@components/AdvantagesList/AdvantagesList";
import styles from "./Advantages.module.scss";

export interface AdvantagesProps {
  heading?: string;
  introBlurb?: string;
  subheading?: string;
  advantageList: AdvantageModel[];
}

const Advantages = ({
  heading,
  introBlurb,
  subheading,
  advantageList,
}: AdvantagesProps) => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantagesWrapper}>
        <div className={styles.advantagesInner}>
          <div className={styles.advantagesContent}>
            <div className={styles.advantagesContentHeading}>
              <h3>{heading}</h3>
              <Redactor>{introBlurb ?? ""}</Redactor>
            </div>
            <h4>{subheading}</h4>
          </div>
        </div>

        <div className={styles.advantagesList}>
          <AdvantagesList list={advantageList} />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
