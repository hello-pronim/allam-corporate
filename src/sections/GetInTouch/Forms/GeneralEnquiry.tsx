import React from "react";
import styles from "./forms.module.scss";
import classNames from "classnames";

export interface GeneralEnquiryProps {}

const GeneralEnquiry = () => {
  return (
    <form className={classNames(styles.Form)}>
      <div className={classNames(styles.left)}>
        <input type="text" placeholder="First Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="text" placeholder="Postcode"></input>
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

export default GeneralEnquiry;
