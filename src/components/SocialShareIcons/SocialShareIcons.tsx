import React from "react";
import Link from "next/link";
import Icons from "@components/Icons/Icons";

import styles from "./SocialShareIcons.module.scss";

export interface ISocialShareIconsProps {
  className?: string;
  title: string;
  size?: "small" | "medium" | "large";
  data: Array<{ type: string; icon: string; url: string }>;
  direction?: "vertical" | "horizontal";
}

const SocialShareIcons = ({
  className,
  title = "Share",
  size = "medium",
  data,
  direction = "horizontal",
}: ISocialShareIconsProps) => {
  return (
    <div
      className={`${styles.shareIcons} ${
        direction == "horizontal"
          ? styles.horizontalShareIcons
          : styles.verticalShareIcons
      } ${className}`}
    >
      <div className={styles.shareIconsTitle}>{title}</div>
      <div className={styles.shareIconsWrapper}>
        <div className={styles.shareIconList}>
          {data.map((iconItem: any) => (
            <div key={iconItem.type} className={styles.shareIconItem}>
              <Link href={iconItem.url} passHref>
                <a>
                  <Icons type={iconItem.type} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialShareIcons;
