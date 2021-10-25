import classNames from "classnames";
import React from "react";
import styles from "./PostSlider.module.scss";

export interface ArrowProps {
  onClick: React.MouseEventHandler;
  right?: boolean;
}

const SliderArrow = ({ onClick, right = false }: ArrowProps) => {
  return (
    <div
      className={classNames(styles.SliderArrow, right && styles.RightArrow)}
      onClick={onClick}
    >
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M66.6665 40L13.3332 40"
          stroke="#171717"
          strokeWidth="2"
          stroke-Linecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.3335 60L13.3335 40L33.3335 20"
          stroke="#171717"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SliderArrow;
