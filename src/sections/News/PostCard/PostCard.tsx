import React from "react";
import styles from "./PostCard.module.scss";
import { Button } from "@components/Common/Common";
import css from "@styled-system/css";

export interface PostCardProps {
  content: {
    imageUrl: string;
    categories: Array<string>;
    estate: string;
    title: string;
    buttonLink: string;
    date: string;
  };
}

const PostCard = ({ content }: PostCardProps) => {

  const date = (date:string) => {
    const d = date && new Date(date);
    var options = { day: "numeric", month: "long", year: "numeric" };
    //@ts-ignore
    const writtenDate = d && d.toLocaleDateString("en-AU", options);
    return writtenDate;
  };

  return (
    <div className={styles.PostCard}>
      <div className={styles.PostCardWrapper}>
        <div className={styles.PostCardWrapperContent}>
          <div className={styles.PostCardWrapperContentImage} css={css({backgroundImage: `url(${content.imageUrl})`})}/>
          <div className={styles.PostCardWrapperContentDetails}>
            <span>{date(content.date)}</span>
            <div className={styles.PostCardWrapperContentDetailsCategories}>{content.categories.map((category) => {return <span key={category}>{category}</span>})}</div>
            <span>{content.estate}</span>
          </div>
          <h5>{content.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
