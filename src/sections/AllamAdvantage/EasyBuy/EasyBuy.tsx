import React from "react";
import { EasyBuyStepModel } from "@models";
import EasyBuySteps from "@components/EasyBuySteps/EasyBuySteps";
import { Redactor } from "@components/Common/Common";
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
          <div className={styles.easyBuyContent}>
            <div className={styles.easyBuyContentHeading}>
              <h3>{heading}</h3>
              <Redactor>{introBlurb ?? ""}</Redactor>
            </div>
            <h4>{`Allam's EasyBuy consists of ${steps?.length} steps:`}</h4>
          </div>

          <div>{steps && <EasyBuySteps steps={steps} />}</div>
        </div>
      </div>
    </div>
  );
};

export default EasyBuy;
