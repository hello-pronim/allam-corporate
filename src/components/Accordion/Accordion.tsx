import React, { useEffect, useState } from "react";
import Collapse from "@components/Collapse/Collapse";
import { Redactor } from "@components/Common/Common";

import styles from "./Accordion.module.scss";

export interface IAccordionProps {
  className?: string;
  defaultKey?: any;
  data: Array<{
    key: number;
    title: string;
    content: string;
    subTitle1?: string; // above the main title
    subTitle2?: string; // below the main title
  }>;
  onClick?: (id: number) => void;
  accordion?: boolean;
}

const Accordion = ({
  className,
  defaultKey,
  data,
  accordion = false,
}: IAccordionProps) => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    if (defaultKey) setActiveKey(defaultKey);
  }, [defaultKey]);

  const onCollapseClicked = (selectedKey: any) => {
    setActiveKey(selectedKey);
  };

  return (
    <div className={`${styles.accordion} ${className ?? ""}`}>
      {data.map(({ key, title, subTitle1, subTitle2, content }) => (
        <Collapse
          key={key}
          activeKey={activeKey}
          title={title}
          subTitle1={subTitle1}
          subTitle2={subTitle2}
          onClick={onCollapseClicked}
          accordion={accordion}
        >
          <Redactor>{content}</Redactor>
        </Collapse>
      ))}
    </div>
  );
};

export default Accordion;
