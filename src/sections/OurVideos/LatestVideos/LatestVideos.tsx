import React from "react";
import { VideoModel } from "@models";
import VideoCard from "@components/VideoCard/VideoCard";
import LatestSlider from "@components/LatestSlider/LatestSlider";
import styles from "./LatestVideos.module.scss";

export interface ILatestVideosProps {
  videos: VideoModel[];
}

const LatestVideos = ({ videos }: ILatestVideosProps) => {
  return (
    <div className={styles.latestVideos}>
      <div className={styles.latestVideosWrapper}>
        <h2>Latest videos of the week</h2>
      </div>

      <LatestSlider>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} variant="latest" />
        ))}
      </LatestSlider>
    </div>
  );
};

export default LatestVideos;
