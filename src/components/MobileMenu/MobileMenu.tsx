import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@components/Common/Common";
import MobileMenuItem from "@components/MobileMenuItem/MobileMenuItem";
import { menuObj } from "./constant";
import styles from "./MobileMenu.module.scss";

export interface IMobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu = ({ closeMenu, ...props }: IMobileMenuProps) => {
  const router = useRouter();
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [menuArray, setMenuArray] = useState(menuObj);

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
    setMenuArray(menuObj);
  };

  return (
    <div className={styles.mobileMenu} {...props}>
      <div className={styles.mobileMenuWrapper}>
        {isSubMenu && (
          <div
            className={styles.mobileMenuBack}
            onClick={() => onBackToParent()}
          >
            <Image
              src="/static/icons/icon-arrow-left.svg"
              alt="arrow-left"
              width={24}
              height={24}
            />
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
      </div>
    </div>
  );
};

export default MobileMenu;
