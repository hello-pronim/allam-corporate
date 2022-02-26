import React from "react";
import { useSetRecoilState } from "recoil";
import { videoModalState } from "@states/atoms/videoModal";
import Icon from "@components/Icons/Icons";
import styles from "./VideoHero.module.scss";

export interface VideoHeroProps {
  data?: any;
}

const VideoHero = ({ data }: VideoHeroProps) => {
  const setVideoModal = useSetRecoilState(videoModalState);
  console.log(data)

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${data?.titleImage?.[0]?.url})` }}
        >
          {data?.videoLink && (
            <div
              className={styles.heroImagePlayIcon}
              onClick={() =>
                setVideoModal({
                  isOpen: true,
                  videoUrl: data?.videoLink,
                  coverImageUrl: data?.titleImage?.[0]?.url,
                  isvirtualtour: false
                })
              }
            >
              <Icon type="video-play" /> <h4>Watch our story</h4>
            </div>
          )}
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroContentWrapperGrid}>
              <h3>{data?.subHeading}</h3>
              <h1>{data?.heading}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
