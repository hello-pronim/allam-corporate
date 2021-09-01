import React from "react";
import { Button } from "@components/Common/Common";
import styles from "./PerfectEstate.module.scss";

export interface IPerfectEstateProps {}

const PerfectEstate = ({}: IPerfectEstateProps) => {
  return (
    <div className={styles.perfectEstate}>
      <div className={styles.perfectEstateWrapper}>
        <div className={styles.perfectEstateContent}>
          <div className={styles.perfectEstateContentText}>
            <h2>Find where we build our homes</h2>
            <p>
              Our history spans 25 years and during that time we’ve helped
              thousands of customers find a new home, with homes and estates
              spread across many of Sydney’s most popular areas.
            </p>
          </div>

          <Button rounded>Explore where we build</Button>
        </div>
      </div>
    </div>
  );
};

export default PerfectEstate;
