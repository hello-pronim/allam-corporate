import React, { useState } from "react";
import Image from "next/image";
import { CraftImage } from "@models";
import Icon from "@components/Icons/Icons";
import { Button } from "@components/Common/Common";
import GalleryModal from "@components/GalleryModal/GalleryModal";
import { useMobileView } from "src/utils/useMobileView";
import styles from "./BannerGallery.module.scss";

export interface IBannerGalleryProps {
  images: CraftImage[];
  gallery3dUrl: string;
}

const BannerGallery = ({ images, gallery3dUrl }: IBannerGalleryProps) => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  return (
    <div className={styles.bannerGallery}>
      <div
        className={styles.bannerGalleryMain}
        style={{ backgroundImage: `url(${images[0]?.url})` }}
      >
        {useMobileView() && (
          <div className={styles.bannerGalleryViewButton}>
            {gallery3dUrl !== "" && (
              <a href={gallery3dUrl} target="_blank" rel="noreferrer">
                Virtual Tour
              </a>
            )}
            <span onClick={() => setGalleryOpen(true)}>View Gallery</span>
          </div>
        )}
      </div>

      <div className={styles.bannerGallerySide}>
        <div className={styles.bannerGallerySideTop}>
          <Icon type="video-play" />
        </div>

        <div className={styles.bannerGallerySideBottom}>
          {!useMobileView() && (
            <div className={styles.bannerGalleryViewButton}>
              <span>Virtual Tour</span>
              <span onClick={() => setGalleryOpen(true)}>View Gallery</span>
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
