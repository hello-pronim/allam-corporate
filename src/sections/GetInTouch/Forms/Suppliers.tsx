import React from "react";
import styles from "./forms.module.scss";
import classNames from "classnames";

export interface SuppliersProps {}

const Suppliers = () => {
  return (
    <form className={classNames(styles.Form)}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <input
            type="text"
            className={styles.formControl}
            placeholder="First Name"
          ></input>
          <input
            type="text"
            className={styles.formControl}
            placeholder="Last Name"
          ></input>
          <input
            type="email"
            className={styles.formControl}
            placeholder="Email"
          ></input>
          <input
            type="text"
            className={styles.formControl}
            placeholder="Contact Number"
          ></input>
          <input
            type="text"
            className={styles.formControl}
            placeholder="Postcode"
          ></input>
          <textarea
            className={styles.formControl}
            placeholder="Comment"
          ></textarea>
        </div>
        <div className={styles.formCol}>
          <select className={`${styles.formControl} ${styles.dropdown}`}>
            <option value={undefined}>
              What type of services do you provide?
            </option>
          </select>
          <select className={`${styles.formControl} ${styles.dropdown}`}>
            <option value={undefined}>
              What area are you interested in working from?
            </option>
          </select>
          <h6>How big is your company?</h6>
          <div className={`${styles.formControl} ${styles.radioButtonWrapper}`}>
            <label className={styles.radioButton}>
              <input type="radio" name="employees" value="1-3" />
              <span className={styles.chk}>1-3</span>
            </label>
            <label className={styles.radioButton}>
              <input type="radio" name="employees" value="4-8" />
              <span>4-8</span>
            </label>
            <label className={styles.radioButton}>
              <input type="radio" name="employees" value="9-12" />
              <span>9-12</span>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <label className={`${styles.formControl} ${styles.checkbox}`}>
            <input type="checkbox" name="terms" />
            <span>
              By clicking submit you acknowledge Allam may contact you via
              email, you also agree to their Terms and Conditions.
            </span>
          </label>
          <label className={`${styles.formControl} ${styles.checkbox}`}>
            <input type="checkbox" name="offers" />
            <span>
              Would you like to receive updates and offers from Allam Property
              Group?
            </span>
          </label>
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Suppliers;
