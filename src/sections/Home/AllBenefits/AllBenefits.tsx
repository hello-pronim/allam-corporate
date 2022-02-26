import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Redactor } from "@components/Common/Common";
import styles from "./AllBenefits.module.scss";

type IAllBenefitsProps = {
  data?: any;
};

const AllBenefits = ({ data }: IAllBenefitsProps) => {
  return (
    <div className={styles.allBenefits}>
      <div className={styles.allBenefitsWrapper}>
        <div className={styles.allBenefitsCard}>
          <div className={styles.allBenefitsCardContent}>
            <div className={styles.allBenefitsCardContentLeft}>
              <Redactor>{data?.headingRedactor}</Redactor>

              <div className={styles.allBenefitsCardContentLeftDetail}>
                <Redactor>{data?.introBlurb}</Redactor>
                <ul>
                  {data?.easyBuyShortFacts?.map(
                    (item: { col1: string }, index: number) => (
                      <li key={index}>{item.col1}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className={styles.allBenefitsCardContentRight}>
              <div className={styles.allBenefitsCardContentRightImage}>
                <Image
                  src={"/assets/images/img-easyBuy-seal-waxMain.png"}
                  alt="easy-buy-mark"
                  width={192}
                  height={190}
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          <div className={styles.allBenefitsCardCTA}>
            <Button
              color={data?.buttons?.[0]?.buttonType}
              href={data?.buttons?.[0]?.buttonLink}
              rounded
            >
              {data?.buttons?.[0]?.buttonLabel}
            </Button>

            <div className={styles.allBenefitsCardCTAProcess}>
              {data?.cta?.[0]?.hyperlink && (
                <Link href={`/${data?.cta?.[0]?.hyperlink?.[0]?.slug}`}>
                  <a>{data?.cta?.[0]?.label}</a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBenefits;
