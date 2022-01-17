import React from "react";
import { landRegisterData } from "@libs/constants";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";

import styles from "./SignUpEstate.module.scss";

export interface ISignUpEstateProps {}

const SignUpEstate = ({}: ISignUpEstateProps) => {
  return (
    <div className={styles.signUpEstate}>
      <div>
        <RegisterPanel data={landRegisterData} />
      </div>
    </div>
  );
};

export default SignUpEstate;
