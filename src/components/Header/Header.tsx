import React, { useState, useEffect, useRef } from "react";
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
  const ref = useRef<HTMLHeadingElement>(null);
  const cx = classnames.bind(styles);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showGreedyMenu, setShowGreedyMenu] = useState(false);
  const [hiddenListCount, setHiddenListCount] = useState(0);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleGreedyMenu = () => {
    setShowGreedyMenu(!showGreedyMenu);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showGreedyMenu && ref.current && !ref.current.contains(e.target)) {
        setShowGreedyMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showGreedyMenu]);

  useEffect(() => {
    const navList = document.getElementById("nav-list");
    const hiddenList = document.getElementById("hidden-list");

    // Get instant state
    let totalSpace = 0;
    let navBreakWidths: any[] = [];
    if (!navList || !hiddenList) return;

    Object.values(navList?.children)?.forEach((child: any) => {
      totalSpace += child?.offsetWidth;
      navBreakWidths.push(totalSpace);
    });

    const checkNav = () => {
      let availableSpace = navList?.clientWidth - 10;
      let numOfVisibleItems = navList.childElementCount;
      let requiredSpace = navBreakWidths[numOfVisibleItems - 1];
      setHiddenListCount(hiddenList?.childElementCount);

      navBreakWidths[numOfVisibleItems - 1];
      // There is not enough space
      if (requiredSpace > availableSpace) {
        hiddenList.prepend(navList?.lastChild as Node);
        numOfVisibleItems -= 1;
        checkNav();
        // There is more than enough space
      } else if (availableSpace > navBreakWidths[numOfVisibleItems]) {
        navList.append(hiddenList?.firstChild as Node);
        numOfVisibleItems += 1;
        checkNav();
      }
    };

    const handleResize = () => {
      checkNav();
    };

    if (typeof window === `undefined`) return;

    window.addEventListener("visibilitychange", handleResize);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("visibilitychange", handleResize);
    };
  }, []);

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

              <div className="state-select">
                <Select options={stateAuObj} defaultValue={stateAuObj[0]} />
              </div>
              <span>(change)</span>
            </div>
          </div>
          <div className={styles.navMenuList}>
            <ul className={styles.navMenuListItems} id="nav-list">
              {menuObj?.slice(0, -1).map((el: any, id: number) => (
                <li key={id}>
                  <Link href={el.slug}>
                    <a>{el.title}</a>
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={cx("navMenuListGreedyIcon", {
                navMenuListGreedyIconOpen: showGreedyMenu,
              })}
              ref={ref}
              style={{
                visibility: `${hiddenListCount !== 0 ? "visible" : "hidden"}`,
                padding: `${hiddenListCount !== 0 ? "0 40px" : "0"}`,
                transition: "all 0.2s ease-in",
              }}
            >
              {hiddenListCount !== 0 && (
                <HamburgerIcon
                  isOpen={showGreedyMenu}
                  onClick={toggleGreedyMenu}
                />
              )}

              <div
                className={styles.navMenuListGreedyMenu}
                style={{
                  visibility: `${showGreedyMenu ? "visible" : "hidden"}`,
                  opacity: `${showGreedyMenu ? "1" : "0"}`,
                  transitionDelay: "0.2s",
                  transition: "all 0.3s cubic-bezier(1, 0.885, 0.72, 1)",
                }}
              >
                <ul id="hidden-list"></ul>
              </div>
            </div>
            <Button color="dark">Get in Touch</Button>
          </div>
        </div>
      </div>
      {showMobileMenu && <MobileMenu closeMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
