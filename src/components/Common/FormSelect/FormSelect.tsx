import React from "react";

import styles from "./FormSelect.module.scss";

export interface FormSelectOptionProps {
  value: string;
  text: string;
}

export interface FormSelectProps {
  className?: string;
  placeholder?: string;
  name?: string;
  options: Array<FormSelectOptionProps>;
  value?: string;
  onChange?: () => void;
}

const FormSelect = ({
  className,
  placeholder,
  name,
  options,
  value,
  onChange,
}: FormSelectProps) => {
  return (
    <select
      name={name}
      className={`${styles.dropdown} ${className}`}
      value={value ?? ""}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options?.map((option: FormSelectOptionProps) => {
        <option value={option.value}>{option.text}</option>;
      })}
    </select>
  );
};

export default FormSelect;
