import React from "react";
import Image from "next/image";
import styles from "./MobileMenuItem.module.scss";

export interface IMobileMenuItemProps {
  isSubMenu: boolean;
  menuItem: any;
  onShowSubMenu: (item: any) => void;
  onRedirectLink: (link: any) => void;
}

const MobileMenuItem = ({
  menuItem,
  isSubMenu,
  onShowSubMenu,
  onRedirectLink,
  ...props
}: IMobileMenuItemProps) => {
  const onClickMenuItem = (item: any) => {
    if (item.subMenu) {
      onShowSubMenu(item);
    } else {
      onRedirectLink(item.hyperlink?.[0].slug);
    }
  };

  return (
    <div className={styles.menuItem} onClick={() => onClickMenuItem(menuItem)}>
      <p>{menuItem.linkName}</p>
      {menuItem.subMenu && (
        <div className={styles.mobileMenuListItemIcon}>
          <Image
            src="/assets/icons/icon-chevron-right.svg"
            alt="chevron-right"
            width={7.5}
            height={15}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default MobileMenuItem;
