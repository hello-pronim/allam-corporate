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

  const optionsUI = (
    options?.map((option, index) => {
      return <option key={index} value={option.value}>{option.text}</option>
    })
  )

  return (
    <select
      name={name}
      className={`${styles.dropdown} ${className}`}
      value={value ?? ""}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {optionsUI}
    </select>
  );
};

export default FormSelect;
