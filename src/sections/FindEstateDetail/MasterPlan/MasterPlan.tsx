import React, { useState } from "react";
import classnames from "classnames/bind";
import { ImageButton } from "@components/Common/Common";
import Icon from "@components/Icons/Icons";
import styles from "./MasterPlan.module.scss";

export interface IMasterPlanProps {}

const cx = classnames.bind(styles);

const MasterPlan = ({}: IMasterPlanProps) => {
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
              <img
                src={"/assets/images/estate-detail/img-masterplan.jpg"}
                alt="masterplan"
              />
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
