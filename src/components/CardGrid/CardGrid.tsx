import React from "react";
import styles from "./CardGrid.module.scss";
import css from "@styled-system/css";

export interface CardGridProps {
  title?: string;
  children?: React.ReactNode;
  col?: Array<number>;
}

const CardGrid = ({ title, children, col = [1, 2, 3] }: CardGridProps) => {
  return (
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
        {children}
      </div>
    </div>
  );
};

export default CardGrid;
