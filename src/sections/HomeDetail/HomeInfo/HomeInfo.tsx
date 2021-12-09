import React from "react";
import Image from "next/image";
import { CraftImage } from "@models";
import PromoCard from "@components/PromoCard/PromoCard";
import { Button, ImageButton, Redactor } from "@components/Common/Common";
import styles from "./HomeInfo.module.scss";

export interface IHomeInfoProps {
  introBlurb?: string;
  estateInfo?: any;
  offer?: any;
  homeDesign: string;
  brochureUrl?: string;
  floorPlan?: CraftImage;
}

const HomeInfoCard = ({
  estateInfo,
  homeDesign,
}: {
  estateInfo: any;
  homeDesign: string;
}) => {
  const location = estateInfo?.salesCentre?.[0];

  return (
    <div className={styles.homeInfoContactCard}>
      <div className={styles.homeInfoContactCardRow}>
        <p>
          <strong>Home Design</strong>
        </p>
        <span>{homeDesign}</span>
      </div>

      <div className={styles.homeInfoContactCardRow}>
        <p>
          <strong>Contact us</strong>
        </p>
        <span>{location?.phoneNumber}</span>
      </div>

      <div className={styles.homeInfoContactCardRow}>
        <p>
          <strong>{location?.officeName}</strong>
        </p>
        <div>
          <span>
            {`${location?.streetAddress},`}
            <br />
            {`${location?.suburb} ${location?.locationState} ${location?.postcode}`}
          </span>
          <span>
            <strong>{location?.daysOpen}</strong>
            {` ${location?.hoursOpen}`}
          </span>
        </div>
      </div>
    </div>
  );
};

const HomeInfo = ({
  introBlurb,
  estateInfo,
  offer,
  homeDesign,
  brochureUrl,
  floorPlan,
}: IHomeInfoProps) => {
  return (
    <div className={styles.homeInfo}>
      <div className={styles.homeInfoWrapper}>
        <div className={styles.homeInfoContainer}>
          <div className={styles.homeInfoContent}>
            <HomeInfoCard estateInfo={estateInfo} homeDesign={homeDesign} />

            <div className={styles.homeInfoContentIntro}>
              <Redactor>{introBlurb ?? ""}</Redactor>
            </div>

            <div className={styles.homeInfoContentFloorPlan}>
              {floorPlan?.url && (
                <Image
                  src={floorPlan?.url}
                  alt={floorPlan?.title}
                  width={floorPlan?.width}
                  height={floorPlan?.height}
                  layout="responsive"
                />
              )}
            </div>

            {brochureUrl && (
              <a
                target="_blank"
                download="test.pdf"
                href={brochureUrl}
                rel="noreferrer"
              >
                <ImageButton
                  variant="primary"
                  icon="download-white"
                  label="Download Brochure"
                  chevron={true}
                  labelSpacingLeft={8}
                  labelSpacingRight={16}
                />
              </a>
            )}
          </div>
          <div className={styles.homeInfoContact}>
            <HomeInfoCard estateInfo={estateInfo} homeDesign={homeDesign} />

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
