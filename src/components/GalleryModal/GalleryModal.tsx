import React from "react";
import Image from "next/image";
import Modal from "react-modal";
import Slider from "react-slick";
import Icon from "@components/Icons/Icons";
import { galleryObj } from "./constant";
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
      background: "#000",
      transform: "translate(-50%, -50%)",
    },
  };

  const settings = {
    className: "gallery-modal-slider",
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1.2,
          dots: false,
        },
      },
    ],
  };

  let slider: Slider | null;
  const onNextSlide = () => {
    slider?.slickNext();
  };

  const onPrevSlide = () => {
    slider?.slickPrev();
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
        <div className={styles.galleryModalSlider}>
          <div className={styles.galleryModalSliderWrapper}>
            <div className={styles.galleryModalSliderArrowLeft}>
              <Icon type="modal-arrow-left" />
            </div>
            <div className={styles.galleryModalSliderArrowRight}>
              <Icon type="modal-arrow-left" />
            </div>

            <Slider {...settings} ref={(C) => (slider = C)}>
              {galleryObj?.map((el, id) => (
                <Image
                  key={id}
                  src={el.image}
                  alt="gallery-img"
                  layout="responsive"
                  width={400}
                  height={600}
                  objectFit="cover"
                  objectPosition="center"
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryModal;
