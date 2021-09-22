import React from "react";
import Modal from "react-modal";
import styles from "./GalleryModal.module.scss";

export interface IGalleryModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const GalleryModal = ({ isModalOpen, closeModal }: IGalleryModalProps) => {
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
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      closeTimeoutMS={1500}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Download Modal"
    >
      <div className={styles.galleryModal}>
        <div>
          <h2>Gallery Modal</h2>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryModal;
