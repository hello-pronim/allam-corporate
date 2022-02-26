import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@components/Common/Common";
import { Redactor } from "@components/Common/Common";
import styles from "./RegisterPanel.module.scss";

export interface IRegisterPanelProps {
  data?: any;
}

const RegisterPanel = ({ data }: IRegisterPanelProps) => {
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
    <div className={styles.registerPanel}>
      <div className={styles.ModuleWrapper}>
        <div className={styles.ModuleLeft}>
          <Redactor>{data?.headingRedactor ?? ""}</Redactor>
          <Redactor>{data?.description ?? ""}</Redactor>
        </div>
        <div className={styles.ModuleRight}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              validation={{ required: true }}
              register={register}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              register={register}
              validation={{ required: true }}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Contact number"
              register={register}
              validation={{ required: true }}
            />
            <Input
              type="text"
              name="postCode"
              placeholder="Post code"
              register={register}
              validation={{ required: true }}
            />

            <label className={styles.terms}>
              <input type="checkbox" name="terms" />
              <span>
                By clicking submit you acknowledge Allam may contact you via
                email, you also agree to their Terms and Conditions.
              </span>
            </label>

            <Button color="dark" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;
