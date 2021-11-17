import React from "react";
import classNames from "classnames";
import Button, {
  buttonTypeEnum,
  buttonColorEnum,
} from "@components/Button/Button";
import Checkbox from "@components/Checkbox/Checkbox";
import Input from "@components/Input/Input";
import CheckboxButtons from "@components/CheckboxButtons/CheckboxButtons";
import Textarea from "@components/Textarea/Textarea";

import styles from "./forms.module.scss";

export interface GeneralEnquiryProps {}

const Appointment = () => {
  const checkboxButtonsData1 = [
    { value: "Week day", text: "Week day" },
    { value: "Weekend", text: "Weekend" },
  ];
  const checkboxButtonsData2 = [
    { value: "Morning", text: "Morning" },
    { value: "Afternoon", text: "Afternoon" },
  ];

  return (
    <form className={classNames(styles.Form)}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="firstName"
            className={styles.formControl}
            placeholder="First Name"
          />
        </div>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="lastName"
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
            name="contactNumber"
            className={styles.formControl}
            placeholder="Contact Number"
          />
        </div>
      </div>
      <div className={`${styles.formRow} ${styles.formRowReverse}`}>
        <div className={styles.formCol}>
          <Input
            type="text"
            className={styles.formControl}
            placeholder="Postcode"
          />
          <div>
            <h6>Choose a preferred time</h6>
            <CheckboxButtons
              name="time"
              className={styles.formControl}
              data={checkboxButtonsData1}
            />
            <h6>and</h6>
            <CheckboxButtons
              name="time"
              className={styles.formControl}
              data={checkboxButtonsData2}
            />
          </div>
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
          <Button
            type={buttonTypeEnum.submit}
            color={buttonColorEnum.secondary}
            text="Submit"
          />
        </div>
        <div className={styles.formCol}>
          <Textarea
            rows={9}
            className={styles.formControl}
            name="comment"
            placeholder="Comment"
          />
        </div>
      </div>
    </form>
  );
};

export default Appointment;
