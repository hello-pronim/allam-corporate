import React from "react";
import styles from "./forms.module.scss";
import classNames from "classnames";

export interface SuppliersProps {}

const Suppliers = () => {
  return (
    <form className={classNames(styles.Form)}>
      <div className={classNames(styles.left)}>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="text" placeholder="Contact Number"></input>
        <input type="text" placeholder="Postcode"></input>
        <textarea placeholder="Comment"></textarea>
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
            Would you like to receive updates and offers
            from Allam Property Group?
          </span>
        </label>
        <input type="submit" />
      </div>
      <div className={classNames(styles.right)}>
        <select className={styles.dropdown}>
          <option value={undefined}>
            What type of services do you provide?
          </option>
        </select>
        <select className={styles.dropdown}>
          <option value={undefined}>
            What area are you interested in working from?
          </option>
        </select>
        <h6>How big is your company?</h6>
        <div className={styles.radioButtonWrapper}>
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
    </form>
  );
};

export default Suppliers;
