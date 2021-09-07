import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import FormContentContainer from "../formContentContainer/FormContentContainer";

const SignUp = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const goToSignIn = () => {
    history.push("/signin/email");
  };
  const signUp = () => {
    console.log("do something");
    setLoading(true);
    // history.goBack();
  };
  const changeEmailHan = (event) => {
    console.log(event.target.value);
  };
  return (
    <FormContentContainer
      heading="Sign up"
      inputFieldLabel="Email"
      leftBtnLabel="Sign in"
      leftBtnClickHandler={goToSignIn}
      rightBtnLabel="Next"
      rightBtnClickHandler={signUp}
      loading={loading}
    />
  );
};

export default withRouter(SignUp);
