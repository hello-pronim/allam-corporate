import React from "react";
import Image from "next/image";
import { CraftImage } from "@models";
import styles from "./TimelineGraph.module.scss";

export interface ITimelineGraphProps {
  data?: {
    titleImage?: CraftImage[];
    heading?: string;
  };
}

const TimelineGraph = ({ data }: ITimelineGraphProps) => {
  console.log(data);

  return (
    <div className={styles.timeGraph}>
      <div className={styles.timeGraphWrapper}>
        <div className={styles.timeGraphContent}>
          <div className={styles.timeGraphContentImage}>
            {data?.titleImage?.[0]?.url && (
              <Image
                src={data?.titleImage?.[0]?.url}
                alt={data?.titleImage?.[0]?.title}
                width={data?.titleImage?.[0]?.width}
                height={data?.titleImage?.[0]?.height}
                layout="responsive"
                priority
              />
            )}
          </div>
          <h2>{data?.heading}</h2>
        </div>
      </div>
    </div>
  );
};

export default TimelineGraph;
