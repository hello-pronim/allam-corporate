import React from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Button from "@components/Common/Button/Button";
import Checkbox from "@components/Common/Checkbox/Checkbox";
import Input from "@components/Common/Input/Input";
import CheckboxButtons from "@components/Common/CheckboxButtons/CheckboxButtons";
import Textarea from "@components/Common/Textarea/Textarea";

import styles from "./forms.module.scss";

export interface GeneralEnquiryProps {
  handleOnSubmit: (values: any) => void;
}

const Appointment = ({ handleOnSubmit }: GeneralEnquiryProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            register={register}
          />
        </div>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="lastName"
            className={styles.formControl}
            placeholder="Last Name"
            register={register}
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
            register={register}
          />
        </div>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="contactNumber"
            className={styles.formControl}
            placeholder="Contact Number"
            register={register}
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
            register={register}
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
  );
};

export default Appointment;
