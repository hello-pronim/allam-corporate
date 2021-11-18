import React from "react";

import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  className?: string;
  name?: string;
  text?: string;
  onChange?: () => void;
}

const Checkbox = ({ className, name, text, onChange }: CheckboxProps) => {
  return (
    <label className={`${styles.checkbox} ${className}`}>
      <input type="checkbox" name={name} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
