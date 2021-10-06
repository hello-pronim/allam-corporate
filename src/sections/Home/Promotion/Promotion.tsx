import React from "react";
import { Button } from "@components/Common/Common";
import styles from "./Promotion.module.scss";

export interface IPromotionProps {}

const Promotion = ({}: IPromotionProps) => {
  return (
    <div className={styles.promotion}>
      <div className={styles.promotionLeft}>
        <h2 className="home">WIN A NEW HOME Promotion extended</h2>
        <h5>Get the $15,000 HomeBuilder Grant*</h5>
        <Button color="dark-secondary" rounded>
          View more
        </Button>
      </div>
      <div className={styles.promotionMid} />
      <div className={styles.promotionRight}>
        <h2 className="home">Display Homes now open</h2>
        <h5>Explore our Trafalgar and Ardmore designs now on display.</h5>
        <Button color="dark-secondary" rounded>
          View more
        </Button>
      </div>
    </div>
  );
};

export default Promotion;
