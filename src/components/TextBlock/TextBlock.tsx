import React from "react";
import styles from "./TextBlock.module.scss";
import css from "@styled-system/css";
import classNames from "classnames";
import rem from "src/utils/pxRem";

export interface TextBlockProps {
  title?: string;
  paragraph?: string;
  alignment?: "left" | "center" | "right";
  background?: "angled-right" | "angled-left" | "default";
  padding?: number | number[];
}

const bgVariant = (type: string) => {
  const variant = new Map([
    ["default", styles.defaultBG],
    ["angled-right", styles.angledRightBG],
    ["angled-left", styles.angledLeftBG],
  ]);

  return variant.get(type);
};

const TextBlock = ({
  title,
  paragraph,
  alignment,
  background = "default",
  padding = [80, 160],
}: TextBlockProps) => {
  console.log(rem(padding));
  return (
    <div
      className={classNames(styles.TextBlock, bgVariant(background))}
      css={css({ textAlign: alignment, py: rem(padding)})}
    >
      {title && <h2>{title}</h2>}
      {paragraph && <p>{paragraph}</p>}
    </div>
  );
};

export default TextBlock;
