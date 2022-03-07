import React from "react";
import Link from "next/link";
import { NewsModel } from "@models";
import PostCard from "@components/PostCard/PostCard";
import CardGrid from "@components/CardGrid/CardGrid";
import styles from "./OldPosts.module.scss";

export interface IOldPostsProps {
  posts: NewsModel[];
}

const OldPosts = ({ posts }: IOldPostsProps) => {
  return posts.length > 0 ? (
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
          <Link key={index} href={`/news/${post.slug}`}>
            <a>
              <PostCard post={post} key={index} />
            </a>
          </Link>
        ))}
      </CardGrid>
    </div>
  ) : (
    <></>
  );
};

export default OldPosts;
