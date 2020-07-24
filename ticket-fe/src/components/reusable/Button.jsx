import React from "react";

const Button = (props) => {
  const { className, type, handleClick, disabled, label } = props;
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={handleClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export { Button };
