import React, { useState } from "react";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="signin">
      <h1>I already have an account </h1>
      <h3>Sign in with your email and password.</h3>
      <div className="input-group my-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
        </div>
        <input
          type="mail"
          onChange={(e) => setemail(e.target.value)}
          className="form-control"
          placeholder="name@stuff.com"
          aria-describedby="basic-addon1"
        ></input>
      </div>

      <div className="input-group my-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Password
          </span>
        </div>
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          className="form-control"
          placeholder="*********"
          aria-describedby="basic-addon1"
        ></input>
      </div>

      <div className="d-flex justify-content-between">
        <button
          type="submit"
          className="btn btn-block btn-outline-primary rounded-0"
        >
          SIGN IN
        </button>
        <br />
        <button
          type="submit"
          className="btn btn-block btn-outline-primary rounded-0"
        >
          SIGN IN WITH GOOGLE
        </button>
      </div>
    </div>
  );
}

export default SignIn;
