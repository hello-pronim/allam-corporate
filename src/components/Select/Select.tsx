import React from "react";

import styles from "./Select.module.scss";

export interface SelectOptionProps {
  value: string;
  text: string;
}

export interface SelectProps {
  className?: string;
  placeholder?: string;
  name?: string;
  options: Array<SelectOptionProps>;
  value?: string;
  onChange?: () => void;
}

const Select = ({
  className,
  placeholder,
  name,
  options,
  value,
  onChange,
}: SelectProps) => {
  return (
    <select
      name={name}
      className={`${styles.dropdown} ${className}`}
      value={value ?? ""}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options?.map((option: SelectOptionProps) => {
        <option value={option.value}>{option.text}</option>;
      })}
    </select>
  );
};

export default Select;
