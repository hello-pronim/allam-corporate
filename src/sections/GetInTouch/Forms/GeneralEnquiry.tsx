import React from "react";
import classNames from "classnames";
import Button from "@components/Common/Button/Button";
import Checkbox from "@components/Common/Checkbox/Checkbox";
import Input from "@components/Common/Input/Input";
import Textarea from "@components/Common/Textarea/Textarea";

import styles from "./forms.module.scss";

export interface GeneralEnquiryProps {}

const GeneralEnquiry = () => {
  return (
    <form className={classNames(styles.Form)}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="firstname"
            className={styles.formControl}
            placeholder="First Name"
          />
        </div>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="lastname"
            className={styles.formControl}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            type="email"
            name="email"
            className={styles.formControl}
            placeholder="Email"
          />
        </div>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="phone"
            className={styles.formControl}
            placeholder="Contact Number"
          />
        </div>
      </div>
      <div className={`${styles.formRow} ${styles.formRowReverse}`}>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="postcode"
            className={styles.formControl}
            placeholder="Postcode"
          />
          <Checkbox
            className={styles.formControl}
            name="terms"
            text="By clicking submit you acknowledge Allam may contact you via
              email, you also agree to their Terms and Conditions."
          />
          <Checkbox
            className={styles.formControl}
            name="offers"
            text="Would you like to receive updates and offers from Allam Property
              Group?"
          />
          <Button className={styles.formControl} color="dark">
            Submit
          </Button>
        </div>
        <div className={styles.formCol}>
          <Textarea
            rows={4}
            className={styles.formControl}
            name="comment"
            placeholder="Comment"
          />
        </div>
      </div>
    </form>
  );
};

export default GeneralEnquiry;
