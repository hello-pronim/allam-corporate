import React from "react";
import Image from "next/image";
import { Button } from "@components/Common/Common";
import styles from "./EasyBuyPurchase.module.scss";

export interface IEasyBuyPurchaseProps {}

const EasyBuyPurchase = ({}: IEasyBuyPurchaseProps) => {
  return (
    <div className={styles.easyBuyPurchase}>
      <div className={styles.easyBuyPurchaseContent}>
        <h2>
          EasyBuy
          <br />
          Purchase
        </h2>
        <h3>
          Fixed price,
          <br /> no progress payments.
        </h3>
      </div>

      <div className={styles.easyBuyPurchaseLogo}>
        <div className={styles.easyBuyPurchaseLogoButton}>
          <Button color="light" rounded>
            Get in Touch
          </Button>
        </div>
        <div className={styles.easyBuyPurchaseLogoImage}>
          <Image
            src={"/assets/images/img-easyBuy-seal-waxMain.png"}
            alt="easy-buy-mark"
            width={192}
            height={190}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default EasyBuyPurchase;
