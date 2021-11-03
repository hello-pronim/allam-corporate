import React from "react";
import { Persist } from "formik-persist";
import formik, { Formik, Field, Form } from "formik";
import { Redactor } from "@components/Common/Common";
import styles from "./RegisterPanel.module.scss";

export interface IRegisterPanelProps {
  data?: any;
}

const RegisterPanel = ({ data }: IRegisterPanelProps) => {
  return (
    <div className={styles.registerPanel}>
      <div className={styles.ModuleWrapper}>
        <div className={styles.ModuleLeft}>
          <Redactor>{data?.headingRedactor ?? ""}</Redactor>
          <Redactor>{data?.description ?? ""}</Redactor>
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

export default RegisterPanel;
