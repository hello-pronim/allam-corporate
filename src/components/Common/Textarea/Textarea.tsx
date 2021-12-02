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

const Textarea = ({ className, ...props }: any) => {
  return <textarea className={`${styles.textarea} ${className}`} {...props} />;
};

export default Textarea;
