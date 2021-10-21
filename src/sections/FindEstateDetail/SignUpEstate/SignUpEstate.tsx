import React from "react";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import styles from "./SignUpEstate.module.scss";

export interface ISignUpEstateProps {}

const SignUpEstate = ({}: ISignUpEstateProps) => {
  return (
    <div className={styles.signUpEstate}>
      <div>
        <RegisterPanel />
      </div>
    </div>
  );
};

export default SignUpEstate;
