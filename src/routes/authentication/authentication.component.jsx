import React from "react";
import styled from "styled-components";
import SigInForm from "../../components/sign-in-form-component/sign-in-form";
import SignUpForm from "../../components/sign-up-form-component/sign-up.component";
import UserProfile from "../../components/userprofile.component.jsx/user.profile";
import { useSelector } from "react-redux";
function Authentication() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div>
      {currentUser ? (
        <UserProfile user={currentUser} />
      ) : (
        <UserAuth_Styles>
          <SigInForm />
          <SignUpForm />
        </UserAuth_Styles>
      )}
    </div>
  );
}

export default Authentication;

const UserAuth_Styles = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  gap: 6rem;
  justify-content: center;
  align-items: center;
`;
