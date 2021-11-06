import React from "react";
import styles from "./TimelineGraph.module.scss";

export interface ITimelineGraphProps {}

const TimelineGraph = ({}: ITimelineGraphProps) => {
  return (
    <div className={styles.timeGraph}>
      <div></div>
    </div>
  );
};

export default TimelineGraph;
