import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames/bind";
import HamburgerIcon from "@components/HamburgerIcon/HamburgerIcon";
import { Button, Select } from "@components/Common/Common";
import MobileMenu from "@components/MobileMenu/MobileMenu";
import { menuObj, stateAuObj } from "@components/MobileMenu/constant";
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
                width={285}
                height={88}
              />
            </a>
          </Link>
        </div>

        <div className={styles.navMenu}>
          <div
            className={cx("navMenuMobileIcon", {
              navMenuMobileIconOpen: showMobileMenu,
            })}
          >
            <HamburgerIcon isOpen={showMobileMenu} onClick={toggleMenu} />
          </div>

          <div className={styles.navMenuTop}>
            <div className={styles.navMenuTopSelect}>
              <span>Build in:</span>
              {/* <select>
                <option value="A">NSW</option>
                <option value="B">VIC</option>
                <option value="C">QLD</option>
              </select> */}
              <div className="state-select">
                <Select options={stateAuObj} defaultValue={stateAuObj[0]} />
              </div>
              <span>(change)</span>
            </div>
          </div>
          <div className={styles.navMenuList}>
            <Button>Get in Touch</Button>
          </div>
        </div>
      </div>
      {showMobileMenu && <MobileMenu closeMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
