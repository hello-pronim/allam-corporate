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
          <Input
            className={styles.formControl}
            type="text"
            name="PostCode"
            placeholder="Postcode"
            register={register}
          />
          <Textarea
            rows={4}
            className={styles.formControl}
            name="Comment"
            placeholder="Comment"
            register={register}
          />
        </div>
        <div className={styles.formCol}>
          <div>
            <Select
              className={styles.formControl}
              name="serviceType"
              placeholder="What type of services do you provide?"
              options={serviceTypes}
              register={register}
            />
            <Select
              className={styles.formControl}
              name="workingArea"
              placeholder="What area are you interested in working from?"
              options={workingAreas}
              register={register}
            />
          </div>
          <div>
            <h6>How big is your company?</h6>

            <RadioButtons
              className={`${styles.formControl} ${
                errors["pba__BuyingTimeFrame_pb__c"] ? styles.hasError : ""
              }`}
              name="pba__BuyingTimeFrame_pb__c"
              data={radioButtonsData}
              register={register}
              validation={{ required: true }}
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
          <Button className={styles.formControl} color="dark" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Suppliers;
