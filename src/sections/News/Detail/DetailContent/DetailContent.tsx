import React, { useEffect, useState } from "react";
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
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  useEffect(() => {
    getWindowDimensions();

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.detailPanel}>
      <div className={styles.detailPanelWrapper}>
        <div className={styles.detailHeaderWrapper}>
          {data.images?.slice(0, 2).map((image: string) => (
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
              direction={
                windowDimensions.width > 768 ? "vertical" : "horizontal"
              }
            />
          </div>
          <div className={styles.detailContentWrapper}>
            <Redactor>{data.content}</Redactor>
          </div>
        </div>
        <div className={styles.detailFooterWrapper}>
          <div className={styles.detailImages}>
            {data.images?.slice(0, 2).map((image: string) => (
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