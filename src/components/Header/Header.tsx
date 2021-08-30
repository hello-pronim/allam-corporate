import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames/bind";
import HamburgerIcon from "@components/HamburgerIcon/HamburgerIcon";
import MobileMenu from "@components/MobileMenu/MobileMenu";
import styles from "./Header.module.scss";

export interface IHeaderProps {}

const Header = ({ ...props }: IHeaderProps) => {
  const cx = classnames.bind(styles);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.navBrand}>
          <Link href="/">
            <a>
              <Image
                src={"/static/logo.svg"}
                alt="logo"
                layout="intrinsic"
                width={285}
                height={88}
              />
            </a>
          </Link>
        </div>

        <div className={styles.navMenu}>
          <div
            className={cx("navMenuIcon", { navMenuIconOpen: showMobileMenu })}
          >
            <HamburgerIcon isOpen={showMobileMenu} onClick={toggleMenu} />
          </div>
        </div>
      </div>
      {showMobileMenu && <MobileMenu closeMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
