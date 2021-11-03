import React, { useState } from "react";
import ReactPlayer from "react-player";
import Icon from "@components/Icons/Icons";
import styles from "./VideoHero.module.scss";

export interface VideoHeroProps {
  data?: any;
}

const VideoHero = ({ data }: VideoHeroProps) => {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroVideo}>
          <ReactPlayer
            controls
            playing
            onStart={() => setPlaying(true)}
            playsInline
            light={data?.titleImage?.[0]?.url}
            className={styles.heroVideoPlayer}
            playIcon={
              <div className={styles.heroVideoPlayIcon}>
                <Icon type="video-play" /> <h4>Watch our story</h4>
              </div>
            }
            url={data?.videoLink}
            width="100%"
            height="100%"
          />
        </div>

        {!isPlaying && (
          <div className={styles.heroContent}>
            <div className={styles.heroContentWrapper}>
              <div className={styles.heroContentWrapperGrid}>
                <h3>{data?.subHeading}</h3>
                <h1>{data?.heading}</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoHero;
