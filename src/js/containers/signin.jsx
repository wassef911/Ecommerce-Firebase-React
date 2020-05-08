import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import {
  googleSigninStart,
  EmailSigninStart,
} from "../../redux/user/userActions";
import validation from "../../form-validations";

import TextInput from "../components/textInput";
import FormError from "../components/formError";

function SignIn({ googleSignInStart, emailSigninStart }) {
  const [User, setUser] = useState({ email: "", password: "" });

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    emailSigninStart(User);
  };
  return (
    <div className="signin animated slideInLeft fast">
      <h1>
        <span>I already have an account</span>
      </h1>
      <h3>Sign in with your email and password.</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput title="Email">
          <input
            name="Email"
            ref={register(validation.Email)}
            type="text"
            className="form-control"
            placeholder="name@stuff.com"
            aria-describedby="basic-addon1"
            value={User.email}
            onChange={(e) => setUser({ ...User, email: e.target.value })}
          ></input>
          {errors.Email && <FormError>* Email is invalid.</FormError>}
        </TextInput>
        <TextInput title="Password">
          <input
            name="Password"
            ref={register(validation.Password)}
            type="password"
            className="form-control"
            placeholder="************"
            aria-describedby="basic-addon1"
            value={User.password}
            onChange={(e) => setUser({ ...User, password: e.target.value })}
          ></input>
          {errors.Password && <FormError> * Passworld is invalid.</FormError>}
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
  emailSigninStart: (EmailAndPassword) =>
    dispatch(EmailSigninStart(EmailAndPassword)),
});

export default connect(null, mapDisptachToProps)(SignIn);
