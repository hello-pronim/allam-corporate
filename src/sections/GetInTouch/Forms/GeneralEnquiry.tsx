import React from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Button from "@components/Common/Button/Button";
import Input from "@components/Common/Input/Input";
import Textarea from "@components/Common/Textarea/Textarea";

import styles from "./forms.module.scss";

export interface GeneralEnquiryProps {}

const GeneralEnquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form className={classNames(styles.Form)} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            className={`${styles.formControl} ${
              errors["FirstName"] ? styles.hasError : ""
            }`}
            type="text"
            name="FirstName"
            placeholder="First Name"
            register={register}
            validation={{ required: true }}
          />
        </div>
        <div className={styles.formCol}>
          <Input
            className={`${styles.formControl} ${
              errors["LastName"] ? styles.hasError : ""
            }`}
            type="text"
            name="LastName"
            placeholder="Last Name"
            register={register}
            validation={{ required: true }}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            className={`${styles.formControl} ${
              errors["Email"] ? styles.hasError : ""
            }`}
            type="email"
            name="Email"
            placeholder="Email"
            register={register}
            validation={{ required: true }}
          />
        </div>
        <div className={styles.formCol}>
          <Input
            className={`${styles.formControl} ${
              errors["Phone"] ? styles.hasError : ""
            }`}
            type="tel"
            name="Phone"
            placeholder="Contact Number"
            register={register}
            validation={{ required: true, minLength: 6, maxLength: 12 }}
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
          <p className={styles.formControl}>
            Note: By submitting this form you agree to Allam’s Terms and
            Conditions and Allam may contact you via email, phone or SMS.
          </p>
          <Button className={styles.formControl} color="dark" type="submit">
            Submit
          </Button>
        </div>
        <div className={styles.formCol}>
          <Textarea
            rows={4}
            className={styles.formControl}
            name="comment"
            placeholder="Comment"
            register={register}
          />
        </div>
      </div>
    </form>
  );
};

export default GeneralEnquiry;
