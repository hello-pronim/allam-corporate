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
            <div className={styles.footerInfoTestimonialDesktop}>
              <div
                className="trustpilot-widget"
                data-locale="en-AU"
                data-template-id="53aa8912dec7e10d38f59f36"
                data-businessunit-id="605a6fefe31540000196de10"
                data-style-height="140px"
                data-style-width="100%"
                data-theme="light"
                data-stars="1,2,3,4,5"
                data-review-languages="en"
              >
                <a
                  href="https://au.trustpilot.com/review/allam.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trustpilot
                </a>
              </div>
            </div>
            <div className={styles.footerInfoTestimonialMobile}>
              <div
                className="trustpilot-widget"
                data-locale="en-AU"
                data-template-id="54ad5defc6454f065c28af8b"
                data-businessunit-id="605a6fefe31540000196de10"
                data-style-height="240px"
                data-style-width="100%"
                data-theme="light"
                data-stars="1,2,3,4,5"
                data-review-languages="en"
              >
                <a
                  href="https://au.trustpilot.com/review/allam.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trustpilot
                </a>
              </div>
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
