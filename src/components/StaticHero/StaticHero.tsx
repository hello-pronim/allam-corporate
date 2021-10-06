import React, {useState} from "react";
import styles from "./StaticHero.module.scss";
import Icon from "@components/Icons/Icons";

export interface StaticHeroProps {
  content: {
    imageUrl: string;
    title: string;
    subtitle: string;
    videoUrl?: string;
  };
}

const StaticHero = ({ content }: StaticHeroProps) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles.hero}>
        <div
          className={styles.heroWrapper}
          style={{
            backgroundImage: `linear-gradient(0deg, #e3e3e3, #e3e3e3), url(${content.imageUrl})`,
          }}
        >
          <div className={styles.heroContent}>
            <h3>{content.subtitle}</h3>
            <h1 className="home">{content.title}</h1>
          </div>
          {content.videoUrl && (
            <button className={styles.videoLink}>
              <Icon type="video-play"/> <h4>Watch our story</h4>
            </button>
          )}
        </div>
    </div>
  );
};

export default StaticHero;
