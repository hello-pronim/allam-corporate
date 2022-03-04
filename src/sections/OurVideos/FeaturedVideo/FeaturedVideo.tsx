import React from "react";
import { VideoModel } from "@models";
import VideoCard from "@components/VideoCard/VideoCard";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import styles from "./FeaturedVideo.module.scss";

export interface featuredPostProps {
  title: string;
  video: VideoModel;
}

const FeaturedVideo = ({ title, video }: featuredPostProps) => {
  return (
    <div className={styles.featuredVideo}>
      <div className={styles.featuredVideoWrapper}>
        <div className={styles.featuredVideoBreadcrumb}>
          <BreadCrumb />
        </div>
        <h1>{title}</h1>
        <div className={styles.featuredVideoContent}>
          <VideoCard video={video} variant="featured" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
