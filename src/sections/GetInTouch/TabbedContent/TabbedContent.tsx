import React, { useState } from "react";
import styles from "./TabbedContent.module.scss";
import { ImageButton } from "@components/Common/Common";
import { css } from "@styled-system/css";
import GeneralEnquiry from "../Forms/GeneralEnquiry";
import Appointment from "../Forms/Appointment";

export interface TabbedContentProps {}

const TabbedContent = () => {
  const [formType, setFormType] = useState("General enquiry");

  let FormKey = new Map([
    ["General enquiry", GeneralEnquiry],
    ["Request an appointment", Appointment],
    ["I'm interested in buying", GeneralEnquiry],
    ["Trade and Suppliers", Appointment],
  ]);

  const ActiveForm = FormKey.get(formType);

  console.log(ActiveForm);
  return (
    <div className={styles.TabbedContent}>
      <div
        className={styles.TabbedContentWrapper}
        css={css({
          backgroundImage: `url("/assets/images/home/img-monterey-bg.jpg")`,
        })}
      >
        <div className={styles.TabWrapper}>
          <div className={styles.TabContainer}>
            <ImageButton
              icon="grid-view"
              label="Contact Us"
              css={css({ bg: "#ffca04" })}
            />
            <div className={styles.Divider}></div>
            <ImageButton icon="gallery" label="Our Locations" />
          </div>
        </div>
        <div className={styles.Content}>
          <h4>Please fill out the form and we'll get back to you shortly</h4>
          <h6>What's the reason for your enquiry?</h6>
          <select
            className={styles.dropdown}
            onChange={(e) => setFormType(e.target.value)}
          >
            <option value="General enquiry">General enquiry</option>
            <option value="Request an appointment">
              Request an appointment
            </option>
            <option value="I'm interested in buying">
              I'm interested in buying
            </option>
            <option value="Trade and Suppliers">Trade and Suppliers</option>
          </select>
          {
            //@ts-ignore
            <ActiveForm />
          }
        </div>
      </div>
    </div>
  );
};

export default TabbedContent;
