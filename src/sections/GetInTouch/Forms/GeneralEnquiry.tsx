import React from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Button from "@components/Common/Button/Button";
import Checkbox from "@components/Common/Checkbox/Checkbox";
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

  return (
    <form className={classNames(styles.Form)}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="firstname"
            className={styles.formControl}
            placeholder="First Name"
            register={register}
          />
        </div>
        <div className={styles.formCol}>
          <Input
            type="text"
            name="lastname"
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
            name="phone"
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
         <Checkbox
            className={styles.formControl}
            name="terms"
            text="Allam may contact you via email, phone or SMS and you agree to their Terms and Conditions"
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
