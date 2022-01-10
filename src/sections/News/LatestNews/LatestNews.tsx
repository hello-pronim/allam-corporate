import React from "react";
import { NewsModel } from "@models";
import PostCard from "@components/PostCard/PostCard";
import LatestSlider from "@components/LatestSlider/LatestSlider";
import styles from "./LatestNews.module.scss";

export interface ILatestNewsProps {
  news: NewsModel[];
}

const LatestNews = ({ news }: ILatestNewsProps) => {
  return (
    <div className={styles.latestNews}>
      <div className={styles.latestNewsWrapper}>
        <h2>Latest posts of the week</h2>
      </div>

      <LatestSlider>
        {news?.map((news, index) => (
          <PostCard post={news} variant="latest" key={index} />
        ))}
      </LatestSlider>
    </div>
  );
};

export default LatestNews;
