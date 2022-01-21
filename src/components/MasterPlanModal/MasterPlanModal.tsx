import React from "react";
import Image from "next/image";
import Modal from "react-modal";

import { CraftImage } from "@models";
import Icon from "@components/Icons/Icons";

import styles from "./MasterPlanModal.module.scss";

export interface IMasterPlanModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  image: CraftImage;
}

const MasterPlanModal = ({
  isModalOpen,
  closeModal,
  image,
}: IMasterPlanModalProps) => {
  const customStyles: React.ReactNode = {
    overlay: {
      backgroundColor: "rgb(0, 0, 0)",
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
      contentLabel="Master Plan Modal"
    >
      <div className={styles.masterPlanModal}>
        <div className={styles.masterPlanModalClose} onClick={closeModal}>
          <Icon type="close" />
          <span>Close</span>
        </div>

        <div className={styles.masterPlanModalImage}>
          <div className={styles.masterPlanModalImageContainer}>
            <Image
              src={image?.url}
              alt={image?.title}
              width={image?.width}
              height={image?.height}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MasterPlanModal;
