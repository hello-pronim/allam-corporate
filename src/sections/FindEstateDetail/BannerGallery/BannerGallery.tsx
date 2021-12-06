import React, { useState } from "react";
import Image from "next/image";
import Icon from "@components/Icons/Icons";
import { useMobileView } from "src/utils/useMobileView";
import { Button } from "@components/Common/Common";
import GalleryModal from "@components/GalleryModal/GalleryModal";
import styles from "./BannerGallery.module.scss";

export interface IBannerGalleryProps {}

const BannerGallery = ({}: IBannerGalleryProps) => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

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
          <div
            className={styles.bannerGalleryViewButton}
            onClick={() => {
              setGalleryOpen(true);
            }}
          >
            <Button color="light">
              <Icon type="view-gallery" />
              <span>View Gallery</span>
            </Button>
          </div>
        )}
      </div>

      <div className={styles.bannerGallerySide}>
        <div className={styles.bannerGallerySideTop}>
          <Icon type="video-play" />
        </div>

        <div className={styles.bannerGallerySideBottom}>
          {!useMobileView() && (
            <div
              className={styles.bannerGalleryViewButton}
              onClick={() => {
                setGalleryOpen(true);
              }}
            >
              <Button color="light">
                <Icon type="view-gallery" />
                <span>View Gallery</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      <GalleryModal
        isModalOpen={isGalleryOpen}
        closeModal={() => setGalleryOpen(false)}
      />
    </div>
  );
};

export default BannerGallery;
