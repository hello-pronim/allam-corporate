import React from "react";
import Link from "next/link";
import Image from "next/image";
import ExternalLink from "@components/ExternalLink/ExternalLink";
import { ImageButton } from "@components/Common/Common";
import styles from "./Hero.module.scss";

export interface IHeaderButtonProps {
  href?: string;
  color?: string;
  size?: "large" | "normal" | "small";
  className?: string;
  rounded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <h1>Turnkey Homes under $950,000</h1>
        <h5>Get the $15,000 HomeBuilder Grant*</h5>

        <div className={styles.heroFilter}>
          <p>Find your perfect home without difficulties</p>

          <div className={styles.heroFilterOptions}>
            <ImageButton icon="estate" label="Estates" homepageFilter />
            <span>or by</span>
            <ImageButton
              icon="home-insurance"
              label="Homes for Sale"
              homepageFilter
            />
            <ImageButton
              icon="land-sale"
              label="Land for Sale"
              homepageFilter
            />

            <div className={styles.heroFilterOptionsSearch}>
              <Image
                src={"/static/icons/icon-search.svg"}
                alt="icon-search"
                width={33}
                height={33}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
