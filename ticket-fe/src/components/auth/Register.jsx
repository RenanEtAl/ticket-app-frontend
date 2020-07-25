import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Auth.css";
import { FormInput } from "../reusable/FormInput";
import { RadioInput } from "../reusable/RadioInput";
import { Button } from "../reusable/Button";
import { validateInputs } from "../../helpers/Helpers";

import { createUser } from "../../redux/actions/auth";

const Register = (props) => {
  const { createUser, isAuthenticated, history } = props;

  const [user, setUser] = useState({
    data: {
      username: "",
      password: "",
      role: "",
    },
  });

  const [error, setError] = useState({
    usernameError: "",
    passwordError: "",
    roleError: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      // take user to dashboard page
      history.push("/dashboard");
    }
  }, [isAuthenticated, history]);

  const { username, password } = user.data;
  const { usernameError, passwordError, roleError } = error;

  const onChange = (event) => {
    const { name, value } = event.target;
    const { data } = user;
    setUser({
      data: { ...data, [name]: value }, // match the name with the value
    });
  };

  const onRegisterUser = (event) => {
    event.preventDefault();
    console.log(user);
    // validate
    const isValid = validateInputs(user.data, setError);
    if (isValid) {
      // create user
      // console.log(user.data);
      createUser(user.data);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={onRegisterUser}>
          <h3>Sign Up</h3>
          <div className="form-group">
            <FormInput
              className="form-control"
              type="text"
              name="username"
              label="Username"
              placeholder="Enter Username"
              value={username}
              error={usernameError}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <FormInput
              className="form-control"
              type="password"
              name="password"
              label="Password"
              placeholder="Enter Password"
              value={password}
              error={passwordError}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <br />
            <div className="form-check form-check-inline">
              <RadioInput
                labelClassName="form-check-label"
                className="form-check-input"
                id="inlineRadio1"
                name="role"
                value="User"
                error={roleError}
                onChange={onChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <RadioInput
                labelClassName="form-check-label"
                className="form-check-input"
                id="inlineRadio2"
                name="role"
                value="Admin"
                error={roleError}
                onChange={onChange}
              />
            </div>
          </div>
          <Button
            className="btn btn-primary btn-block"
            type="submit"
            label="Sign Up"
          />
          <p className="forgot-password text-right">
            Already have an account? <Link to={"/sign-in"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  createUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { createUser })(Register);
