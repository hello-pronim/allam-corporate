import React from "react";
import { Button } from "@components/Common/Common";
import styles from "./EstateStickyBar.module.scss";

export interface IEstateStickyBarProps {
  title: string;
  suburb?: string;
}

const EstateStickyBar = ({ title, suburb }: IEstateStickyBarProps) => {
  return (
    <div className={styles.stickyBar}>
      <div className={styles.stickyBarWrapper}>
        <div className={styles.stickyBarContainer}>
          <div className={styles.stickyBarInfo}>
            <h3>{title}</h3>
            <h5>{suburb}</h5>
          </div>
          <div className={styles.stickyBarCTA}>
            <Button color="dark-secondary" rounded>
              Contact Agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateStickyBar;
