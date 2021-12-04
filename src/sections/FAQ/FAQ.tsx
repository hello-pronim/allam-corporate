import React from "react";
import Accordion from "@components/Accordion/Accordion";

import styles from "./FAQ.module.scss";

type FAQItemProps = {
  id: number;
  title: string;
  content: string;
  date: string;
};
export interface IFAQProps {
  className?: string;
  title: string;
  data: Array<FAQItemProps>;
  accordion?: boolean;
}

const FAQ = ({ className, title, data, accordion = false }: IFAQProps) => (
  <div className={`${styles.faqContainer} ${className ?? ""}`}>
    <h4 className={styles.faqTitle}>{title}</h4>
    <div className={styles.faqsWrapper}>
      <Accordion
        data={data.map((item: FAQItemProps) => ({
          key: item.id,
          title: item.title,
          subTitle1: item.date,
          content: item.content,
        }))}
        accordion={accordion}
      />
    </div>
  </div>
);

export default FAQ;
