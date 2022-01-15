import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Button, ActionButton, ImageButton } from "@components/Common/Common";
import styles from "./Hero.module.scss";
import { CraftImage } from "@models";

type IHeroProps = {
  title: string;
  address: string;
  logo: CraftImage[];
};

const Hero = ({ title, address, logo }: IHeroProps) => {
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroContentBack}>
            <ActionButton
              type="chevron-left"
              label="Back"
              onClick={() => router.back()}
            />
          </div>

          <div className={styles.heroContentText}>
            <h1>{title}</h1>
            <h5>{address}</h5>

            <div className={styles.heroContentButtons}>
              <ImageButton
                icon="home-insurance"
                label="Homes for Sale"
                count={12}
                labelSpacingLeft={8}
              />
              <ImageButton
                icon="land-sale"
                label="Land for Sale"
                count={12}
                labelSpacingLeft={8}
              />

              <div className={styles.heroContentButtonsCondition}>
                <Button href="/get-in-touch" rounded>
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>

          {logo?.[0]?.url && (
            <div className={styles.heroContentLogo}>
              <Image
                src={logo?.[0]?.url}
                alt={logo?.[0]?.title}
                layout="responsive"
                width={logo?.[0]?.width}
                height={logo?.[0]?.height}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
