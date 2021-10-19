import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUsingGoogle } = useAuth();
  const { signIngUsingEmail } = useAuth(email, password);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    // console.log(email, password);
    setPassword(e.target.value);
  };

  const processSignIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIngUsingEmail(email, password);
  };

  return (
    <Container className="my-5">
      <h2>Sign IN</h2>
      <div className="border w-75 mx-auto p-5 my-3">
        <form onSubmit={processSignIn} className="w-50 mx-auto">
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      <p>Or you can use google</p>
      <button className="btn btn-primary" onClick={signInUsingGoogle}>
        Google Sign In
      </button>
    </Container>
  );
};

export default Login;
