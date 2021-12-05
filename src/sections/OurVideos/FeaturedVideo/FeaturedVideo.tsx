import React from "react";
import { VideoModel } from "@models";
import VideoCard from "@components/VideoCard/VideoCard";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import styles from "./FeaturedVideo.module.scss";

export interface featuredPostProps {
  video: VideoModel;
}

const FeaturedVideo = ({ video }: featuredPostProps) => {
  return (
    <div className={styles.featuredVideo}>
      <div className={styles.featuredVideoWrapper}>
        <div className={styles.featuredVideoBreadcrumb}>
          <BreadCrumb />
        </div>
        <h1>Videos</h1>
        <div className={styles.featuredVideoContent}>
          <VideoCard video={video} variant="featured" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
