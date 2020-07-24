import React from "react";
import PropTypes from "prop-types";

const FormInput = (props) => {
  const {
    id,
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    label,
  } = props;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={className}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={{ border: error ? "solid 1px red" : "" }}
        autoComplete="false"
      />
      {error ? <p style={{ color: "red", fontSize: "14px" }}>{error}</p> : ""}
    </>
  );
};

FormInput.defaultProps = {
  type: "text",
  className: "",
};

FormInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export { FormInput };
