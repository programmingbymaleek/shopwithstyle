import React from "react";
import styled from "styled-components";
import "./btn_styles.scss";

const Button_type = {
  google: "google-sign-in",
  inverted: "inverted",
};

// btn_label={"Google Sign-In"}
// func={LogGoogleUsersIn}
// className="btn_styles"
// btntype="google"
// imageprops={googleLogo}
// type={"button"}

function CustomButton({ btn_label, ...otherprops }) {
  return otherprops.imageprops ? (
    <ImageButton>
      <button
        className={`button-container ${Button_type[otherprops.btntype]}`}
        type={otherprops.type}
        onClick={otherprops.func}
      >
        <img src={`${otherprops.imageprops}`} alt={""} />
        {btn_label}
      </button>
    </ImageButton>
  ) : (
    <button
      className={`button-container ${Button_type[otherprops.btntype]}`}
      {...otherprops}
    >
      {" "}
      {btn_label}
    </button>
  );
}

export default CustomButton;

const ImageButton = styled.div`
  button {
    img {
      position: relative;
      top: 0.5rem;
      width: 1.5rem;
      margin-right: 0.6rem;
      padding-top: 0.2rem;
    }
  }
`;
