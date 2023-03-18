import React from "react";
import CustomButton from "../button.component/button.component";
import FormInput from "../form-input-component/form-input";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import styled from "styled-components";

function SignUpForm() {
  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [error, setErrors] = useState("");
  const { email, password, confirmPassword, displayName } = formValues;

  const changeFormValues = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const resetForm = () => {
    setFormValues(defaultValues);
  };
  const signUpformHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return setErrors("Password do not match");
    }
    if (password.length < 6) {
      return setErrors("Length of passwoerd too small");
    }
    try {
      const responds = await createAuthUserWithEmailAndPassword(
        email,
        password,
        confirmPassword
      );
      const { user } = responds;
      const UserDoc = await createUserDocumentFromAuth(user, { displayName });
      resetForm();
      setErrors("");
    } catch (error_data_creation) {
      setErrors(
        `There was a problem creating user profile: ${error_data_creation.message}`
      );
    }
  };

  return (
    <Sign_up_container>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password </span>
      <form action="" onSubmit={signUpformHandler}>
        <FormInput
          input_type={"text"}
          label={"Display Name"}
          name="displayName"
          value={displayName}
          onChangeHandler={changeFormValues}
        />
        <FormInput
          input_type={"email"}
          label={"Email Address"}
          name="email"
          value={email}
          onChangeHandler={changeFormValues}
        />
        <FormInput
          input_type={"password"}
          label={"Password"}
          name="password"
          value={password}
          onChangeHandler={changeFormValues}
        />
        <FormInput
          input_type={"password"}
          label={"Confirm Password"}
          name="confirmPassword"
          value={confirmPassword}
          onChangeHandler={changeFormValues}
        />
        <CustomButton btn_label={"Sign up"} btn-type="submit" />
      </form>
    </Sign_up_container>
  );
}

export default SignUpForm;

const Sign_up_container = styled.div`
  display: flex;
  width: 380px;
  flex-direction: column;

  h2 {
    margin-top: 10px 0;
  }
`;
