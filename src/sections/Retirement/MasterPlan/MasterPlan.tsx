import React from "react";
import Image from "next/image";
import css from "@styled-system/css";
import { ImageButton } from "@components/Common/Common";
import styles from "./MasterPlan.module.scss";

export interface IMasterPlanProps {
  data?: any;
}

const MasterPlan = ({ data }: IMasterPlanProps) => {
  return (
    <div className={styles.ContentWithImage}>
      <div className={styles.TopBlock}>
        <h2>{data?.heading}</h2>
      </div>
      <div className={styles.ImageWrapper}>
        <Image
          src="/assets/images/img-montery-masterplan.jpg"
          className={styles.ContentRightImage}
          alt="masterplan-img"
          width="866.5"
          height="748"
        />
      </div>
      <div className={styles.ContentLeft}>
        <ol>
          <li>Hilltop Parkland</li>
          <li>Men’s Shed &amp; Workshop*</li>
          <li>Community Clubhouse &amp; Pool*</li>
          <li>Bowling Green*</li>
          <li>BBQ Pavillion*</li>
          <li>Tennis Court*</li>
          <li>Parkland</li>
          <li>Community Garden</li>
          <li>Caravan &amp; Boat Parking</li>
        </ol>
      </div>

      <div className={styles.BottomBlock}>
        <ImageButton
          href={data?.cta?.[0]?.link}
          icon="download"
          label={data?.cta?.[0]?.label}
          chevron={true}
          labelSpacingLeft={8}
          labelSpacingRight={16}
          css={css({ backgroundColor: "#ffca00" })}
        />
      </div>
    </div>
  );
};

export default MasterPlan;
