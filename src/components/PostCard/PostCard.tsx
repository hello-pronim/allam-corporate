import React from "react";
import classnames from "classnames/bind";
import { NewsModel } from "@models";
import styles from "./PostCard.module.scss";

export interface PostCardProps {
  post: NewsModel;
  variant?: "normal" | "latest";
}

const cx = classnames.bind(styles);

const PostCard = ({ post, variant = "normal" }: PostCardProps) => {
  const formateDate = (date: string) => {
    const d = date && new Date(date);
    var options = { day: "numeric", month: "long", year: "numeric" };
    //@ts-ignore
    const writtenDate = d && d.toLocaleDateString("en-AU", options);
    return writtenDate;
  };

  return (
    <div
      className={cx("postCard", {
        postCardLatest: variant === "latest",
      })}
    >
      <div className={styles.postCardContent}>
        <div className={styles.postCardContentImageContainer}>
          <div
            className={styles.postCardContentImage}
            style={{ backgroundImage: `url(${post?.titleImage?.[0]?.url})` }}
          />
          <div className={styles.postCardContentTag}>
            <span>{post?.linkedEstates?.[0]?.title}</span>
          </div>
        </div>

        <div className={styles.postCardContentDetails}>
          <div className={styles.postCardContentDetailsInfo}>
            <span>{formateDate(post.publishDate)}</span>
            <span>{post.category}</span>
            <span>{post?.linkedEstates?.[0]?.title}</span>
          </div>

          <h5>{post.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
