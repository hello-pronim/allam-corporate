import React from "react";
import Image from "next/image";
import { Redactor } from "@components/Common/Common";
import SocialShareIcons from "@components/SocialShareIcons/SocialShareIcons";
import FAQ from "@sections/FAQ/FAQ";

import styles from "./DetailContent.module.scss";

export interface DetailContentProps {
  data: any;
  faqs?: Array<any>;
}

const DetailContent = ({ data, faqs }: DetailContentProps) => {
  return (
    <div className={styles.detailPanel}>
      <div className={styles.detailPanelWrapper}>
        <div className={styles.detailHeaderWrapper}>
          {data.images?.map((image: string) => (
            <Image
              key={image}
              src={image}
              alt="news detail image"
              width={600}
              height={400}
            />
          ))}
        </div>
        <div className={styles.detailBodyWrapper}>
          <div className={styles.socialShareWrapper}>
            <SocialShareIcons
              title="Share"
              size="small"
              data={data.socials}
              direction="vertical"
            />
          </div>
          <div className={styles.detailContentWrapper}>
            <Redactor>{data.content}</Redactor>
          </div>
        </div>
        <div className={styles.detailFooterWrapper}>
          <div className={styles.detailImages}>
            {data.images?.map((image: string) => (
              <Image
                key={image}
                src={image}
                alt="news detail image"
                width={600}
                height={400}
              />
            ))}
          </div>
          {faqs && (
            <div className={styles.faqPanel}>
              <hr className={styles.divider}></hr>
              <div className={styles.faqPanelWrapper}>
                <FAQ data={faqs} title="Other articles" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
