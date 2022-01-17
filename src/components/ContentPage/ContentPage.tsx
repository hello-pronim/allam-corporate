import React from "react";
import { Redactor } from "@components/Common/Common";
import styles from "./ContentPage.module.scss";

interface IContentPageProps {
  content: string;
}

const ContentPage = ({ content }: IContentPageProps) => {
  return (
    <div className={styles.contentPage}>
      <div className={styles.contentPageWrapper}>
        <div className={styles.contentPageContainer}>
          <Redactor>{content}</Redactor>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
