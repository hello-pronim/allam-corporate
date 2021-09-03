import React from "react";
import { Button } from "@components/Common/Common";
import styles from "./FindHomes.module.scss";

export interface IFindHomesProps {}

const FindHomes = ({}: IFindHomesProps) => {
  return (
    <div className={styles.findHomes}>
      <div className={styles.findHomesWrapper}>
        <div className={styles.findHomesContent}>
          <div className={styles.findHomesContentText}>
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

export default FindHomes;
