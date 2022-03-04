import React, { useEffect, useState } from "react";
import Collapse from "@components/Collapse/Collapse";
import { Redactor } from "@components/Common/Common";

import styles from "./Accordion.module.scss";

export interface IAccordionProps {
  className?: string;
  defaultKey?: any;
  data: Array<{
    key: string;
    title: string;
    content: string;
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
      {data.map(({ key, title, content }) => (
        <Collapse
          key={key}
          activeKey={activeKey}
          title={title}
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
