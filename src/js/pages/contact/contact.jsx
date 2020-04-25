import React, { useState } from "react";

import { createIssueDocuments } from "../../../firebase/firebase";

import TextInput from "../../components/textInput";

import "./contact.scss";
function Contact() {
  const [Msg, setMsg] = useState("");
  const handleSubmit = () => {
    createIssueDocuments(Msg);
  };
  return (
    <div className="d-flex justify-content-center  m-4">
      <form
        onSubmit={() => handleSubmit()}
        className="contact d-flex flex-column justify-content-center"
      >
        <TextInput title="Your Email">
          <input
            type="text"
            className="form-control"
            placeholder="name@stuff.com"
            aria-describedby="basic-addon1"
          ></input>
        </TextInput>

        <TextInput title="Your Email">
          <input
            type="text"
            className="form-control"
            placeholder="name@stuff.com"
            aria-describedby="basic-addon1"
          ></input>
        </TextInput>

        <div class="input-group my-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Your message </span>
          </div>
          <textarea
            class="form-control"
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="my-4 btn btn-block  btn-primary rounded-0"
        >
          Send &#8594;
        </button>
      </form>
    </div>
  );
}

export default Contact;
