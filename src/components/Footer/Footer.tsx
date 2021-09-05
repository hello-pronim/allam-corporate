import React from "react";
import Link from "next/link";
import { Button } from "@components/Common/Common";
import Icon from "@components/Icons/Icons";
import styles from "./Footer.module.scss";

export interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfoWrapper}>
          <div className={styles.footerInfoContact}>
            <h3>How can we help?</h3>
            <div className={styles.footerInfoContactButtons}>
              <Button size="large" rounded>
                Contact an Agent today
              </Button>
              <Button size="large" color="outline-light" rounded>
                View our locations
              </Button>
            </div>
          </div>

          <div className={styles.footerInfoTestimonial}>
            <div className={styles.footerInfoTestimonialReview}>
              {Array(5)
                .fill("")
                .map((_, id: number) => (
                  <div
                    className={styles.footerInfoTestimonialReviewIcon}
                    key={id}
                  >
                    <Icon type="star" />
                  </div>
                ))}
            </div>

            <p>
              “Allam have been fantastic from the minute we started. We have
              purchased a ready built home and move in a few weeks.
            </p>
            <div className={styles.footerInfoTestimonialReviewClient}>
              <p>
                <b>Ally Watts - Penrith (2 weeks ago)</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerStatusbar}>
        <div className={styles.footerStatusbarWrapper}>
          <div className={styles.footerStatusbarInside}>
            <div className={styles.footerStatusbarAbove}>
              <span>© Copyright 2021 Allam Property Group</span>
              <div className={styles.footerStatusbarSocial}>
                <Link href="/">
                  <a>
                    <Icon type="facebook" />
                  </a>
                </Link>

                <Link href="/">
                  <a>
                    <Icon type="instagram" />
                  </a>
                </Link>
              </div>
            </div>

            <ul className={styles.footerStatusbarLinks}>
              <li>
                <Link href="/">
                  <a>Disclaimer</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
