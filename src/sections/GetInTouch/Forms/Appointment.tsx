import React, { useState } from "react";
import styles from "./forms.module.scss";
import { ImageButton } from "@components/Common/Common";
import { css } from "@styled-system/css";
import classNames from "classnames";

export interface GeneralEnquiryProps {}

const Appointment = () => {
  return (
    <form className={classNames(styles.Form)}>
      <div className={classNames(styles.left)}>
        <input type="text" placeholder="First Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="text" placeholder="Postcode"></input>
        <h6>Choose a preferred time</h6>
        <div className={styles.formButtonWrapper}>
          <label className={styles.checkboxButton}>
            <input
              type="checkbox"
              name="time"
              value="Weekday"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className={styles.chk}>Weekday</span>
          </label>
          <label className={styles.checkboxButton}>
            <input
              type="checkbox"
              name="time"
              value="Weekend"
              onChange={(e) => console.log(e.target.value)}
            />
            <span>Weekend</span>
          </label>
        </div>
        <h6>and</h6>
        <div className={styles.formButtonWrapper}>
          <label className={styles.checkboxButton}>
            <input
              type="checkbox"
              name="time"
              value="Weekday"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className={styles.chk}>Morning</span>
          </label>
          <label className={styles.checkboxButton}>
            <input
              type="checkbox"
              name="time"
              value="Weekend"
              onChange={(e) => console.log(e.target.value)}
            />
            <span>Afternoon</span>
          </label>
        </div>        
        <label className={styles.checkbox}>
          <input type="checkbox" name="terms" />
          <span>
            By clicking submit you acknowledge Allam may contact you via email,
            you also agree to their Terms and Conditions.
          </span>
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="offers" />
          <span>
            Would you like to receive updates and offers from Allam Property
            Group?
          </span>
        </label>
        <input type="submit" />
      </div>
      <div className={classNames(styles.right)}>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Contact Number"></input>
        <textarea placeholder="Comment"></textarea>
      </div>
    </form>
  );
};

export default Appointment;
