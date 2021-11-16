import React from "react";
import styles from "./forms.module.scss";
import classNames from "classnames";

export interface GeneralEnquiryProps {}

const GeneralEnquiry = () => {
  return (
    <form className={classNames(styles.Form)}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <input
            type="text"
            className={styles.formControl}
            placeholder="First Name"
          ></input>
        </div>
        <div className={styles.formCol}>
          <input
            type="text"
            className={styles.formControl}
            placeholder="Last Name"
          ></input>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <input
            type="email"
            className={styles.formControl}
            placeholder="Email"
          ></input>
        </div>
        <div className={styles.formCol}>
          <input
            type="text"
            className={styles.formControl}
            placeholder="Contact Number"
          ></input>
        </div>
      </div>
      <div className={`${styles.formRow} ${styles.formRowReverse}`}>
        <div className={styles.formCol}>
          <input
            type="text"
            className={styles.formControl}
            placeholder="Postcode"
          ></input>
          <div className={styles.radioGroup}>
            <label className={styles.checkbox}>
              <input type="checkbox" name="terms" />
              <span>
                By clicking submit you acknowledge Allam may contact you via
                email, you also agree to their Terms and Conditions.
              </span>
            </label>
            <label className={styles.checkbox}>
              <input type="checkbox" name="offers" />
              <span>
                Would you like to receive updates and offers from Allam Property
                Group?
              </span>
            </label>
          </div>
          <input type="submit" />
        </div>
        <div className={styles.formCol}>
          <textarea
            className={styles.formControl}
            placeholder="Comment"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default GeneralEnquiry;
