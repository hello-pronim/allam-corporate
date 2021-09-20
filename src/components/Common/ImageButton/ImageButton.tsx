import * as React from "react";
import Link from "next/link";
import Icon from "@components/Icons/Icons";
import ExternalLink from "@components/ExternalLink/ExternalLink";
import styles from "./ImageButton.module.scss";

export interface IImageButtonProps {
  href?: string;
  icon: string;
  className?: string;
  label?: string;
  count?: number;
  homepageFilter?: boolean;
  onClick?: () => void;
}

const ImageButton = ({
  href,
  icon,
  className = "",
  count,
  label,
  homepageFilter = false,
  onClick,
  ...props
}: IImageButtonProps) => {
  let filterClassName = homepageFilter ? styles.homeFilterButton : "";
  let fontWeightClass = count ? "" : styles.weightBold;
  if (!href) {
    return (
      <button
        className={`${styles.imageButton} ${className} ${filterClassName} ${fontWeightClass}`}
        onClick={onClick}
        {...props}
      >
        <div className={styles.imageButtonIcon}>
          <Icon type={icon} />
        </div>
        <span>
          <b>{count}</b>
          {label}
        </span>
      </button>
    );
  }

  const external = href.indexOf("https://") > -1;
  if (external) {
    return (
      <ExternalLink href={href}>
        <button
          className={`${styles.imageButton} ${className} ${filterClassName} ${fontWeightClass}`}
          {...props}
        >
          <div className={styles.imageButtonIcon}>
            <Icon type={icon} />
          </div>
          {label}
        </button>
      </ExternalLink>
    );
  }

  return (
    <Link {...{ href }} prefetch={false}>
      <button
        className={`${styles.imageButton} ${className} ${filterClassName} ${fontWeightClass}`}
        {...props}
      >
        <div className={styles.imageButtonIcon}>
          <Icon type={icon} />
        </div>
        {label}
      </button>
    </Link>
  );
};

export default ImageButton;
