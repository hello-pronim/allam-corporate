import React from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { HomeModel } from "@models";
import Icon from "@components/Icons/Icons";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Button, ActionButton, ImageButton } from "@components/Common/Common";
import styles from "./Hero.module.scss";

type IHeroProps = {
  data: HomeModel;
};

const Hero = ({ data }: IHeroProps) => {
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroContentBack}>
            <ActionButton
              type="chevron-left"
              label="Back"
              onClick={() => router.back()}
            />
          </div>

          <div className={styles.heroContentText}>
            <div className={styles.heroContentTextSelling}>
              <Icon type="flag" />
              <p>
                <strong>{data?.sellingLabel}</strong>
              </p>
              {data?.completionDate && (
                <span className={styles.heroContentTextSellingDate}>
                  : Move In {dayjs(data.completionDate).format("MMM YYYY")}
                </span>
              )}
            </div>

            <h1 className="h2">{data?.title}</h1>

            <div className={styles.heroContentTextInfo}>
              <div className={styles.heroContentTextInfoTop}>
                <div className={styles.heroContentTextInfoDetail}>
                  <Icon type="bed" />
                  <span>{data.bedrooms}</span>
                </div>
                <div className={styles.heroContentTextInfoDetail}>
                  <Icon type="bath" />
                  <span>{data.bathrooms}</span>
                </div>
                <div className={styles.heroContentTextInfoDetail}>
                  <Icon type="car" />
                  <span>{data.car}</span>
                </div>
              </div>
              <div className={styles.heroContentTextInfoBottom}>
                <div className={styles.heroContentTextInfoDetail}>
                  <p>Build size</p>
                  <span>{data.buildingSize}sq</span>
                </div>
                <div className={styles.heroContentTextInfoDetail}>
                  <p>Land size </p>
                  <span>
                    {data?.landSize}m<sup>2</sup>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroContentBar}>
            {data.percentageComplete && (
              <>
                <div className={styles.heroContentBarInfo}>
                  <span className={styles.heroContentBarText}>
                    {data.percentageComplete}% Completed
                  </span>
                  {data.completionDate && (
                    <span className={styles.heroContentBarText}>
                      Move In {dayjs(data.completionDate).format("MMM YYYY")}
                    </span>
                  )}
                </div>
                <div className={styles.heroContentBarCompletion}>
                  <span
                    style={{
                      height: "100%",
                      width: `${data.percentageComplete}%`,
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <div className={styles.heroContentCTA}>
            <div className={styles.heroContentButtons}>
              <ImageButton
                href="#"
                icon="download-yellow"
                label={
                  data.openForInspection
                    ? "Book an inspection"
                    : "Click for price"
                }
                chevron={true}
                labelSpacingLeft={8}
                labelSpacingRight={16}
              />
              <Button href="/get-in-touch" rounded>
                Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
