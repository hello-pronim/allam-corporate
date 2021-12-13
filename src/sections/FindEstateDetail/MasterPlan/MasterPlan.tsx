import React, { useState } from "react";
import Image from "next/image";
import classnames from "classnames/bind";
import { CraftImage } from "@models";
import Icon from "@components/Icons/Icons";
import { ImageButton } from "@components/Common/Common";
import styles from "./MasterPlan.module.scss";

export interface IMasterPlanProps {
  masterPlanImage: CraftImage;
}

const cx = classnames.bind(styles);

const MasterPlan = ({ masterPlanImage }: IMasterPlanProps) => {
  const [isTouchPan, setTouchPan] = useState(false);

  return (
    <div className={styles.masterPlan}>
      <div className={styles.masterPlanWrapper}>
        <div className={styles.masterPlanContent}>
          <h2>Masterplan</h2>
          <div className={styles.masterPlanImage}>
            <div
              className={cx("masterPlanImageFull", {
                masterPlanImageFullTouch: isTouchPan,
              })}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={masterPlanImage.url} alt={masterPlanImage.title} />
            </div>

            <div className={styles.masterPlanImageAction}>
              <div
                className={styles.masterPlanImageActionButton}
                onClick={() => setTouchPan(!isTouchPan)}
              >
                <span>Click to pan</span>
                <Icon type="hand-gesture" />
              </div>
            </div>
          </div>

          <div className={styles.masterPlanCTA}>
            <ImageButton
              href="#"
              icon="download"
              label="Download Masterplan"
              chevron={true}
              labelSpacingLeft={8}
              labelSpacingRight={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPlan;
