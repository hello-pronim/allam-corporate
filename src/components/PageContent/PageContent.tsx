import React from "react";
import { Redactor } from "@components/Common/Common";
import styles from "./PageContent.module.scss";

interface IPageContentProps {
  content: string;
}

const PageContent = ({ content }: IPageContentProps) => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.pageContentWrapper}>
        <div className={styles.pageContentContainer}>
          <Redactor>{content}</Redactor>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
