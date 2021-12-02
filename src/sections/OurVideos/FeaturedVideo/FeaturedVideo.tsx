import React from "react";
import css from "@styled-system/css";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Button } from "@components/Common/Common";
import styles from "./FeaturedVideo.module.scss";

export interface featuredPostProps {
  content: {
    imageUrl: string;
    categories: Array<string>;
    estate: string;
    title: string;
    buttonLink: string;
    date: string;
  };
}

const FeaturedVideo = ({ content }: featuredPostProps) => {
  const date = (date: string) => {
    const d = date && new Date(date);
    var options = { day: "numeric", month: "long", year: "numeric" };
    //@ts-ignore
    const writtenDate = d && d.toLocaleDateString("en-AU", options);
    return writtenDate;
  };

  return (
    <div className={styles.featuredVideo}>
      <div className={styles.featuredVideoWrapper}>
        <div className={styles.featuredVideoWrapperBreadcrumbs}>
          <BreadCrumb />
        </div>
        <h1>Videos</h1>
        <div className={styles.featuredVideoWrapperContent}>
          <div
            className={styles.featuredVideoWrapperContentImage}
            css={css({ backgroundImage: `url(${content.imageUrl})` })}
          />
          <div className={styles.featuredVideoWrapperContentDetails}>
            <h4>{content.title}</h4>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
