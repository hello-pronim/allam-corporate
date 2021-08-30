import React from "react";
import classnames from "classnames/bind";
import styles from "./HamburgerIcon.module.scss";

export interface IHamburgerIconProps {
  isOpen: boolean;
  onClick?: () => void;
}

const cx = classnames.bind(styles);

const HamburgerIcon = ({ isOpen, ...props }: IHamburgerIconProps) => (
  <div className={styles.hamburger} {...props}>
    <div className={cx("hamburgerIcon", { hamburgerIconOpen: isOpen })}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default HamburgerIcon;
