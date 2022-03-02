import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Button from "@components/Common/Button/Button";
import Checkbox from "@components/Common/Checkbox/Checkbox";
import Input from "@components/Common/Input/Input";
import RadioButtons from "@components/Common/RadioButtons/RadioButtons";
import Select from "@components/Common/FormSelect/FormSelect";
import Textarea from "@components/Common/Textarea/Textarea";
import styles from "./forms.module.scss";
import CheckboxButtons from "@components/Common/CheckboxButtons/CheckboxButtons";

export interface BuyingProps { }

export interface EstateObj {
  value: string;
  text: string;
}

const Buying = ({
  selectedEstate,
  estateList,
  inspection,
  handleOnSubmit,
}: {
  estateList: any;
  selectedEstate: string;
  inspection?: boolean;
  handleOnSubmit: () => void;
}) => {
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

  const checkboxButtonsData1 = [
    { value: "Week day", text: "Week day" },
    { value: "Weekend", text: "Weekend" },
  ];
  const checkboxButtonsData2 = [
    { value: "Morning", text: "Morning" },
    { value: "Afternoon", text: "Afternoon" },
  ];

  const estates: any = [];
  const buyerTypes: any = [
    {
      text: "First home buyer",
      value: "First home buyer"
    },
    {
      text: "Moving / new home",
      value: "Moving / new home"
    },
    {
      text: "Retired",
      value: "Retired"
    }
  ];
  const appointmentOptions: any = [
    {
      text: "Yes",
      value: "Yes",
    },
    {
      text: "No",
      value: "No",
    },
  ];

  const [appointmentOptionvalue, setAppointmentOptionvalue] = useState("");
  useEffect(() => {
    if (inspection) {
      setAppointmentOptionvalue("Yes");
    }
  }, [inspection]);

  estateList.estateList.entries.map((estate: any) => {
    let obj = {} as EstateObj;
    obj.value = estate.slug;
    obj.text = estate.title;
    estates.push(obj);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors)

  return (
    <form className={classNames(styles.Form)} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Input
            className={`${styles.formControl} ${errors['FirstName'] ? styles.hasError : ''}`}
            type="text"
            name="FirstName"
            placeholder="First Name"
            register={register}
            validation={{ required: true }}
          />
          <Input
            className={`${styles.formControl} ${errors['LastName'] ? styles.hasError : ''}`}
            type="text"
            name="LastName"
            placeholder="Last Name"
            register={register}
            validation={{ required: true }}
          />
          <Input
            className={`${styles.formControl} ${errors['Email'] ? styles.hasError : ''}`}
            type="email"
            name="Email"
            placeholder="Email"
            register={register}
            validation={{ required: true }}
          />
          <Input
            className={`${styles.formControl} ${errors['Phone'] ? styles.hasError : ''}`}
            type="text"
            name="Phone"
            placeholder="Contact Number"
            register={register}
            validation={{ required: true }}
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
            <h6>I’m looking to buy in the next?</h6>
            <RadioButtons
              className={`${styles.formControl} ${errors['pba__BuyingTimeFrame_pb__c'] ? styles.hasError : ''}`}
              name="pba__BuyingTimeFrame_pb__c"
              data={radioButtonsData}
              register={register}
              validation={{ required: true }}
            />
          </div>
          <div>
            <Select
              className={`${styles.formControl} ${errors['Project_of_Interest__c'] ? styles.hasError : ''}`}
              name="Project_of_Interest__c"
              placeholder="What estate are you interested in?"
              options={estates}
              register={register}
              validation={{ required: true }}
            />
            <Select
              className={`${styles.formControl} ${errors['Buyer_Profile__c'] ? styles.hasError : ''}`}
              name="Buyer_Profile__c"
              placeholder="What type of buyer are you?"
              options={buyerTypes}
              register={register}
              validation={{ required: true }}
            />
            <Select
              className={styles.formControl}
              name="Appointment_Request__c"
              placeholder="Do you want to make an appointment"
              options={appointmentOptions}
              value={appointmentOptionvalue}
              register={register}
              onChange={(e) => setAppointmentOptionvalue(e.target.value)}
            />
          </div>
          {appointmentOptionvalue === "Yes" ? (
            <div>
              <h6>Choose a preferred time</h6>
              <CheckboxButtons
                name="Appointment_Preferred_Day__c"
                className={styles.formControl}
                data={checkboxButtonsData1}
              />
              <h6>and</h6>
              <CheckboxButtons
                name="Appointment_Preferred_Time__c"
                className={styles.formControl}
                data={checkboxButtonsData2}
              />
            </div>
          ) : (
            ""
          )}
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

export default Buying;
