import React, { useState } from "react";
import classnames from "classnames/bind";

import { Asset, CraftImage } from "@models";
import Icon from "@components/Icons/Icons";
import { ImageButton } from "@components/Common/Common";
import MasterPlanModal from "@components/MasterPlanModal/MasterPlanModal";
import styles from "./MasterPlan.module.scss";

export interface IMasterPlanProps {
  masterPlanImage: CraftImage;
  masterplanDownload: Asset;
}

const cx = classnames.bind(styles);

const MasterPlan = ({
  masterPlanImage,
  masterplanDownload,
}: IMasterPlanProps) => {
  const [isTouchPan, setTouchPan] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

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

              <div
                className={styles.masterPlanImageActionExpand}
                onClick={() => setModalOpen(true)}
              >
                <Icon type="expand" />
                <span>Expand</span>
              </div>
            </div>
          </div>

          {masterplanDownload && (
            <div className={styles.masterPlanCTA}>
              <ImageButton
                href={masterplanDownload.url}
                icon="download"
                label="Download Masterplan"
                chevron={true}
                labelSpacingLeft={8}
                labelSpacingRight={16}
              />
            </div>
          )}
        </div>
      </div>

      <MasterPlanModal
        image={masterPlanImage}
        isModalOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
};

export default MasterPlan;
