import React from "react";

import styles from "./Textarea.module.scss";

export interface TextareaProps {
  className?: string;
  rows?: number;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

const Textarea = ({
  className,
  rows,
  name,
  placeholder,
  value,
  onChange,
}: TextareaProps) => {
  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      rows={rows}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
