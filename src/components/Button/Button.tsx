import React from "react";

import styles from "./Button.module.scss";

export enum buttonTypeEnum {
  "button" = "button",
  "submit" = "submit",
  "reset" = "reset",
}
export enum buttonColorEnum {
  "primary" = "primary",
  "secondary" = "secondary",
  "default" = "default",
}

export interface ButtonProps {
  className?: string;
  type: buttonTypeEnum;
  text: string;
  color?: buttonColorEnum;
  onClick?: () => void;
}

const Button = ({ className, type, text, color, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      color={color}
    >
      {text}
    </button>
  );
};

export default Button;
