import React from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Button from "@components/Common/Button/Button";
import Checkbox from "@components/Common/Checkbox/Checkbox";
import Input from "@components/Common/Input/Input";
import RadioButtons from "@components/Common/RadioButtons/RadioButtons";
import Select from "@components/Common/FormSelect/FormSelect";
import Textarea from "@components/Common/Textarea/Textarea";
import styles from "./forms.module.scss";

export interface SuppliersProps {}

const Suppliers = () => {
  const radioButtonsData = [
    {
      value: "1 – 3",
      text: "1 – 3",
    },
    {
      value: "4 - 8",
      text: "4 - 8",
    },
    {
      value: "9 - 12",
      text: "9 - 12",
    },
  ];
  const serviceTypes: any = [];
  const workingAreas: any = [];

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
          <Input
            type="text"
            name="lastname"
            className={styles.formControl}
            placeholder="Last Name"
            register={register}
          />
          <Input
            type="email"
            name="email"
            className={styles.formControl}
            placeholder="Email"
            register={register}
          />
          <Input
            type="text"
            name="phone"
            className={styles.formControl}
            placeholder="Contact Number"
            register={register}
          />
          <Input
            type="text"
            name="postcode"
            className={styles.formControl}
            placeholder="Postcode"
            register={register}
          />
          <Textarea
            rows={3}
            className={styles.formControl}
            name="comment"
            placeholder="Comment"
          />
        </div>
        <div className={styles.formCol}>
          <div>
            <Select
              className={styles.formControl}
              name="serviceType"
              placeholder="What type of services do you provide?"
              options={serviceTypes}
            />
            <Select
              className={styles.formControl}
              name="workingArea"
              placeholder="What area are you interested in working from?"
              options={workingAreas}
            />
          </div>
          <div>
            <h6>How big is your company?</h6>
            <RadioButtons
              className={styles.formControl}
              name="employees"
              data={radioButtonsData}
            />
          </div>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Checkbox
            className={styles.formControl}
            name="terms"
            text="Allam may contact you via email, phone or SMS and you agree to their Terms and Conditions"
          />
          <Button className={styles.formControl} color="dark">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Suppliers;
