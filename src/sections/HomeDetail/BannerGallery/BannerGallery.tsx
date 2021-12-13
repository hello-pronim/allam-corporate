import React, { useState } from "react";
import { CraftImage, VideoModel } from "@models";
import Icon from "@components/Icons/Icons";
import GalleryModal from "@components/GalleryModal/GalleryModal";
import { useMobileView } from "src/utils/useMobileView";
import styles from "./BannerGallery.module.scss";

export interface IBannerGalleryProps {
  images: CraftImage[];
  gallery3dUrl: string;
  videos: VideoModel[];
}

const BannerGallery = ({
  images,
  gallery3dUrl,
  videos,
}: IBannerGalleryProps) => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const openGallery = () => {
    setGalleryOpen(true);
  };

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
            <span onClick={openGallery}>View Gallery</span>
          </div>
        )}
      </div>

      <div className={styles.bannerGallerySide}>
        <div
          className={styles.bannerGallerySideTop}
          style={{ backgroundImage: `url(${images[1]?.url})` }}
        >
          <Icon type="video-play" onClick={openGallery} />
        </div>

        <div
          className={styles.bannerGallerySideBottom}
          style={
            images[2]?.url
              ? { backgroundImage: `url(${images[2]?.url})` }
              : { background: "#eef2f5" }
          }
        >
          {!useMobileView() && (
            <div className={styles.bannerGalleryViewButton}>
              {gallery3dUrl !== "" && (
                <a href={gallery3dUrl} target="_blank" rel="noreferrer">
                  Virtual Tour
                </a>
              )}{" "}
              <span onClick={openGallery}>View Gallery</span>
            </div>
          )}
        </div>
      </div>

      <GalleryModal
        isModalOpen={isGalleryOpen}
        closeModal={() => setGalleryOpen(false)}
        videos={videos}
        images={images}
      />
    </div>
  );
};

export default BannerGallery;
