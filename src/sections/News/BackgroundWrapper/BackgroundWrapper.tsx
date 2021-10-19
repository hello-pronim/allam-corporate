import React, {ReactNode} from "react";
import styles from "./BackgroundWrapper.module.scss";
import { Button } from "@components/Common/Common";
import css from "@styled-system/css";

export interface featuredPostProps {
  content: {
    imageUrl: string;
    categories: Array<string>;
    estate: string;
    title: string;
    buttonLink: string;
    date: string;
  };
}

const BackgroundWrapper = ({children}: { children: ReactNode }) => {

  return (
    <div className={styles.BackgroundWrapper}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
