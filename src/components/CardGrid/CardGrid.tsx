import React, {useState} from "react";
import styles from "./CardGrid.module.scss";
import css from "@styled-system/css";
import { Button } from "@components/Common/Common";

export interface CardGridProps {
  title?: string;
  children?: React.ReactNode;
  col?: Array<number>;
  button?: {
    label: string,
    url: string,
  }
}

const CardGrid = ({ title, children, col = [1, 2, 3], button}: CardGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const asArray = React.Children.toArray(children);
  const countChildren = asArray.length;
  const childGate = showAll ? asArray : asArray?.slice(0, 6);

  return (
    <>
      <div className={styles.CardGrid}>
        {title && <h2>{title}</h2>}
        <div
          className={styles.GridWrapper}
          css={css({
            gridTemplateColumns: [
              `repeat(${col[0]}, 1fr)`,
              `repeat(${col[1]}, 1fr)`,
              `repeat(${col[3]}, 1fr)`,
            ],
          })}
        >
          {childGate.map((child) => (
            <>{child}</>
          ))}
        </div>
        {(countChildren > 6 || button) && (
          <div className={styles.buttonRow}>
            {countChildren > 6 && <Button rounded={true} onClick={() => setShowAll(!showAll)}>{showAll
              ? "Show less"
              : `Show more (${asArray.length - 6})`}</Button>}
            {button && <Button color="dark-secondary" rounded={true} href={button.url}>{button.label}</Button>}
          </div>
        )}
      </div>
    </>
  );
};

export default CardGrid;
