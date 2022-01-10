import React from "react";
import { NewsModel } from "@models";
import PostCard from "@components/PostCard/PostCard";
import CardGrid from "@components/CardGrid/CardGrid";
import styles from "./OldPosts.module.scss";

export interface IOldPostsProps {
  posts: NewsModel[];
}

const OldPosts = ({ posts }: IOldPostsProps) => {
  return (
    <div className={styles.oldPosts}>
      <CardGrid
        title="Older posts"
        col={[1, 2, 3]}
        colGap={40}
        rowGap={24}
        padding={[50, 80]}
        maxItems={9}
      >
        {posts.map((post, index) => (
          <PostCard post={post} variant="latest" key={index} />
        ))}
      </CardGrid>
    </div>
  );
};

export default OldPosts;
