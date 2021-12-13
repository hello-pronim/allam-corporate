import React from "react";
import Modal from "react-modal";
import { CraftImage, VideoModel } from "@models";
import Icon from "@components/Icons/Icons";
import GallerySlider from "@components/GallerySlider/GallerySlider";
import styles from "./GalleryModal.module.scss";

export interface IGalleryModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  videos: VideoModel[];
  images: CraftImage[];
}

const GalleryModal = ({
  isModalOpen,
  closeModal,
  videos,
  images,
}: IGalleryModalProps) => {
  const customStyles: React.ReactNode = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.55)",
      zIndex: "1000",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      margin: "0",
      padding: "0",
      width: "100%",
      height: "100%",
      background: "#000",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      closeTimeoutMS={1500}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Gallery Modal"
    >
      <div className={styles.galleryModal}>
        <div className={styles.galleryModalClose} onClick={closeModal}>
          <Icon type="close" />
          <span>Close</span>
        </div>

        <div className={styles.galleryModalSlider}>
          <div className={styles.galleryModalSliderWrapper}>
            <GallerySlider images={images} videos={videos} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryModal;
