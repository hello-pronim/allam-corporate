import React from "react";

import styles from "./Input.module.scss";

export interface InputProps {
  className?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

const Input = ({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
