import React from "react";
import Image from "next/image";
import { Button } from "@components/Common/Common";
import styles from "./Monterey.module.scss";

export interface IMontereyProps {}

const Monterey = ({}: IMontereyProps) => {
  return (
    <div className={styles.monterey}>
      <div className={styles.montereyWrapper}>
        <div className={styles.montereyContent}>
          <div className={styles.montereyContentWrapper}>
            <div className={styles.montereyContentText}>
              <h2>
                An exceptional way of living for over 55s. — Coming mid 2021 —
              </h2>
              <p>
                Monterey is Land Lease living for like-minded people on the
                mid-north coast of NSW. Providing the ultimate community for
                active over 55s in a beautiful setting close to both the coast
                and hinterland, Monterey is proudly brought to you by Allam
                Property Group – successfully building homes since 1991.
              </p>

              <div className={styles.montereyContentLogo}>
                <Image
                  src={"/assets/icons/icon-monterey-logo.svg"}
                  alt="monterey-logo"
                  width={251}
                  height={164}
                  layout="responsive"
                />
              </div>
            </div>

            <Button rounded>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monterey;
