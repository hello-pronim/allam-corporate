import React from "react";
import { Redactor } from "@components/Common/Common";
import { ImageButton } from "@components/Common/Common";
import styles from "./LandInfo.module.scss";

export interface ILandInfoProps {
  introBlurb?: string;
}

const LandInfo = ({ introBlurb }: ILandInfoProps) => {
  return (
    <div className={styles.landInfo}>
      <div className={styles.landInfoWrapper}>
        <Redactor>{introBlurb ?? ""}</Redactor>
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
    </div>
  );
};

export default LandInfo;
