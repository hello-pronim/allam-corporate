import React from "react";
import CardGrid from "@components/CardGrid/CardGrid";
import MinimalCard from "@components/MinimalCard/MinimalCard";
import { Button } from "@components/Common/Common";
import styles from "./News.module.scss";

export interface INewsProps {}

const News = ({}: INewsProps) => {
  return (
    <div className={styles.news}>
      <div className={styles.newsCards}>
        <CardGrid title="News and Events" col={[1, 2]}>
          <MinimalCard />
          <MinimalCard />
        </CardGrid>
      </div>

      <div className={styles.newsWrapper}>
        <div className={styles.newsCTA}>
          <Button color="dark-secondary" size="large" rounded>
            View more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
