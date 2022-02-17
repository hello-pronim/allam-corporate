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

export interface BuyingProps {}

const Buying = () => {
  const radioButtonsData = [
    {
      value: "1 – 3 mths",
      text: "1 – 3 mths",
    },
    {
      value: "3 – 6 mths",
      text: "3 – 6 mths",
    },
    {
      value: "not sure",
      text: "not sure",
    },
  ];
  const employmentTypes: any = [];
  const estates: any = [];
  const buyerTypes: any = [];

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
          />
        </div>
        <div className={styles.formCol}>
          <div>
            <Select
              className={styles.formControl}
              name="estate"
              placeholder="What estate are you interested in?"
              options={estates}
            />
            <Select
              className={styles.formControl}
              name="buyerType"
              placeholder="What type of buyer are you?"
              options={buyerTypes}
            />
          </div>
          <div>
            <h6>I’m looking to buy in the next?</h6>
            <RadioButtons
              className={styles.formControl}
              name="timeFrame"
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
      </div>
    </form>
  );
};

export default Buying;
