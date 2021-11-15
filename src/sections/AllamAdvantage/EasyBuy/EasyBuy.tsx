import React from "react";
import EasyBuySteps from "@components/EasyBuySteps/EasyBuySteps";
import { EasyBuyStepModel } from "@models";
import styles from "./EasyBuy.module.scss";

export interface IEasyBuyProps {
  heading?: string;
  introBlurb?: string;
  steps?: EasyBuyStepModel[];
}

const EasyBuy = ({ heading, introBlurb, steps }: IEasyBuyProps) => {
  return (
    <div className={styles.easyBuy}>
      <div className={styles.easyBuyWrapper}>
        <div className={styles.easyBuyInner}>
          <div>{steps && <EasyBuySteps steps={steps} />}</div>
        </div>
      </div>
    </div>
  );
};

export default EasyBuy;
