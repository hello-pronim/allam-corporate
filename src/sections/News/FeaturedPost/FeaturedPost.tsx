import React from "react";
import { NewsModel } from "@models";
import { Button } from "@components/Common/Common";
import styles from "./FeaturedPost.module.scss";

export interface featuredPostProps {
  post: NewsModel;
}

const FeaturedPost = ({ post }: featuredPostProps) => {
  const formateDate = (date: string) => {
    const d = date && new Date(date);
    var options = { day: "numeric", month: "long", year: "numeric" };
    //@ts-ignore
    const writtenDate = d && d.toLocaleDateString("en-AU", options);
    return writtenDate;
  };

  return (
    <div className={styles.FeaturedPost}>
      <div className={styles.FeaturedPostWrapper}>
        <div className={styles.FeaturedPostBreadcrumbs}>Home / Promotions</div>
        <h1>News and Events</h1>
        <div className={styles.FeaturedPostContent}>
          <div className={styles.FeaturedPostContentImageContainer}>
            <div
              className={styles.FeaturedPostContentImage}
              style={{ backgroundImage: `url(${post?.titleImage?.[0]?.url})` }}
            />
            <div className={styles.FeaturedPostContentTag}>
              <span>{post?.linkedEstates?.[0]?.title}</span>
            </div>
          </div>

          <div className={styles.FeaturedPostContentDetails}>
            <div className={styles.FeaturedPostContentDetailsInfo}>
              <span>{formateDate(post.publishDate)}</span>
              <span>{post.category}</span>
              <span>{post?.linkedEstates?.[0]?.title}</span>
            </div>

            <h4>{post.title}</h4>
            <Button href={`/news/${post?.slug}`} size="small" rounded>
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
