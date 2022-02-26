import React from "react";
import { VideoModel } from "@models";
import VideoCard from "@components/VideoCard/VideoCard";
import styles from "./OldVideos.module.scss";
import CardGrid from "@components/CardGrid/CardGrid";

export interface IOldVideosProps {
  videos: VideoModel[];
}

const OldVideos = ({ videos }: IOldVideosProps) => {
  return (
    <div className={styles.oldVideos}>
      <CardGrid
        title="Older posts"
        col={[1, 2, 3]}
        colGap={40}
        rowGap={30}
        padding={[50, 80]}
        maxItems={9}
      >
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </CardGrid>
    </div>
  );
};

export default OldVideos;
