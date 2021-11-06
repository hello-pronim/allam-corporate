import React from "react";
import TextBlock from "@components/TextBlock/TextBlock";
import { TimelineCards } from "@sections/AboutUs/constants";
import Timeline from "@components/Timeline/Timeline";
import styles from "./LeadingTimeline.module.scss";

export interface ILeadingTimelineProps {
  textContent?: any;
}

const LeadingTimeline = ({ textContent }: ILeadingTimelineProps) => {
  return (
    <div className={styles.timeLine}>
      <TextBlock data={textContent} />
      <Timeline cards={TimelineCards} />
    </div>
  );
};

export default LeadingTimeline;
