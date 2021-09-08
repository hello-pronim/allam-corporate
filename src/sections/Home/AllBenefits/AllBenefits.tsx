import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@components/Common/Common";
import styles from "./AllBenefits.module.scss";

export interface IAllBenefitsProps {}

const AllBenefits = ({}: IAllBenefitsProps) => {
  return (
    <div className={styles.allBenefits}>
      <div className={styles.allBenefitsWrapper}>
        <div className={styles.allBenefitsCard}>
          <div className={styles.allBenefitsCardContent}>
            <div className={styles.allBenefitsCardContentLeft}>
              <h2>
                <strong>Why choose Allam?</strong> <br /> Find out about our
                Easy Buy process.
              </h2>

              <div className={styles.allBenefitsCardContentLeftDetail}>
                <p>
                  Our history spans 25 years and during that time we’ve helped
                  thousands of customers find a new home, with homes and estates
                  spread across many of Sydney’s most popular areas.
                </p>

                <ul>
                  <li>One Price</li>
                  <li>One Contract</li>
                  <li>One move in date</li>
                  <li>All in under 3 months</li>
                </ul>
              </div>
            </div>
            <div className={styles.allBenefitsCardContentRight}>
              <div className={styles.allBenefitsCardContentRightImage}>
                <Image
                  src={"/assets/images/home/img-easyBuy-seal-waxMain.png"}
                  alt="easy-buy-mark"
                  width={192}
                  height={190}
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          <div className={styles.allBenefitsCardCTA}>
            <Button color="light" rounded>
              Contact an Agent
            </Button>
            <div className={styles.allBenefitsCardCTAProcess}>
              <Link href="/">
                <a>View our Process</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBenefits;
