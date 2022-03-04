import React, { useState } from "react";
import Image from "next/image";
import { CraftImage, InclusionModel } from "@models";
import PromoCard from "@components/PromoCard/PromoCard";
import { Button, ImageButton, Redactor } from "@components/Common/Common";
import styles from "./HomeInfo.module.scss";

export interface IHomeInfoProps {
  introBlurb?: string;
  estateInfo?: any;
  offer?: any;
  homeDesign: string;
  brochureUrl?: string | null;
  floorPlan?: CraftImage;
  featuresInclusion: InclusionModel;
  inclusionsBrochure?: InclusionModel;
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
  featuresInclusion,
}: IHomeInfoProps) => {
  const [isShowAll, setShowAll] = useState(false);
  const inclusionsBrochureUrl = featuresInclusion?.inclusionsBrochure[0]?.url;
  return (
    <div className={styles.homeInfo}>
      <div className={styles.homeInfoWrapper}>
        <div className={styles.homeInfoContainer}>
          <div className={styles.homeInfoContent}>
            <HomeInfoCard estateInfo={estateInfo} homeDesign={homeDesign} />

            <div className={styles.homeInfoContentIntro}>
              <Redactor>{introBlurb ?? ""}</Redactor>
            </div>

            {featuresInclusion && (
              <div className={styles.homeInfoContentInclusions}>
                <h5>Special Features/Inclusions</h5>
                <Redactor>
                  {featuresInclusion.featuredInclusions ?? ""}
                </Redactor>

                {featuresInclusion.fullInclusionTable.length ? (
                  <div className={styles.homeInfoContentInclusionsFull}>
                    {/* <p onClick={() => setShowAll(!isShowAll)}>
                      <u>View {isShowAll ? "less" : "more"}</u>
                    </p> */}

                    <div>
                      <h5>All Inclusions</h5>

                      <div className={styles.homeInfoContentInclusionsFullList}>
                        {featuresInclusion.fullInclusionTable.map(
                          (inclusion, index) => (
                            <div
                              key={index}
                              className={
                                styles.homeInfoContentInclusionsFullItem
                              }
                            >
                              <h5>{inclusion.inclusionCategory}</h5>
                              <ul>
                                {inclusion.inclusionList.map((el, id) => (
                                  <li key={id}>{el.inclusionName}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    {brochureUrl && (
                      <div className={styles.homeInfoContentBrochure}>
                        <a
                          target="_blank"
                          href={brochureUrl}
                          rel="noreferrer"
                          download
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
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            )}

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

            {/* {brochureUrl ? (
              <a target="_blank" href={brochureUrl} rel="noreferrer" download>
                <ImageButton
                  variant="primary"
                  icon="download-white"
                  label="Download Brochure"
                  chevron={true}
                  labelSpacingLeft={8}
                  labelSpacingRight={16}
                />
              </a>
            ) : null} */}
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
