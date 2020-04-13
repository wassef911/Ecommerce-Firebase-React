import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase";

function SignUp() {
  const [User, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = User;
    if (password != confirmPassword) {
      alert("passwords don't match ! ");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log("signup .js", err);
    }
  };
  return (
    <div className="signup">
      <h1>I don't have an account </h1>
      <h3>Sign up with your email and password.</h3>
      <form onSubmit={handleSubmit}>
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
            value={User.displayName}
            onChange={(e) => setUser({ ...User, displayName: e.target.value })}
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
            value={User.email}
            onChange={(e) => setUser({ ...User, email: e.target.value })}
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
            value={User.password}
            onChange={(e) => setUser({ ...User, password: e.target.value })}
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
            value={User.confirmPassword}
            onChange={(e) =>
              setUser({ ...User, confirmPassword: e.target.value })
            }
          ></input>
        </div>

        <button
          type="submit"
          className="btn btn-block btn-outline-primary rounded-0"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default SignUp;
