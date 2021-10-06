import * as React from "react";
import Link from "next/link";
import ExternalLink from "@components/ExternalLink/ExternalLink";
import styles from "./Button.module.scss";

export interface IButtonProps {
  href?: string;
  color?: string;
  size?: "large" | "normal" | "small";
  className?: string;
  rounded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({
  href,
  color = "primary",
  className = "",
  size = "normal",
  rounded = false,
  onClick,
  children,
  ...props
}: IButtonProps) => {
  let themeName = styles.primary;
  if (color === "secondary") themeName = styles.secondary;
  else if (color === "dark") themeName = styles.dark;
  else if (color === "dark-secondary") themeName = styles.darkSecondary;
  else if (color === "light") themeName = styles.light;
  else if (color === "outline-light") themeName = styles.outlineLight;
  let roundedClass = rounded ? styles.rounded : "";
  let sizeClass =
    size === "small" ? styles.small : size === "large" ? styles.large : "";

  if (!href) {
    return (
      <button
        className={`${styles.button}${
          className ? ` ${className}` : ""
        } ${themeName} ${roundedClass} ${sizeClass}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  const external = href.indexOf("https://") > -1;
  if (external) {
    return (
      <ExternalLink href={href}>
        <button
          className={`${styles.button}${
            className ? ` ${className}` : ""
          } ${themeName} ${roundedClass} ${sizeClass}`}
          {...props}
        >
          {children}
        </button>
      </ExternalLink>
    );
  }

  return (
    <Link {...{ href }} prefetch={false}>
      <button
        className={`${styles.button}${
          className ? ` ${className}` : ""
        } ${themeName} ${roundedClass} ${sizeClass}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
