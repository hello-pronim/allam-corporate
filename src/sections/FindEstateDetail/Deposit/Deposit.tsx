import React from "react";
import { Button } from "@components/Common/Common";
import styles from "./Deposit.module.scss";

export interface IDepositProps {}

const Deposit = ({}: IDepositProps) => {
  return (
    <div className={styles.deposit}>
      <div className={styles.depositWrapper}>
        <div className={styles.depositCard}>
          <div className={styles.depositCardTitle}>
            <h2>10% Deposit is all you need</h2>
            <h5>Pay the rest when you move in!</h5>
          </div>

          <div className={styles.depositCardContent}>
            <p>
              Our history spans 25 years and during that time we’ve helped
              thousands of customers find a new home, with homes and estates
              spread across many of Sydney’s most popular areas.
            </p>
            <Button color="light" size="large" rounded>
              Contact an Agent today!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
