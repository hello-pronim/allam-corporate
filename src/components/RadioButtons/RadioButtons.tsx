import React from "react";

import styles from "./RadioButtons.module.scss";

export interface RadioButtonsProps {
  className?: string;
  name?: string;
  data: Array<{ value: string; text: string }>;
}

const RadioButtons = ({ className, name, data }: RadioButtonsProps) => {
  return (
    <div className={`${styles.radioButtonWrapper} ${className}`}>
      {data.map((radioOption: any) => (
        <label key={radioOption.value} className={styles.radioButton}>
          <input type="radio" name={name} value={radioOption.value} />
          <span>{radioOption.text}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
