import React from "react";
import styles from "./Header.module.scss";

export interface HeaderProps {}

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerWrapper}>
            <h1>Get in Touch</h1>
        </div>
    </div>
  );
};

export default Header;
