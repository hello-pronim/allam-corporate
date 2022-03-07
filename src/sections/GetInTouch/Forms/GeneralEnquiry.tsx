import React, { useState } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Button from "@components/Common/Button/Button";
import Input from "@components/Common/Input/Input";
import Textarea from "@components/Common/Textarea/Textarea";

import styles from "./forms.module.scss";
import { mutateAPI } from "@libs/api";
import { gql } from "@apollo/client";

export interface GeneralEnquiryProps {}

const GeneralEnquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [response, setResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const GENERAL_MUTATION = gql`
    mutation saveSubmission(
      $firstName: String!
      $lastName: String!
      $email: String!
      $postCode: String!
      $contactNumber: String!
      $comment: String!
    ) {
      save_general_Submission(
        firstName: $firstName
        lastName: $lastName
        email: $email
        contactNumber: $contactNumber
        postCode: $postCode
        comment: $comment
      ) {
        firstName
        lastName
        email
        contactNumber
        postCode
        comment
      }
    }
  `;

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const variables = {
      firstName: data?.FirstName,
      lastName: data?.LastName,
      email: data?.Email,
      contactNumber: data?.Phone,
      postCode: data?.PostCode,
      comment: data?.comment,
    };
    await mutateAPI(GENERAL_MUTATION, variables);
    setResponse(true);
  };

  return (
    <>
      {!response ? (
        <form
          className={classNames(styles.Form)}
          onSubmit={handleSubmit(onSubmit)}
        >
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
                name="PostCode"
                className={styles.formControl}
                placeholder="Postcode"
                register={register}
              />
              <p className={styles.formControl}>
                Note: By submitting this form you agree to Allam’s Terms and
                Conditions and Allam may contact you via email, phone or SMS.
              </p>
              <Button className={styles.formControl} color="dark" type="submit">
                {isLoading ? "Loading..." : "Submit"}
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
      ) : (
        <h5>
          Thank you for submitting your request. We will aim to get back to you
          in the next 2 - 3 business days (if not sooner).
        </h5>
      )}
    </>
  );
};

export default GeneralEnquiry;
