import React from "react";
import { AdvantageModel } from "@models";
import AdvantagesList from "@components/AdvantagesList/AdvantagesList";
import StoryVideo from "@components/StoryVideo/StoryVideo";
import styles from "./Advantages.module.scss";

export interface AdvantagesProps {
  subheading?: string;
  advantageList: AdvantageModel[];
  videoData: any;
}

const Advantages = ({
  subheading,
  advantageList,
  videoData,
}: AdvantagesProps) => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantagesWrapper}>
        <h2>{subheading}</h2>

        <div className={styles.advantagesList}>
          <AdvantagesList list={advantageList} />
        </div>
      </div>

      <div className={styles.advantagesVideo}>
        <StoryVideo data={videoData} />
      </div>
    </div>
  );
};

export default Advantages;
