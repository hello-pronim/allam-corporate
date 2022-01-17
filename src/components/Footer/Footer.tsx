import React from "react";
import Link from "next/link";
import { get } from "lodash";
import { Button } from "@components/Common/Common";
import Icon from "@components/Icons/Icons";
import styles from "./Footer.module.scss";
import { ButtonModel } from "@models";

export interface IFooterProps {
  footerData: any;
}

const Footer = ({ footerData }: IFooterProps) => {
  const footerBottom = get(footerData, "footerBottom[0]");
  const footerButtons: ButtonModel[] = get(footerData, "buttons");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfoWrapper}>
          <div className={styles.footerInfoContact}>
            <h3>{footerData.heading}</h3>
            <div className={styles.footerInfoContactButtons}>
              {footerButtons?.map((button: ButtonModel, id: number) => (
                <Button
                  key={id}
                  href={button.buttonLink}
                  color={button.buttonType}
                  rounded
                >
                  {button.buttonLabel}
                </Button>
              ))}
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
              <span>{footerBottom?.copyrightText}</span>
              <div className={styles.footerStatusbarSocial}>
                {footerBottom?.socialLinks.map((social: any) => (
                  <Link href={social.socialLink} key={social.socialName}>
                    <a>
                      <Icon type={social.socialName} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <ul className={styles.footerStatusbarLinks}>
              {footerBottom?.bottomLinks.map((el: any) => (
                <li key={el.linkLabel}>
                  <Link href={`/${el.hyperlink?.[0]?.slug}`}>
                    <a>{el.linkLabel}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
