import React from "react";
import { Button, Redactor } from "@components/Common/Common";
import { PromotionLayout } from "@models";
import styles from "./Promotion.module.scss";

export interface IPromotionProps {
  data?: PromotionLayout;
}

const Promotion = ({ data }: IPromotionProps) => {
  return (
    <div className={styles.promotion}>
      <div className={styles.promotionLeft}>
        <Redactor>{data?.leftHeadingRedactor ?? ""}</Redactor>
        <h5>{data?.leftSubHeading}</h5>
        <Button
          color="dark-secondary"
          href={data?.leftLink?.[0]?.uri ?? "/"}
          rounded
        >
          View more
        </Button>
      </div>
      <div
        className={styles.promotionMid}
        style={{
          backgroundImage: `url(${data?.image?.[0]?.url ?? ""})`,
        }}
      />
      <div className={styles.promotionRight}>
        <h2 className="home">{data?.rightHeading}</h2>
        <h5>{data?.rightSubHeading}</h5>
        <Button
          color="dark-secondary"
          href={data?.rightLink?.[0]?.uri ?? "/"}
          rounded
        >
          View more
        </Button>
      </div>
    </div>
  );
};

export default Promotion;
