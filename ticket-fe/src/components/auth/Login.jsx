import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FormInput } from "../reusable/FormInput";
import { Button } from "../reusable/Button";
import { validateInputs } from "../../helpers/Helpers";

const Login = (props) => {
  const [user, setUser] = useState({
    data: {
      username: "",
      password: "",
    },
  });
  const [error, setError] = useState({
    usernameError: "",
    passwordError: "",
  });

  const { username, password } = user.data;
  const { usernameError, passwordError } = error;

  const onChange = (event) => {
    const { name, value } = event.target;
    const { data } = user;
    setUser({
      data: { ...data, [name]: value }, // match the name with the value
    });
  };

  const onLoginUser = (event) => {
    event.preventDefault();

    const isValid = validateInputs(user.data, setError);
    // login
    if (isValid) {
      console.log(user.data);
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={onLoginUser}>
          <h3>Sign In</h3>
          <div className="form-group">
            <FormInput
              type="text"
              name="username"
              label="Username"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              error={usernameError}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <FormInput
              type="password"
              name="password"
              label="Password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              error={passwordError}
              onChange={onChange}
            />
          </div>

          <Button
            className="btn btn-primary btn-block"
            type="submit"
            label="Sign In"
          />
          <p className="forgot-password text-right">
            Not yet registered? <Link to={"/sign-up"}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
