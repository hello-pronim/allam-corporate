import React from "react";
import Link from "next/link";
import ExternalLink from "@components/ExternalLink/ExternalLink";
import styles from "./Hero.module.scss";

export interface IButtonProps {
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
      <div></div>
    </div>
  );
};

export default Hero;
