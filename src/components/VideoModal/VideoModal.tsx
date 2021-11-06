import React from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Icon from "@components/Icons/Icons";
import { videoModalState } from "@states/atoms/videoModal";
import styles from "./VideoModal.module.scss";

export type IVideoModalProps = {
  isModalOpen: boolean;
};

const VideoModal = ({ isModalOpen }: IVideoModalProps) => {
  const { videoUrl, coverImageUrl } = useRecoilValue(videoModalState);
  const setVideoModal = useSetRecoilState(videoModalState);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.95)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      width: "calc(100% - 100px)",
      maxWidth: "1600px",
      margin: "10px auto",
      background: "transparent",
      transform: "translate(-50%, -50%)",
      padding: "0",
      overflow: "initial",
    },
  };

  const closeModal = () => {
    setVideoModal({
      isOpen: false,
      videoUrl: "",
      coverImageUrl: "",
    });
  };

  return (
    <Modal
      closeTimeoutMS={2000}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Video Modal"
    >
      <div className={styles.videoModal}>
        <div className={styles.videoModalClose} onClick={closeModal}>
          <Icon type="close" />
          <span>Close</span>
        </div>

        <div className={styles.videoModalPlayer}>
          <ReactPlayer
            controls
            playing
            playsInline
            light={coverImageUrl}
            playIcon={
              <div className={styles.videoModalPlayerIcon}>
                <Icon type="video-play" />
              </div>
            }
            url={videoUrl}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
