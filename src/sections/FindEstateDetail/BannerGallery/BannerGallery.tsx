import React, { useState } from "react";
import Image from "next/image";
import Icon from "@components/Icons/Icons";
import { CraftImage, VideoModel } from "@models";
import { useMobileView } from "@utils/useMobileView";
import { Button } from "@components/Common/Common";
import GalleryModal from "@components/GalleryModal/GalleryModal";
import styles from "./BannerGallery.module.scss";

export interface IBannerGalleryProps {
  logo: CraftImage[];
  images: CraftImage[];
  videos: VideoModel[];
}

const BannerGallery = ({ logo, images, videos }: IBannerGalleryProps) => {
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
        {logo?.[0]?.url && (
          <div className={styles.bannerGalleryMainLogo}>
            <Image
              src={logo?.[0]?.url}
              alt={logo?.[0]?.title}
              layout="responsive"
              width={logo?.[0]?.width}
              height={logo?.[0]?.height}
            />
          </div>
        )}

        {useMobileView() && (
          <div className={styles.bannerGalleryViewButton} onClick={openGallery}>
            <Button color="light">
              <Icon type="view-gallery" />
              <span>View Gallery</span>
            </Button>
          </div>
        )}
      </div>

      <div className={styles.bannerGallerySide}>
        <div
          className={styles.bannerGallerySideTop}
          style={{ backgroundImage: `url(${images[1]?.url})` }}
        >
          {videos.length > 0 && (
            <Icon type="video-play" onClick={openGallery} />
          )}
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
            <div
              className={styles.bannerGalleryViewButton}
              onClick={openGallery}
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
        videos={videos}
        images={images}
      />
    </div>
  );
};

export default BannerGallery;
