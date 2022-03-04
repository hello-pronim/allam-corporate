import React from "react";
import Accordion from "@components/Accordion/Accordion";

import styles from "./FAQ.module.scss";
import { NewsModel } from "@models";

export interface IFAQProps {
  className?: string;
  title: string;
  data: NewsModel[];
  accordion?: boolean;
}

const FAQ = ({ className, title, data, accordion = false }: IFAQProps) => (
  <div className={`${styles.faqContainer} ${className ?? ""}`}>
    <h4 className={styles.faqTitle}>{title}</h4>
    <div className={styles.faqsWrapper}>
      <Accordion
        data={data.map((item: NewsModel) => ({
          key: item.title,
          title: item.title,
          content: item.shortDescription,
        }))}
        accordion={accordion}
      />
    </div>
  </div>
);

export default FAQ;
