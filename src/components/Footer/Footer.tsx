import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { get } from "lodash";
import { Button } from "@components/Common/Common";
import Icon from "@components/Icons/Icons";
import styles from "./Footer.module.scss";
import { ButtonModel } from "@models";

interface IFooterProps {
  footerData: any;
}

declare global {
  interface Window {
    Trustpilot: any;
  }
}

const TrustBox = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = useRef(null);
  useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window?.Trustpilot) {
      window?.Trustpilot?.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref} // We need a reference to this element to load the TrustBox in the effect.
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
        {" "}
        Trustpilot
      </a>
    </div>
  );
};

const Footer = ({ footerData }: IFooterProps) => {
  const footerBottom = get(footerData, "footerBottom[0]");
  const footerButtons: ButtonModel[] = get(footerData, "buttons");

  // useEffect(() => {
  //   var aScript = document.createElement("script");
  //   aScript.type = "text/javascript";
  //   aScript.src =
  //     "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
  //   aScript.async = true;
  //   document.head.appendChild(aScript);
  //   aScript.onload = function () {
  //     var trustbox = document.getElementById("trustbox");
  //     window?.Trustpilot?.loadFromElement(trustbox);
  //   };
  // }, []);

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
              {/* <div
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
              </div> */}
              <TrustBox />
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
