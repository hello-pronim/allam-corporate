import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import { css } from "@styled-system/css";
import rem from "@utils/pxRem";
import Icon from "@components/Icons/Icons";
import { Redactor } from "@components/Common/Common";
import styles from "./Timeline.module.scss";

export interface CardProps {
  isImageBg?: boolean;
  featured?: boolean;
  title?: string;
  subtitle?: string;
  year?: number;
  background?: string;
  textColor?: "grey" | "white" | "";
  index?: number;
}

export interface TimelineProps {
  padding?: number | number[];
  cards?: any[];
}

var accent = (str: string) => {
  const word =
    str.includes("~") &&
    str.substring(str.indexOf("~") + 1, str.lastIndexOf("~"));

  const regex = word && new RegExp("~" + word + "~", "g");
  const newstr =
    regex !== false &&
    str.replace(regex, `<span class="word-accent-color">${word}</span>`);

  if (newstr === false) {
    return { __html: str };
  }
  return { __html: newstr };
};

const FeaturedCard = (card: CardProps) => {
  return (
    <div
      className={classNames(styles.card, styles.featured)}
      css={css({
        backgroundImage: `url(${card.background})`,
      })}
    >
      <h2>{card.title}</h2>
      <h5>{card.subtitle}</h5>
    </div>
  );
};

const Card = ({ isImageBg = false, ...card }: CardProps) => {
  return (
    <div
      id={card?.year?.toString()}
      className={classNames(
        styles.card,
        `${isImageBg ? styles.cardImage : ""}`
      )}
      style={{
        background: `${
          isImageBg ? `url(${card.background}) no-repeat` : card.background
        }`,
      }}
      css={css({
        h2: { color: card.textColor },
        p: {
          color: card.textColor,
        },
      })}
    >
      <p>{card.year}</p>
      <div className={styles.cardDescription}>
        <Redactor>{card.title ?? ""}</Redactor>
      </div>
    </div>
  );
};

const Timeline = ({ cards, padding = [] }: TimelineProps) => {
  const slider = React.useRef<Slider>(null);
  const [sliderWrapper, setSliderWrapper] = useState<HTMLElement | null>();
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    className: "timeline-slider",
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    touchThreshold: 1500,
    speed: 750,
    slidesToShow: 3,
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

  const cardEntries = cards?.map((card, index) => ({
    ...card,
    index: index,
  }));

  useEffect(() => {
    const getSlider = document.getElementById("timeline");
    setSliderWrapper(getSlider);
    //@ts-ignore
    setSlideCount(cards?.length);
  }, [cards]);

  var scrollCompletion = (current / slideCount) * 100;

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };
  const gotoPrev = () => {
    slider.current !== null && slider.current.slickPrev();
  };

  const scrollToSlide = (e: any) => {
    e.deltaX && e.preventDefault();
    if (e.deltaX > 0) {
      gotoNext();
    } else {
      gotoPrev();
    }
  };

  sliderWrapper ? (sliderWrapper.onwheel = scrollToSlide) : null;

  const seen = new Set();

  const firstOfYear = cardEntries?.filter((card) => {
    const duplicate = seen.has(card.year);
    seen.add(card.year);
    return !duplicate;
  });
  return (
    <div className={styles.TimelineContainer} css={css({ py: rem(padding) })}>
      <div
        id="timeline"
        className={styles.TimelineWrapper}
        onMouseEnter={() => sliderRef.current?.slickPlay()}
        onMouseLeave={() => sliderRef.current?.slickPause()}
      >
        <Slider {...settings} ref={slider}>
          {cardEntries?.map((card, id) => {
            return (
              <div key={id}>
                {card.featured ? FeaturedCard(card) : Card(card)}
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={styles.yearTabs}>
        {firstOfYear?.map((card, index) => {
          return (
            <React.Fragment key={card.year}>
              <button
                onClick={() =>
                  slider.current !== null &&
                  slider.current.slickGoTo(card.index)
                }
              >
                {card.year.split(" ")[0]}
              </button>
              {index !== firstOfYear?.length - 1 && (
                <span className={styles.yearDivider} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles.progressBar}>
        <span
          className={styles.progressInner}
          css={css({ width: `${scrollCompletion}%` })}
        ></span>
      </div>
      <div className={styles.arrowWrapper}>
        <Icon type="arrow-left" onClick={() => gotoPrev()} />
        <Icon type="arrow-right" onClick={() => gotoNext()} />
      </div>
    </div>
  );
};

export default Timeline;
