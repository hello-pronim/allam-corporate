import React from "react";
import { EasyBuyStepModel } from "@models";
import EasyBuySteps from "@components/EasyBuySteps/EasyBuySteps";
import StoryVideo from "@components/StoryVideo/StoryVideo";
import styles from "./EasySteps.module.scss";

export interface IEasyStepsProps {
  steps?: EasyBuyStepModel[];
  videoData: any;
}

const EasySteps = ({ steps, videoData }: IEasyStepsProps) => {
  return (
    <div className={styles.easyBuy}>
      <div className={styles.easyBuyVideo}>
        <StoryVideo data={videoData} />
      </div>

      <div className={styles.easyBuyWrapper}>
        <div className={styles.easyBuyInner}>
          <div className={styles.easyBuyContent}>
            <h3>{`Allam's EasyBuy consists of ${steps?.length} steps:`}</h3>
          </div>

          <div>{steps && <EasyBuySteps steps={steps} />}</div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
