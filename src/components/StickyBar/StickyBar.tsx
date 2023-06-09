import React from "react";
import { Button } from "@components/Common/Common";
import styles from "./StickyBar.module.scss";

export interface IStickyBarProps {
  title: string;
  estateId?: string;
  crmId?: string;
}

const StickyBar = ({ title, estateId, crmId }: IStickyBarProps) => {
  return (
    <div className={styles.stickyBar}>
      <div className={styles.stickyBarWrapper}>
        <div className={styles.stickyBarContainer}>
          <h5>{title}</h5>
          <div className={styles.stickyBarCTA}>
            {/* <Button color="light" rounded>
              Download PDF
            </Button> */}
            <Button
              color="dark-secondary"
              href={`/get-in-touch${estateId ? "?estate=" + estateId : ""}${crmId ? "&crmId=" + crmId : ""}`}
              rounded
            >
              Contact Agent for price
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
