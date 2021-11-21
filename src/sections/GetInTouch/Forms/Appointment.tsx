import React from "react";
import classNames from "classnames";
import { Field, Form } from "react-final-form";
import Button from "@components/Common/Button/Button";
import Checkbox from "@components/Common/Checkbox/Checkbox";
import Input from "@components/Common/Input/Input";
import CheckboxButtons from "@components/Common/CheckboxButtons/CheckboxButtons";
import Textarea from "@components/Common/Textarea/Textarea";

import styles from "./forms.module.scss";

export interface GeneralEnquiryProps {
  handleOnSubmit: (values: any) => void;
}

const validate = (values: any) => {
  const errors: { [key: string]: string } = {};
  if (!values.nickname) {
    errors.firstName = "This Field Required";
  }

  if (!values.email) {
    errors.email = "This Field Required";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid Email";
  }

  if (!values.contactNumber) {
    errors.contactNumber = "This Field Required";
  }

  if (
    // eslint-disable-next-line no-useless-escape
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      values.contactNumber
    )
  ) {
    errors.contactNumber = "Please enter a valid Phone number";
  }

  return errors;
};

const Appointment = ({ handleOnSubmit }: GeneralEnquiryProps) => {
  const checkboxButtonsData1 = [
    { value: "Week day", text: "Week day" },
    { value: "Weekend", text: "Weekend" },
  ];
  const checkboxButtonsData2 = [
    { value: "Morning", text: "Morning" },
    { value: "Afternoon", text: "Afternoon" },
  ];

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, pristine }) => (
        <form
          className={classNames(styles.Form)}
          onSubmit={handleSubmit}
          noValidate
        >
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
              <Button className={styles.formControl} color="dark">
                Submit
              </Button>
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
      )}
    />
  );
};

export default Appointment;
