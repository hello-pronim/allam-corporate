import React, { ReactNode } from "react";
import Slider from "react-slick";
import SliderArrow from "./SliderArrow";
import styles from "./LatestSlider.module.scss";

export interface ILatestSliderProps {
  children: ReactNode;
}

const LatestSlider = ({ children }: ILatestSliderProps) => {
  const slider = React.useRef<Slider>(null);

  const settings = {
    className: "latest-slider",
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
          slidesToShow: 2.5,
          dots: false,
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
    <div className={styles.latestSlider}>
      <div className={styles.latestSliderContainer}>
        <div className={styles.latestSliderWrapper}>
          <Slider {...settings} ref={slider}>
            {children}
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

export default LatestSlider;
