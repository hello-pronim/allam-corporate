import React from "react";

import styles from "./CheckboxButtons.module.scss";

export interface CheckboxButtonsProps {
  className?: string;
  name?: string;
  data: Array<{ value: string; text: string }>;
  onChange?: () => void;
}

const CheckboxButtons = ({
  className,
  name,
  data,
  onChange,
}: CheckboxButtonsProps) => {
  return (
    <div className={`${styles.checkboxButtonWrapper} ${className}`}>
      {data.map((checkboxOption: any) => (
        <label
          key={checkboxOption.value}
          className={`${styles.formControl} ${styles.checkboxButton}`}
        >
          <input type="checkbox" name={name} value={checkboxOption.value} />
          <span>{checkboxOption.text}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxButtons;
