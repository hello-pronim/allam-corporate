import React from "react";
import { Redactor } from "@components/Common/Common";
import { EasyBuyStepModel } from "@models";
import styles from "./EasyBuySteps.module.scss";

export interface IEasyBuyStepsProps {
  steps: EasyBuyStepModel[];
}

const EasyBuySteps = ({ steps }: IEasyBuyStepsProps) => {
  return (
    <div className={styles.easyBuySteps}>
      <div className={styles.easyBuyStepsList}>
        {steps.map((step, id) => (
          <div className={styles.singleStep} key={id}>
            <div className={styles.singleStepNumber}>{`0${id + 1}.`}</div>
            <div className={styles.singleStepContent}>
              <h4>{step.heading}</h4>
              <Redactor>{step.description ?? ""}</Redactor>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyBuySteps;
