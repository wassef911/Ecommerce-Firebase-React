import React from "react";

import "./contact.scss";
function Contact() {
  return (
    <div className="d-flex justify-content-center m-4">
      <form className="contact ">
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
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-block mr-1 btn-primary rounded-0"
          >
            SIGN IN
          </button>
          <br />
          <button
            type="submit"
            className="btn btn-block ml-1 btn-primary rounded-0"
          >
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
