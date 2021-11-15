import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { Redactor } from "@components/Common/Common";
import { AdvantageModel } from "@models";
import styles from "./AdvantagesList.module.scss";

export interface SingleAdvantageProps {
  data?: AdvantageModel;
}

export interface IAdvantagesListProps {
  list: AdvantageModel[];
}

const SingleAdvantage = ({ data }: SingleAdvantageProps) => {
  return (
    <div className={styles.singleAdv}>
      <div className={styles.singleAdvIcon}>
        {data?.icon?.[0].url && (
          <Image
            src={data?.icon?.[0].url}
            alt={data?.icon?.[0].title}
            width={data?.icon?.[0].width}
            height={56}
          />
        )}
        <h3>{data?.label}</h3>
        <Redactor>{data?.description ?? ""}</Redactor>
      </div>
    </div>
  );
};

const AdvantagesList = ({ list }: IAdvantagesListProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
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

  return (
    <div className={styles.advantagesList}>
      <div className={`${styles.advantagesListMobile} advantage-slider`}>
        <Slider {...settings}>
          {list?.map((el, id) => (
            <SingleAdvantage key={id} data={el} />
          ))}
        </Slider>

        <div className={styles.advantagesListMobileProgressbar}>
          <div
            className={styles.advantagesListMobileProgressbarFill}
            style={{
              width: `calc(100% * ${currentSlide / (list?.length + 1)})`,
            }}
          />
        </div>
      </div>
      <div className={styles.advantagesListDesktop}>
        {list?.map((el, id) => (
          <SingleAdvantage key={id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default AdvantagesList;
