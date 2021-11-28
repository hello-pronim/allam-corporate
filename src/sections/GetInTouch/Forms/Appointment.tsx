import React from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
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
  const checkboxButtonsData1 = [
    { value: "Week day", text: "Week day" },
    { value: "Weekend", text: "Weekend" },
  ];
  const checkboxButtonsData2 = [
    { value: "Morning", text: "Morning" },
    { value: "Afternoon", text: "Afternoon" },
  ];

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone number is required"),
    terms: Yup.bool().oneOf([true], "Please accept the terms"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleFormSubmit = (data: any) => {
    console.log("AAAAAAAAA");
    console.log(data);
  };

  return (
    <form
      className={classNames(styles.Form)}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            {...register("firstname")}
            type="text"
            name="firstname"
            className={styles.formControl}
            placeholder="First Name"
          />
        </div>
        <div className={styles.formCol}>
          <Input
            {...register("lastname")}
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
            {...register("email")}
            type="email"
            name="email"
            className={styles.formControl}
            placeholder="Email"
          />
        </div>
        <div className={styles.formCol}>
          <Input
            {...register("phone")}
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
            {...register("postcode")}
            type="text"
            name="postcode"
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
            {...register("terms")}
            className={styles.formControl}
            name="terms"
            text="By clicking submit you acknowledge Allam may contact you via
              email, you also agree to their Terms and Conditions."
          />
          <Checkbox
            {...register("offers")}
            className={styles.formControl}
            name="offers"
            text="Would you like to receive updates and offers from Allam Property
              Group?"
          />
          <Button type="submit" className={styles.formControl} color="dark">
            Submit
          </Button>
        </div>
        <div className={styles.formCol}>
          <Textarea
            {...register("comment")}
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
