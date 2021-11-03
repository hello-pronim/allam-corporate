import React from "react";
import Image from "next/image";
import { Button, Redactor } from "@components/Common/Common";
import { HomeLayoutModel } from "@models";
import styles from "./Monterey.module.scss";

export interface IMontereyProps {
  data?: HomeLayoutModel;
}

const Monterey = ({ data }: IMontereyProps) => {
  return (
    <div
      className={styles.monterey}
      style={{
        backgroundImage: `url(${data?.backgroundImage?.[0]?.url})`,
      }}
    >
      <div className={styles.montereyWrapper}>
        <div className={styles.montereyContent}>
          <div className={styles.montereyContentWrapper}>
            <div className={styles.montereyContentText}>
              <h2 className="home">{data?.heading}</h2>

              <div className={styles.montereyContentTextDescription}>
                <Redactor>{data?.description ?? ""}</Redactor>
              </div>

              {data?.icon?.[0]?.url && (
                <div className={styles.montereyContentLogo}>
                  <Image
                    src={data?.icon?.[0]?.url}
                    alt={data?.icon?.[0]?.title}
                    width={data?.icon?.[0]?.width}
                    height={data?.icon?.[0]?.height}
                    layout="responsive"
                  />
                </div>
              )}
            </div>

            {data?.buttons?.[0]?.buttonLink && (
              <Button
                color={data?.buttons?.[0]?.buttonType}
                href={data?.buttons?.[0]?.buttonLink}
                rounded
              >
                {data?.buttons?.[0]?.buttonLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monterey;
