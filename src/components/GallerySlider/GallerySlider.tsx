import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import ReactPlayer from "react-player";

import { CraftImage, VideoModel } from "@models";
import Icon from "@components/Icons/Icons";

import SliderArrow from "./SliderArrow";
import styles from "./GallerySlider.module.scss";

export interface IGallerySliderProps {
  videos?: VideoModel[];
  images: CraftImage[];
}

const GallerySlider = ({ videos, images }: IGallerySliderProps) => {
  const slider = React.useRef<Slider>(null);

  const settings = {
    className: "gallery-modal-slider",
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          dots: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 564,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          dots: false,
        },
      },
    ],
  };

  const gotoNext = () => {
    slider.current !== null && slider?.current.slickNext();
  };
  const gotoPrev = () => {
    slider.current !== null && slider?.current.slickPrev();
  };

  return (
    <div className={styles.gallerySlider}>
      <div className={styles.gallerySliderContainer}>
        <div className={styles.gallerySliderWrapper}>
          <Slider {...settings} ref={slider}>
            {videos?.map((video, id) => (
              <div className={styles.gallerySliderSingleVideo} key={id}>
                <ReactPlayer
                  controls
                  playing
                  playsInline
                  url={video.videoLink}
                  width="100%"
                  height="100%"
                  light={video.titleImage?.[0]?.url}
                  playIcon={
                    <div className={styles.gallerySliderSingleVideoIcon}>
                      <Icon type="video-play" />
                    </div>
                  }
                />
              </div>
            ))}
            {images?.map((image, id) => (
              <div className={styles.gallerySliderSingle} key={id}>
                <Image
                  src={image.url}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                  layout="responsive"
                />
                {/* <div
                  className={styles.gallerySliderSingleImage}
                  style={{ backgroundImage: `url(${image.url})` }}
                /> */}
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.arrowLeft}>
          <SliderArrow onClick={() => gotoPrev()} />
        </div>
        <div className={styles.arrowRight}>
          <SliderArrow onClick={() => gotoNext()} right />
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
