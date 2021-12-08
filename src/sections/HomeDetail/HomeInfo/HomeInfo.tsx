import React from "react";
import { Redactor } from "@components/Common/Common";
import { Button, ImageButton } from "@components/Common/Common";
import PromoCard from "@components/PromoCard/PromoCard";
import styles from "./HomeInfo.module.scss";

export interface IHomeInfoProps {
  introBlurb?: string;
  estateInfo?: any;
  offer?: any;
}

const HomeInfo = ({ introBlurb, estateInfo, offer }: IHomeInfoProps) => {
  return (
    <div className={styles.homeInfo}>
      <div className={styles.homeInfoWrapper}>
        <div className={styles.homeInfoContainer}>
          <div className={styles.homeInfoContent}>
            <div className={styles.homeInfoContentIntro}>
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
          <div className={styles.homeInfoContact}>
            <div className={styles.homeInfoContactCard}>
              <div className={styles.homeInfoContactCardTop}>
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

            <div className={styles.homeInfoContactOffer}>
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

export default HomeInfo;
