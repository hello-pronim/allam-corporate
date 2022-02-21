import React from "react";
import Image from "next/image";
import { Button } from "@components/Common/Common";
import styles from "./EasyBuyPurchase.module.scss";

export interface IEasyBuyPurchaseProps {
  data?: any
}

const EasyBuyPurchase = ({ data }: IEasyBuyPurchaseProps) => {
  const entry = data?.easyBuyFeature?.[0];
  
  return entry && (
    <div className={styles.easyBuyPurchase}>
      <div className={styles.easyBuyPurchaseContent}>
        {entry.heading ? <h2>{entry.heading}</h2> : ""}
        {entry.description ? <div dangerouslySetInnerHTML={{ __html: entry.description }}></div> : ""}
      </div>

      <div className={styles.easyBuyPurchaseLogo}>
        {entry.cta?.[0] ?
          <div className={styles.easyBuyPurchaseLogoButton}>
            <Button color="light" href={`/${entry.cta?.[0]?.hyperlink?.[0]?.slug}`} rounded>
              {entry.cta?.[0]?.label}
            </Button>
          </div>
          : ""}
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
