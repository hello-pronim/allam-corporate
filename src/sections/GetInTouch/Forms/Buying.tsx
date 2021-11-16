import React from "react";
import styles from "./forms.module.scss";
import classNames from "classnames";

export interface BuyingProps {}

const Buying = () => {
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
              What type of employment do you do?
            </option>
          </select>
          <select className={`${styles.formControl} ${styles.dropdown}`}>
            <option value={undefined}>
              What estate are you interested in?
            </option>
          </select>
          <select className={`${styles.formControl} ${styles.dropdown}`}>
            <option value={undefined}>What type of buyer are you?</option>
          </select>
          <h6>I’m looking to buy in the next?</h6>
          <div className={`${styles.formControl} ${styles.radioButtonWrapper}`}>
            <label className={styles.radioButton}>
              <input type="radio" name="timeFrame" value="1 – 3 mths" />
              <span className={styles.chk}>1 – 3 mths</span>
            </label>
            <label className={styles.radioButton}>
              <input type="radio" name="timeFrame" value="3 – 6 mths" />
              <span>3 – 6 mths</span>
            </label>
            <label className={styles.radioButton}>
              <input type="radio" name="timeFrame" value="not sure" />
              <span>not sure</span>
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

export default Buying;
