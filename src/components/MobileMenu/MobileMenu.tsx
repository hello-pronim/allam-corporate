import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import { NavItemModel } from "@models";
import Icon from "@components/Icons/Icons";
import MobileMenuItem from "@components/MobileMenuItem/MobileMenuItem";
import { statesAU } from "@libs/constants";
import styles from "./MobileMenu.module.scss";

export interface IMobileMenuProps {
  navItems: NavItemModel[];
  closeMenu: () => void;
}

const MobileMenu = ({ navItems, closeMenu, ...props }: IMobileMenuProps) => {
  const router = useRouter();
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [menuArray, setMenuArray] = useState<NavItemModel[]>([]);

  const cx = classNames.bind(styles);

  useEffect(() => {
    setMenuArray(navItems);
  }, [navItems]);

  const onRedirectLink = (link: any) => {
    closeMenu();
    router.push(link);
    scrollTop();
  };

  const scrollTop = () => {
    if (process.browser) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onShowSubMenu = (menuItem: any) => {
    if (!menuItem.subMenu) return;
    setIsSubMenu(true);
    setMenuArray(menuItem.subMenu);
  };

  const onBackToParent = () => {
    setIsSubMenu(false);
    setMenuArray(navItems);
  };

  return (
    <div className={styles.mobileMenu} {...props}>
      <div className={styles.mobileMenuWrapper}>
        {isSubMenu && (
          <div
            className={styles.mobileMenuBack}
            onClick={() => onBackToParent()}
          >
            <Icon type="arrow-left" />
            <p>Back</p>
          </div>
        )}
        <ul className={styles.mobileMenuList}>
          {menuArray?.map((el, id) => (
            <li key={id} className={styles.mobileMenuListItem}>
              <MobileMenuItem
                isSubMenu={isSubMenu}
                menuItem={el}
                onShowSubMenu={onShowSubMenu}
                onRedirectLink={onRedirectLink}
              />
            </li>
          ))}
        </ul>
        {/* <div className={styles.mobileMenuBuildSelect}>
          <span>Build in:</span>
          <ul className={styles.mobileMenuBuildSelectList}>
            {statesAU?.map((el, id) => (
              <li key={id} className={cx({ selected: id === 0 })}>
                {el.label}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default MobileMenu;
