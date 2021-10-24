import React, { useState } from "react";
import styles from "./CardGrid.module.scss";
import css from "@styled-system/css";
import { Button } from "@components/Common/Common";
import rem from "src/utils/pxRem";

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
  background?: string,
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
  background
}: CardGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const asArray = React.Children.toArray(children);
  const countChildren = asArray.length;
  const childGate = showAll ? asArray : asArray?.slice(0, maxItems);

  return (
    <>
      <div className={styles.CardGrid} css={css({ py: rem(padding), background: background && background })}>
        {title  && !smallTitle && <h2>{title}</h2>}
        {title  && smallTitle && <h4>{title}</h4>}
        <div
          className={styles.GridWrapper}
          css={css({
            gridTemplateColumns: [
              `repeat(${col[0]}, 1fr)`,
              `repeat(${col[1]}, 1fr)`,
              `repeat(${col[3]}, 1fr)`,
            ],
            columnGap: rem(colGap),
            rowGap: rem(rowGap),
          })}
        >
          {childGate.map((child) => (
            <>{child}</>
          ))}
        </div>
        {(countChildren > maxItems || button) && (
          <div className={styles.buttonRow}>
            {countChildren > maxItems && (
              <Button rounded={true} onClick={() => setShowAll(!showAll)}>
                {showAll
                  ? "Show less"
                  : `Show more (${asArray.length - maxItems})`}
              </Button>
            )}
            {button && (
              <Button color="dark-secondary" rounded={true} href={button.url}>
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
