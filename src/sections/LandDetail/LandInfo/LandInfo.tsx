import React from "react";
import { Redactor } from "@components/Common/Common";
import { Button, ImageButton } from "@components/Common/Common";
import PromoCard from "@components/PromoCard/PromoCard";
import styles from "./LandInfo.module.scss";

export interface ILandInfoProps {
  introBlurb?: string;
  estateInfo?: any;
  offer?: any;
}

const LandInfo = ({ introBlurb, estateInfo, offer }: ILandInfoProps) => {
  return (
    <div className={styles.landInfo}>
      <div className={styles.landInfoWrapper}>
        <div className={styles.landInfoContainer}>
          <div className={styles.landInfoContent}>
            <div className={styles.landInfoContentIntro}>
              <Redactor>{introBlurb ?? ""}</Redactor>
            </div>
            <ImageButton
              href="#"
              variant="primary"
              icon="download-white"
              label="Download Brochure"
              chevron={true}
              labelSpacingLeft={8}
              labelSpacingRight={16}
            />
          </div>
          <div className={styles.landInfoContact}>
            <div className={styles.landInfoContactCard}>
              <div className={styles.landInfoContactCardTop}>
                <p>
                  <strong>Estate</strong>
                </p>
                <span>{estateInfo?.salesCentre?.[0]?.title}</span>
              </div>
              <div>
                <p>
                  <strong>Contact us</strong>
                </p>
                <span>{estateInfo?.salesCentre?.[0]?.phoneNumber}</span>
              </div>
            </div>

            <div className={styles.landInfoContactOffer}>
              <PromoCard
                offer={offer}
                action={
                  <Button color="light" rounded href="/get-in-touch">
                    Contact an Agent today!
                  </Button>
                }
                variant="side"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandInfo;
