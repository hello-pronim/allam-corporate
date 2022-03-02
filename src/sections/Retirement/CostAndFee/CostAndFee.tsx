import React from "react";
import Image from "next/image";
import css from "@styled-system/css";
import { ImageButton, Redactor } from "@components/Common/Common";
import styles from "./CostAndFee.module.scss";

export interface ICostAndFeeProps {
  data?: any;
}

const CostAndFee = ({ data }: ICostAndFeeProps) => {
  return (
    <div className={styles.costAndFee}>
      <div className={styles.ContentWithImage}>
        <div className={styles.ContentLeft}>
          <h5>{data?.subHeading}</h5>
          <h2>{data?.heading}</h2>
          <Redactor>{data?.description ?? ""}</Redactor>
        </div>
        <div className={styles.ContentRight}>
          {data?.titleImage?.[0]?.url && (
            <Image
              className={styles.ContentRightImage}
              src={data?.titleImage?.[0]?.url}
              alt={data?.titleImage?.[0]?.title}
              width={data?.titleImage?.[0]?.width}
              height={data?.titleImage?.[0]?.height}
              layout="responsive"
            />
          )}
        </div>
        <div className={styles.BottomBlock}>
          <ImageButton
            href={data?.cta?.[0]?.link}
            icon="download"
            label={"Download Brochure"}
            chevron={true}
            labelSpacingLeft={8}
            labelSpacingRight={16}
            css={css({ backgroundColor: "#ffca00" })}
          />
        </div>
      </div>
    </div>
  );
};

export default CostAndFee;
