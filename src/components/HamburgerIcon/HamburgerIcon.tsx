import React from "react";
import styles from "./HamburgerIcon.module.scss";

export interface IHamburgerIconProps {
  isOpen: boolean;
  onClick?: () => void;
}

const HamburgerIcon = ({ isOpen, ...props }: IHamburgerIconProps) => (
  <div className={styles.hamburger} {...props}>
    <div
      className={`${styles.hamburgerIcon} ${
        isOpen ? styles.hamburgerIconOpen : ""
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default HamburgerIcon;
