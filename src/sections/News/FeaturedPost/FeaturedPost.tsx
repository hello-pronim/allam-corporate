import React from "react";
import styles from "./FeaturedPost.module.scss";
import { Button } from "@components/Common/Common";
import css from "@styled-system/css";

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

const FeaturedPost = ({ content }: featuredPostProps) => {

  const date = (date:string) => {
    const d= date && new Date(date);
    var options = { day: "numeric", month: "long", year: "numeric" };
    //@ts-ignore
    const writtenDate = d && d.toLocaleDateString("en-AU", options);
    return writtenDate;
  };

  return (
    <div className={styles.FeaturedPost}>
      <div className={styles.FeaturedPostWrapper}>
        <div className={styles.FeaturedPostWrapperBreadcrumbs}>
          Home / Promotions
        </div>
        <h1>News and Events</h1>
        <div className={styles.FeaturedPostWrapperContent}>
          <div className={styles.FeaturedPostWrapperContentImage} css={css({backgroundImage: `url(${content.imageUrl})`})} />
          <div className={styles.FeaturedPostWrapperContentDetails}>
            <span>{date(content.date)}</span>
            <div className={styles.FeaturedPostWrapperContentDetailsCategories}>{content.categories.map((category) => {return <span key={category}>{category}</span>})}</div>
            <span>{content.estate}</span>
          </div>
          <h4>{content.title}</h4>
          <Button rounded={true} href={content.buttonLink}>
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
