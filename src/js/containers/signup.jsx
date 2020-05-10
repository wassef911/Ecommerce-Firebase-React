import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { signUpStart } from "../../redux/user/userActions";
import validation from "../../form-validations";

import TextInput from "../components/textInput";
import FormError from "../components/formError";

function SignUp({ signUpStart }) {
  const [User, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    signUpStart(User);
  };
  return (
    <div className="signup animated slideInRight fast">
      <h1>
        <span>I don't have an account</span>
      </h1>
      <h3>Sign up with your email and password.</h3>
      {User.displayName}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput title="Display Name">
          <input
            name="Name"
            ref={register(validation.Name)}
            type="text"
            className="form-control"
            placeholder="your name"
            aria-describedby="basic-addon1"
            value={User.displayName}
            onChange={(e) => setUser({ ...User, displayName: e.target.value })}
          ></input>
          {errors.Name && <FormError> * Name is invalid.</FormError>}
        </TextInput>

        <TextInput title="Email">
          <input
            name="Email"
            ref={register(validation.Email)}
            type="mail"
            className="form-control"
            placeholder="name@stuff.com"
            aria-describedby="basic-addon1"
            value={User.email}
            onChange={(e) => setUser({ ...User, email: e.target.value })}
          ></input>
          {errors.Email && <FormError> * Email is invalid.</FormError>}
        </TextInput>

        <TextInput title="Password">
          <input
            name="Password"
            ref={register(validation.Password)}
            type="password"
            className="form-control"
            placeholder="*********"
            aria-describedby="basic-addon1"
            value={User.password}
            onChange={(e) => setUser({ ...User, password: e.target.value })}
          ></input>
          {errors.Password && <FormError> * Password is invalid.</FormError>}
        </TextInput>

        <TextInput title="Repeat Password">
          <input
            type="password"
            className="form-control"
            placeholder="*********"
            aria-describedby="basic-addon1"
            value={User.confirmPassword}
            onChange={(e) =>
              setUser({ ...User, confirmPassword: e.target.value })
            }
          ></input>
          {User.password != User.confirmPassword && (
            <FormError> * Email is invalid.</FormError>
          )}
        </TextInput>

        <button type="submit" className="btn btn-block btn-primary rounded-0">
          SIGN IN
        </button>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (User) => dispatch(signUpStart(User)),
});

export default connect(null, mapDispatchToProps)(SignUp);
