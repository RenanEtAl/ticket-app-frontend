import React from "react";
import PropTypes from "prop-types";

const RadioInput = (props) => {
  const { id, name, onChange, className, value, error, labelClassName } = props;
  return (
    <>
      <input
        className={className}
        type="radio"
        name={name}
        id={id}
        value={value}
        autoComplete="false"
        onChange={onChange}
      />
      <label
        className={labelClassName}
        htmlFor={id}
        style={{ color: error ? "red" : "#36404a", fontWeight: "normal" }}
      >
        {value}
      </label>
    </>
  );
};

RadioInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  labelClassName: PropTypes.string,
};

export { RadioInput };
