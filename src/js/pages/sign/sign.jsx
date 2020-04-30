import React from "react";
import "./signInUP.scss";
import SignIn from "../../containers/signin";
import SignUp from "../../containers/signup";
function Sign() {
  return (
    <div className="animated flash faster sign d-flex flex-sm-column flex-xl-row flex-wrap align-items-center justify-content-around pt-4">
      <SignIn />
      <br />
      <SignUp />
    </div>
  );
}

export default Sign;
