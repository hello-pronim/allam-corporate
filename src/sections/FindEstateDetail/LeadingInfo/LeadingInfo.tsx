import React from "react";
import Link from "next/link";
import { Redactor } from "@components/Common/Common";
import styles from "./LeadingInfo.module.scss";

type ILeadingInfoProps = {
  introText: string;
};

const LeadingInfo = ({ introText }: ILeadingInfoProps) => {
  return (
    <div className={styles.leadingInfo}>
      <div className={styles.leadingInfoWrapper}>
        <div className={styles.leadingInfoLeft}>
          <Redactor>{introText ?? ""}</Redactor>
          {/* <h2>
            Ardennes has easy access to a wide range of existing facilities.
          </h2>

          <div className={styles.leadingInfoLeftContent}>
            <p>
              Located in the heart of Edmondson Park, Ardennes has easy access
              to a wide range of existing facilities including a local park with
              lots of recreational facilities. Within walking distance of the
              Edmondson Park Station and future town centre, this is one of the
              most sought-after neighbourhoods in the south-west.
            </p>
            <p>
              Nearby there’s a good range of shopping including Costco, the
              Village Square convenience centre, Carnes Hill Shopping Centre and
              a new neighbourhood centre....
            </p>

            <div className={styles.leadingInfoLeftContentMore}>
              <Link href="/">
                <a>View more</a>
              </Link>
            </div>
          </div> */}
        </div>

        <div className={styles.leadingInfoRight}>
          <div className={styles.leadingInfoRightPanel}>
            <div className={styles.leadingInfoRightPanelLocation}>
              <h3>Estate Location</h3>
              <p>
                Ardennes Avenue, <br />
                Edmondson Park NSW2174
              </p>
              <Link href="/">
                <a>Get Directions</a>
              </Link>
            </div>

            <div className={styles.leadingInfoRightPanelPrice}>
              <h3>Price Range</h3>
              <p>Homes: $1,019,000 — $1,439,000</p>
            </div>

            <div className={styles.leadingInfoRightPanelSales}>
              <h3>Sales Centre</h3>
              <p>
                Corner Ardennes Avenue
                <br /> and Moscow Road <br /> <b>Thurs to Mon</b> 10am - 5pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingInfo;
