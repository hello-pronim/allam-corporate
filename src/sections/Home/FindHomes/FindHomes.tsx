import React from "react";
import { HomeLayoutModel } from "@models";
import { Button, Redactor } from "@components/Common/Common";
import styles from "./FindHomes.module.scss";

export interface IFindHomesProps {
  data?: HomeLayoutModel;
}

const FindHomes = ({ data }: IFindHomesProps) => {
  return (
    <div
      className={styles.findHomes}
      style={{
        backgroundImage: `url(${data?.backgroundImage?.[0]?.url})`,
      }}
    >
      <div className={styles.findHomesWrapper}>
        <div className={styles.findHomesContent}>
          <div
            className={styles.findHomesContentText}
            style={{
              color: `${data?.textcolor ? data.textcolor : "#fff"}`,
            }}
          >
            <h2 className="home">{data?.heading}</h2>
            <div className={styles.findHomesContentTextDescription}>
              <Redactor>{data?.description ?? ""}</Redactor>
            </div>
          </div>

          <Button
            color={data?.buttons?.[0]?.buttonType}
            href={data?.buttons?.[0]?.buttonLink}
            rounded
          >
            {data?.buttons?.[0]?.buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindHomes;
