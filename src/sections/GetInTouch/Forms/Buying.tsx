import React from "react";
import styles from "./forms.module.scss";
import classNames from "classnames";

export interface BuyingProps {}

const Buying = () => {
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
            Would you like to receive updates and offers from Allam Property
            Group?
          </span>
        </label>
        <input type="submit" />
      </div>
      <div className={classNames(styles.right)}>
        <select className={styles.dropdown}>
          <option value={undefined}>What type of employment do you do?</option>
        </select>
        <select className={styles.dropdown}>
          <option value={undefined}>What estate are you interested in?</option>
        </select>
        <select className={styles.dropdown}>
          <option value={undefined}>What type of buyer are you?</option>
        </select>
        <h6>I’m looking to buy in the next?</h6>
        <div className={styles.radioButtonWrapper}>
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
    </form>
  );
};

export default Buying;
