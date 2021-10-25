import React, { ReactNode } from "react";
import styles from "./PostSlider.module.scss";
import { css } from "@styled-system/css";
import rem from "src/utils/pxRem";
import Slider from "react-slick";
import SliderArrow from "./sliderArrow";

export interface PostSliderProps {
  padding?: number | number[];
  children: ReactNode;
}

const PostSlider = ({ children, padding = [] }: PostSliderProps) => {
  const slider = React.useRef<Slider>(null);

  const settings = {
    className: "post-slider",
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    draggable: true,
    touchThreshold: 1500,
    speed: 750,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };
  const gotoPrev = () => {
    slider.current !== null && slider.current.slickPrev();
  };

  return (
    <div className={styles.TimelineContainer} css={css({ py: rem(padding) })}>
      <div className={styles.TimelineWrapper}>
        <Slider {...settings} ref={slider}>
          {children}
        </Slider>
      </div>
      <div className={styles.arrowWrapper}>
        <SliderArrow onClick={() => gotoPrev()} />
        <SliderArrow onClick={() => gotoNext()} right />
      </div>
    </div>
  );
};

export default PostSlider;
