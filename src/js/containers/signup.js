import React from "react";

function SignUp() {
  return (
    <div className="signup">
      <h1>I don't have an account </h1>
      <h3>Sign up with your email and password.</h3>
      <div className="input-group my-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Display Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="your name"
          aria-describedby="basic-addon1"
        ></input>
      </div>
      <div className="input-group my-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
        </div>
        <input
          type="mail"
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
          className="form-control"
          placeholder="*********"
          aria-describedby="basic-addon1"
        ></input>
      </div>
      <div className="input-group my-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Repeat Password
          </span>
        </div>
        <input
          type="password"
          className="form-control"
          placeholder="*********"
          aria-describedby="basic-addon1"
        ></input>
      </div>

      <button
        type="submit"
        className="btn btn-block btn-outline-primary rounded-0"
      >
        SIGN IN
      </button>
    </div>
  );
}

export default SignUp;
