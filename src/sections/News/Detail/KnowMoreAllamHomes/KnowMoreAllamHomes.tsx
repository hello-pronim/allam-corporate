import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Redactor } from "@components/Common/Common";
import styles from "./KnowMoreAllamHomes.module.scss";

type IKnowMoreAllamHomesProps = {
  data?: any;
};

const KnowMoreAllamHomes = ({ data }: IKnowMoreAllamHomesProps) => {
  return (
    <div className={styles.knowMore}>
      <div className={styles.knowMoreWrapper}>
        <div className={styles.knowMoreCard}>
          <div className={styles.knowMoreCardContent}>
            <div className={styles.knowMoreCardContentLeft}>
              <Redactor>{data?.headingRedactor}</Redactor>

              <div className={styles.knowMoreCardContentLeftDetail}>
                <Redactor>{data?.introBlurb}</Redactor>

                <ul>
                  <li>One move in date</li>
                  <li>All in under 3 months</li>
                </ul>
              </div>
            </div>
            <div className={styles.knowMoreCardContentRight}>
              <div className={styles.knowMoreCardContentRightImage}>
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

          <div className={styles.knowMoreCardCTA}>
            <Button
              color={data?.buttons?.[0]?.buttonType}
              href={data?.buttons?.[0]?.buttonLink}
              rounded
            >
              {data?.buttons?.[0]?.buttonLabel}
            </Button>

            <div className={styles.knowMoreCardCTAProcess}>
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

export default KnowMoreAllamHomes;
