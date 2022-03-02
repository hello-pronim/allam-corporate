import React from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Button from "@components/Common/Button/Button";
import Checkbox from "@components/Common/Checkbox/Checkbox";
import Input from "@components/Common/Input/Input";
import Textarea from "@components/Common/Textarea/Textarea";

import styles from "./forms.module.scss";

export interface GeneralEnquiryProps {
  handleOnSubmit: (values: any) => void;
}

const Maintenance = ({ handleOnSubmit }: GeneralEnquiryProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.info("errors:", errors);
    console.info(data);
  };

  return (
    <form className={classNames(styles.Form)} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            className={styles.formControl}
            type="text"
            name="firstname"
            placeholder="First Name"
            register={register}
          />
          <Input
            className={styles.formControl}
            type="text"
            name="lastname"
            placeholder="Last Name"
            register={register}
          />
          <Input
            className={styles.formControl}
            type="email"
            name="email"
            placeholder="Email"
            register={register}
          />
          <Input
            className={styles.formControl}
            type="text"
            name="phone"
            placeholder="Contact Number"
            register={register}
          />
        </div>
        <div className={styles.formCol}>
          <div>
            <h6>I need maintenance at: </h6>
            <Input
              className={styles.formControl}
              type="text"
              name="Addres"
              placeholder="Addres"
              register={register}
            />
          </div>
          <div>
            <Input
              className={styles.formControl}
              type="text"
              name="postcode"
              placeholder="Postcode"
              register={register}
            />
            <Textarea
              rows={4}
              className={styles.formControl}
              name="comment"
              placeholder="Comment"
              register={register}
            />
          </div>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <p className={styles.formControl}>
            Note: By submitting this form you agree to Allam’s Terms and
            Conditions and Allam may contact you via email, phone or SMS.
          </p>
          <Button className={styles.formControl} color="dark">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Maintenance;
