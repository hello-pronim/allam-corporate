import React, { useState } from "react";
import rem from "src/utils/pxRem";
import css from "@styled-system/css";
import { Button } from "@components/Common/Common";
import styles from "./CardGrid.module.scss";

export interface CardGridProps {
  title?: string;
  children?: React.ReactNode;
  padding?: number | number[];
  maxItems?: number;
  col?: Array<number>;
  colGap?: number;
  rowGap?: number;
  button?: {
    label: string;
    url: string;
  };
  background?: string;
  smallTitle?: boolean;
}

const CardGrid = ({
  title,
  children,
  col = [1, 2, 3],
  button,
  padding = [],
  maxItems = 6,
  colGap = 18,
  rowGap = 18,
  smallTitle = false,
  background,
}: CardGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const asArray = React.Children.toArray(children);
  const countChildren = asArray.length;
  const childGate = showAll ? asArray : asArray?.slice(0, maxItems);

  return (
    <>
      <div
        className={styles.CardGrid}
        css={css({ py: rem(padding), background: background && background })}
      >
        {smallTitle ? <h4>{title}</h4> : <h2>{title}</h2>}
        <div
          className={styles.GridWrapper}
          css={css({
            gridTemplateColumns: [
              `repeat(${col[0]}, 1fr)`,
              `repeat(${col[1]}, 1fr)`,
              `repeat(${col[2]}, 1fr)`,
            ],
            columnGap: rem(colGap),
            rowGap: rem(rowGap),
          })}
        >
          {childGate.map((child, id) => (
            <div key={id} className={styles.CardGridChild}>
              {child}
            </div>
          ))}
        </div>
        {(countChildren > maxItems || button) && (
          <div className={styles.buttonRow}>
            {countChildren > maxItems && (
              <Button size="large" onClick={() => setShowAll(!showAll)} rounded>
                {showAll
                  ? "Show less"
                  : `Show more (${asArray.length - maxItems})`}
              </Button>
            )}
            {button && (
              <Button
                href={button.url}
                color="dark-secondary"
                size="large"
                rounded
              >
                {button.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CardGrid;
