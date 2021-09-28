import React from "react";
import styles from "./RegisterModule.module.scss";
import css from "@styled-system/css";
import { ImageButton } from "@components/Common/Common";
import formik, { Formik, Field, Form } from "formik";
import { Persist } from "formik-persist";

export interface RegisterModuleProps {}

const RegisterModule = ({}: RegisterModuleProps) => {
  return (
    <div className={styles.RegisterModule}>
      <div className={styles.ModuleWrapper}>
        <div className={styles.ModuleLeft}>
          <h2>
            <span>Interested in the ideal lifestyle?</span>
            <br /> Register your interest today
          </h2>
          <p>
            Our history spans 25 years and during that time we’ve helped
            thousands of customers find a new home, with homes and <br />{" "}
            estates spread across many of Sydney’s most popular areas.
          </p>
        </div>
        <div className={styles.ModuleRight}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              postCode: "",
              terms: false,
            }}
            onSubmit={async (values, actions) => {
              await new Promise((r) => setTimeout(r, 500));
              actions.resetForm();
              console.log(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              {/* <label htmlFor="name">Name</label> */}
              <Field id="name" name="name" placeholder="Name" />
              {/* <label htmlFor="email">Email</label> */}
              <Field id="email" name="email" placeholder="Email" type="email" />
              {/* <label htmlFor="phone">Phone</label> */}
              <Field id="phone" name="phone" placeholder="Phone" type="tel" />
              {/* <label htmlFor="phone">Phone</label> */}
              <Field
                id="postCode"
                name="postCode"
                placeholder="Postcode"
                type="text"
              />
              <label className={styles.terms}>
                <Field type="checkbox" name="terms" />
                <span>
                  By clicking submit you acknowledge Allam may contact you via
                  email, you also agree to their Terms and Conditions.
                </span>
              </label>
              <button type="submit">Submit</button>
              <Persist name="register-form" />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterModule;
