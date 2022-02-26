import React from "react";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { videoModalState } from "@states/atoms/videoModal";
import Icon from "@components/Icons/Icons";
import styles from "./StoryVideo.module.scss";

export type IStoryVideoProps = {
  data?: any;
};

const StoryVideo = ({ data }: IStoryVideoProps) => {
  const setVideoModal = useSetRecoilState(videoModalState);

  return (
    <div className={styles.storyVideo}>
      <div className={styles.storyVideoWrapper}>
        <div className={styles.storyVideoInner}>
          <div
            className={styles.storyVideoImage}
            style={{ backgroundImage: `url(${data?.titleImage?.[0]?.url})` }}
          >
            <div
              className={styles.storyVideoImagePlay}
              onClick={() =>
                setVideoModal({
                  isOpen: true,
                  videoUrl: data?.videoLink,
                  coverImageUrl: data?.titleImage?.[0]?.url,
                  isvirtualtour: false
                })
              }
            >
              <Icon type="video-play" />
              <h5>Watch our EasyBuy story</h5>
            </div>
          </div>

          <div className={styles.storyVideoLogoImage}>
            <Image
              src={"/assets/images/img-easyBuy-seal-waxMain.png"}
              alt="easy-buy-mark"
              width={192}
              height={190}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryVideo;
