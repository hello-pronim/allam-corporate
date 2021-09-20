import React from "react";
import Image from "next/image";
import Icon from "@components/Icons/Icons";
import { useMobileView } from "src/utils/useMobileView";
import styles from "./BannerGallery.module.scss";
import { Button } from "@components/Common/Common";

export interface IBannerGalleryProps {}

const BannerGallery = ({}: IBannerGalleryProps) => {
  return (
    <div className={styles.bannerGallery}>
      <div className={styles.bannerGalleryMain}>
        <div className={styles.bannerGalleryMainLogo}>
          <Image
            src={"/assets/images/estate/White-Logo-Ardennes.png"}
            alt="banner-logo"
            layout="responsive"
            width={624}
            height={356}
          />
        </div>

        {useMobileView() && (
          <div className={styles.bannerGalleryViewButton} onClick={() => {}}>
            <Button color="light">
              <Icon type="view-gallery" />
              <span>View Gallery</span>
            </Button>
          </div>
        )}
      </div>

      <div className={styles.bannerGallerySide}>
        <div className={styles.bannerGallerySideTop}>
          <Icon type="play-circle" />
        </div>

        <div className={styles.bannerGallerySideBottom}>
          {!useMobileView() && (
            <div className={styles.bannerGalleryViewButton} onClick={() => {}}>
              <Button color="light">
                <Icon type="view-gallery" />
                <span>View Gallery</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerGallery;
