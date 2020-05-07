import React, { useState } from "react";
import { connect } from "react-redux";

import {
  googleSigninStart,
  EmailSigninStart,
} from "../../redux/user/userActions";

import TextInput from "../components/textInput";

function SignIn({ googleSignInStart, EmailSigninStart }) {
  const [User, setUser] = useState({ email: "", password: "" });
  const handleSubmit = async () => {
    EmailSigninStart(User);
  };

  return (
    <div className="signin animated slideInLeft fast">
      <h1>
        <span>I already have an account</span>
      </h1>
      <h3>Sign in with your email and password.</h3>
      <form onSubmit={() => handleSubmit()}>
        <TextInput title="Email">
          <input
            type="text"
            className="form-control"
            placeholder="name@stuff.com"
            aria-describedby="basic-addon1"
            value={User.displayName}
            onChange={(e) => setUser({ ...User, displayName: e.target.value })}
          ></input>
        </TextInput>

        <TextInput title="Password">
          <input
            type="password"
            className="form-control"
            placeholder="************"
            aria-describedby="basic-addon1"
            value={User.password}
            onChange={(e) => setUser({ ...User, password: e.target.value })}
          ></input>
        </TextInput>

        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-block mr-1 btn-primary rounded-0"
          >
            SIGN IN
          </button>
          <br />
          <button
            type="button"
            className="btn btn-block ml-1 btn-primary rounded-0"
            onClick={() => googleSignInStart()}
          >
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
}

const mapDisptachToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSigninStart()),
  EmailSigninStart: (EmailAndPassword) =>
    dispatch(EmailSigninStart(EmailAndPassword)),
});

export default connect(null, mapDisptachToProps)(SignIn);
