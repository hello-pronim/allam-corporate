import React, { useEffect, useState, ReactNode } from "react";
import styles from "./PostSlider.module.scss";
import { css } from "@styled-system/css";
import rem from "src/utils/pxRem";
import classNames from "classnames";
import Slider from "react-slick";
import Icon from "@components/Icons/Icons";

export interface CardProps {
  featured?: boolean;
  title: string;
  subtitle?: string;
  year: number;
  background?: string;
  textColor?: "grey" | "white";
  index?: number;
}

export interface TimelineProps {
  padding?: number | number[];
  children: ReactNode;
}

const Timeline = ({ children, padding = [] }: TimelineProps) => {
  const slider = React.useRef<Slider>(null);
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

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

    beforeChange: (current: number, next: number) => {
      setCurrent(next);
    },
  };

  useEffect(() => {
    //@ts-ignore
    setSlideCount(slider.current && slider.current.innerSlider.state.slideCount - slider.current.props.slidesToShow);
  }, []);

  var scrollCompletion = (current / slideCount) * 100;

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
      {/* <div className={styles.progressBar}>
        <span
          className={styles.progressInner}
          css={css({ width: `${scrollCompletion}%` })}
        ></span>
      </div> */}
      <div className={styles.arrowWrapper}>
        <Icon type="arrow-left" onClick={() => gotoPrev()} />
        <Icon type="arrow-right" onClick={() => gotoNext()} />
      </div>
    </div>
  );
};

export default Timeline;
