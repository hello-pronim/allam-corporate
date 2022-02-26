import React from "react";
import { OfferModel } from "@models";
import { Button } from "@components/Common/Common";
import PromoCard from "@components/PromoCard/PromoCard";
import styles from "./PromotionSection.module.scss";

export interface IPromotionSectionProps {
  offer: OfferModel;
}

const PromotionSection = ({ offer }: IPromotionSectionProps) => {
  return (
    <div className={styles.easyBuy}>
      <div className={styles.easyBuyWrapper}>
        <div className={styles.easyBuyInner}>
          <PromoCard
            offer={offer}
            background={offer?.titleImage?.[0].url ?? ""}
            action={
              <Button color="light" rounded>
                Contact an Agent today!
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
