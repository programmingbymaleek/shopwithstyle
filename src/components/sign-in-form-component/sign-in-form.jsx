import React from "react";
import FormInput from "../form-input-component/form-input";
import CustomButton from "../button.component/button.component";
import { useState, useContext } from "react";
import styled from "styled-components";
import googleLogo from "../../assests/google_logo.png";
import {
  signInWithGooglePopup,
  signUserInWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { User_Context } from "../../contexts/user.context.component";

function SigInForm() {
  const LogGoogleUsersIn = async () => {
    await signInWithGooglePopup();
  };

  const defaultValue = {
    email: "",
    password: "",
  };

  const [signInField, setSignInField] = useState(defaultValue);
  const [error, setError] = useState("");

  const { email, password } = signInField;

  const onFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignInField({ ...signInField, [name]: value });
  };

  const setDefaultField = () => {
    setSignInField(defaultValue);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responds = await signUserInWithEmailAndPassword(email, password);
      const { user } = responds;
      error ? setError("") : setDefaultField();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("No user associated with this email please register");
          break;
        case "auth/wrong-password":
          setError("Wrong Password for this email");
          break;
        default:
          setError(err.message);
      }
    }
  };

  return (
    <Sign_in_style>
      <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <p>{error}</p>
        <form action="" onSubmit={handleSubmit}>
          <FormInput
            input_type={"email"}
            label={"Enter Email Address"}
            name="email"
            value={email}
            onChangeHandler={onFieldChangeHandler}
          />
          <FormInput
            input_type={"password"}
            label={"Enter Password "}
            name="password"
            value={password}
            onChangeHandler={onFieldChangeHandler}
          />
          <Custom_btn_styles>
            <CustomButton
              type={"submit"}
              btn_label={"Sign In"}
              btntype="inverted"
            />{" "}
            <div className="or">
              <p>OR</p>
            </div>
            <CustomButton
              btn_label={"Google Sign-In"}
              func={LogGoogleUsersIn}
              className="btn_styles"
              btntype="google"
              imageprops={googleLogo}
              type="button"
            />
          </Custom_btn_styles>
        </form>
      </div>
    </Sign_in_style>
  );
}

export default SigInForm;

const Custom_btn_styles = styled.div`
  .or {
    position: relative;
    p {
      position: absolute;
      top: -1.3rem;
      left: -0.6rem;
      color: #212529;
    }
  }
  display: flex;
  gap: 1.2rem;
`;
const Sign_in_style = styled.div`
  .btn_styles {
    display: none;
  }
  div {
    p {
      color: red;
      font-weight: bold;
      margin-top:2rem;
    }
  
`;
