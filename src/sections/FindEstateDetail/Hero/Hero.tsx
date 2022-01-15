import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import { Button, ActionButton, ImageButton } from "@components/Common/Common";
import styles from "./Hero.module.scss";
import { CraftImage, HomeModel } from "@models";

type IHeroProps = {
  title: string;
  address: string;
  logo: CraftImage[];
  filteredHomes?: HomeModel[];
};

const Hero = ({ title, address, logo, filteredHomes = [] }: IHeroProps) => {
  const router = useRouter();
  const [landCount, setLandCount] = useState(0);
  const [homeCount, setHomeCount] = useState(0);

  useEffect(() => {
    setHomeCount(filteredHomes.filter((el) => !el.landOnly).length);
    setLandCount(filteredHomes.filter((el) => el.landOnly).length);
  }, [filteredHomes]);

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
              {homeCount > 0 && (
                <ImageButton
                  icon="home-insurance"
                  label="Homes for Sale"
                  count={homeCount}
                  labelSpacingLeft={8}
                />
              )}
              {landCount > 0 && (
                <ImageButton
                  icon="land-sale"
                  label="Land for Sale"
                  count={landCount}
                  labelSpacingLeft={8}
                />
              )}

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
