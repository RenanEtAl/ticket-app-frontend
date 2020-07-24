import React from "react";
import PropTypes from "prop-types";
import "./Auth.css";
import { FormInput } from "../reusable/FormInput";

const Register = (props) => {

    const onChange = () => {

    }
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
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
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
