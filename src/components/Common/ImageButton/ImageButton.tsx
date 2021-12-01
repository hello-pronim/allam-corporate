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
  chevron?: boolean;
  variant?: string;
  labelSpacingLeft?: number;
  labelSpacingRight?: number;
  onClick?: () => void;
}

const ImageButton = ({
  href,
  icon,
  className = "",
  count,
  label,
  homepageFilter = false,
  chevron = false,
  labelSpacingLeft = 0,
  labelSpacingRight = 0,
  variant = "grey",
  onClick,
  ...props
}: IImageButtonProps) => {
  let filterClassName = homepageFilter ? styles.homeFilterButton : "";
  let fontWeightClass = count ? "" : styles.weightBold;
  let buttonPrimaryClass = variant === "primary" ? styles.primary : styles.grey;

  if (!href) {
    return (
      <button
        className={`${styles.imageButton} ${buttonPrimaryClass} ${className} ${filterClassName} ${fontWeightClass}`}
        onClick={onClick}
        {...props}
      >
        <div className={styles.imageButtonContent}>
          <div className={styles.imageButtonIcon}>
            <Icon type={icon} />
          </div>
          <span
            style={{
              marginLeft: labelSpacingLeft,
              marginRight: labelSpacingRight,
            }}
          >
            <b>{count}</b>
            {label}
          </span>
        </div>
        {chevron && <Icon type="chevron-right" />}
      </button>
    );
  }

  const external = href.indexOf("https://") > -1;
  if (external) {
    return (
      <ExternalLink href={href}>
        <button
          className={`${styles.imageButton}  ${buttonPrimaryClass} ${className} ${filterClassName} ${fontWeightClass}`}
          {...props}
        >
          <div className={styles.imageButtonContent}>
            <div className={styles.imageButtonIcon}>
              <Icon type={icon} />
            </div>
            <span
              style={{
                marginLeft: labelSpacingLeft,
                marginRight: labelSpacingRight,
              }}
            >
              {label}
            </span>
          </div>
          {chevron && <Icon type="chevron-right" />}
        </button>
      </ExternalLink>
    );
  }

  return (
    <Link {...{ href }} prefetch={false}>
      <button
        className={`${styles.imageButton} ${buttonPrimaryClass} ${className} ${filterClassName} ${fontWeightClass}`}
        {...props}
      >
        <div className={styles.imageButtonContent}>
          <div className={styles.imageButtonIcon}>
            <Icon type={icon} />
          </div>
          <span
            style={{
              marginLeft: labelSpacingLeft,
              marginRight: labelSpacingRight,
            }}
          >
            {label}
          </span>
        </div>
        {chevron && <Icon type="chevron-right" />}
      </button>
    </Link>
  );
};

export default ImageButton;
