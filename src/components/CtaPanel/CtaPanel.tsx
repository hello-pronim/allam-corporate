import React from "react";
import Image from "next/image";
import styles from "./CtaPanel.module.scss";
import { Button } from "@components/Common/Common";

export interface RegisterPanelProps {}

const CtaPanel = ({}: RegisterPanelProps) => {
  return (
    <div className={styles.registerPanel}>
      <div className={styles.ModuleWrapper}>
        <div className={styles.ModuleLeft}>
          <h2>
            <span>Like to know more about Allam Homes?</span>
            <br /> Contact an Allam home specialist.
          </h2>
          <p>
            Our history spans 25 years and during that time we’ve helped
            thousands of customers find a new home, with homes and <br />{" "}
            estates spread across many of Sydney’s most popular areas.
          </p>
          <Button rounded={true} href="#" color="light">
            Contact an Agent
          </Button>
        </div>
        <div className={styles.ModuleRight}>
          <Image alt="" src="/assets/images/temp/wax-seal.png" height={316.2} width={320.88} />
        </div>
      </div>
    </div>
  );
};

export default CtaPanel;
