import React, { useEffect, useState } from "react";
import Icon from "@components/Icons/Icons";

import styles from "./Collapse.module.scss";

export interface ICollapseProps {
  className?: string;
  key: any;
  activeKey?: any;
  title: string;
  subTitle1?: string;
  subTitle2?: string;
  onClick?: (id: number) => void;
  accordion?: boolean;
  children?: React.ReactNode;
}

const Collapse = ({
  className,
  key,
  activeKey,
  title,
  subTitle1 = "", // above the main title
  subTitle2 = "", // below the main title
  onClick,
  accordion = false,
  children,
}: ICollapseProps) => {
  const [isCollapseOpened, setCollapseOpened] = useState(false);
  const [collapseStatus, setCollapseStatus] = useState(false); // false: collapse should be close

  useEffect(() => {
    setCollapseStatus(
      (accordion && activeKey && activeKey == key && isCollapseOpened) ||
        (!accordion && isCollapseOpened)
    );
  }, [activeKey, key, accordion, isCollapseOpened]);

  const onCollapseClicked = (id: number) => {
    setCollapseOpened(!isCollapseOpened);
    if (onClick && accordion) onClick(id);
  };

  return (
    <article
      className={`${styles.collapse} ${className ?? ""}`}
      onClick={() => onCollapseClicked(key)}
    >
      <header className={styles.collapseHeader}>
        <p className={styles.collapseHeaderSubTitle1}>{subTitle1}</p>
        <div className={styles.collapseHeaderMainTitle}>
          <h4 className={styles.collapseTitle}>{title}</h4>
          <div
            className={`${styles.collapseOpenIcon} ${
              collapseStatus ? styles.open : ""
            }`}
          >
            <Icon type="chevron-right" />
          </div>
        </div>
        <p className={styles.collapseHeaderSubTitle2}>{subTitle2}</p>
      </header>
      {collapseStatus && <div className={styles.collapseBody}>{children}</div>}
    </article>
  );
};

export default Collapse;
