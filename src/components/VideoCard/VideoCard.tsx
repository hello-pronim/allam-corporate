import React from "react";
import { VideoModel } from "@models";
import classnames from "classnames/bind";
import { useSetRecoilState } from "recoil";
import Icon from "@components/Icons/Icons";
import { Redactor } from "@components/Common/Common";
import { videoModalState } from "@states/atoms/videoModal";
import styles from "./VideoCard.module.scss";

export interface IVideoCardProps {
  video: VideoModel;
  variant?: "featured" | "normal" | "latest";
}
const cx = classnames.bind(styles);

const VideoCard = ({ video, variant = "normal" }: IVideoCardProps) => {
  const setVideoModal = useSetRecoilState(videoModalState);

  return (
    <div
      className={cx("videoCard", {
        videoCardFeatured: variant === "featured",
        videoCardLatest: variant === "latest",
      })}
    >
      <div
        className={styles.videoCardImage}
        style={{ backgroundImage: `url(${video?.titleImage?.[0]?.url})` }}
      >
        <div
          className={styles.videoCardImagePlay}
          onClick={() =>
            setVideoModal({
              isOpen: true,
              videoUrl: video?.videoLink,
              coverImageUrl: video?.titleImage?.[0]?.url,
            })
          }
        >
          <Icon type="video-play-color" />
        </div>
      </div>

      <div className={styles.videoCardContent}>
        <h3>{video.title}</h3>
        {video.description && <Redactor>{video.description}</Redactor>}
      </div>
    </div>
  );
};

export default VideoCard;
