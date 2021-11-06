import React from "react";
import { Redactor } from "@components/Common/Common";
import styles from "./TextBlock.module.scss";

export interface TextBlockProps {
  data?: any;
}

const TextBlock = ({ data }: TextBlockProps) => {
  return (
    <div className={styles.textBlock}>
      <div className={styles.textBlockWrapper}>
        <div className={styles.textBlockContent}>
          {<h2>{data?.heading}</h2>}
          <Redactor>{data?.description ?? ""}</Redactor>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
