import React, { useState } from "react";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase";
import { googleSigninStart } from "../../redux/user/userActions";

import TextInput from "../components/textInput";

function SignIn({ googleSignInStart }) {
  const [User, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = User;
    try {
      await auth.signInWithEmailAndPassword(email.trim(), password);
      setUser({ email: "", password: "" });
      console.log(User);
    } catch (err) {
      console.log("signin .js", err);
    }
  };

  return (
    <div className="signin animated slideInLeft fast">
      <h1>
        <span>I already have an account</span>
      </h1>
      <h3>Sign in with your email and password.</h3>
      <form onSubmit={handleSubmit}>
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
            type="text"
            className="form-control"
            placeholder="************"
            aria-describedby="basic-addon1"
            value={User.displayName}
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
            onClick={googleSignInStart}
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
});

export default connect(null, mapDisptachToProps)(SignIn);
