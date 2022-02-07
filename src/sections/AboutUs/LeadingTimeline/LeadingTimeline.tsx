import React from "react";
import Timeline from "@components/Timeline/Timeline";
import TextBlock from "@components/TextBlock/TextBlock";
import { aboutTimelineCards } from "@libs/constants";
import styles from "./LeadingTimeline.module.scss";

export interface ILeadingTimelineProps {
  textContent?: any;
}

const LeadingTimeline = ({ textContent }: ILeadingTimelineProps) => {
  return (
    <div className={styles.timeLine}>
      <TextBlock data={textContent} />
      {/* <Timeline cards={aboutTimelineCards} /> */}
    </div>
  );
};

export default LeadingTimeline;
