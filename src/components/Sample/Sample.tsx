import React from "react";
import styles from "./Sample.module.scss";

export interface ISampleProps {}

const Sample = ({}: ISampleProps) => {
  return (
    <div className={styles.sample}>
      <div></div>
    </div>
  );
};

export default Sample;
