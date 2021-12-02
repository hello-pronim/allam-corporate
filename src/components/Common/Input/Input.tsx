import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.scss";

type InputProps = {
  className?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  validation?: any;
  register: UseFormRegister<FieldValues>;
  onChange?: () => void;
};

const Input = ({
  className,
  type,
  name = "",
  placeholder,
  register,
  validation,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      {...register(name, validation)}
    />
  );
};

export default Input;
