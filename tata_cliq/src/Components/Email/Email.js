import React from "react";

const Email = ({ validate, toggleAuthType }) => {
  return (
    <div>
      <p>Please enter your email address</p>
      <label>E-mail address</label>
      <br />
      <input
        type="email"
        placeholder="Enter Email Address"
        className="email"
        onChange={validate}
      />
      <br />
      <button
        onClick={() => {
          toggleAuthType("mobile");
        }}
      >
        Use Mobile Number
      </button>
      <br />
    </div>
  );
};

export default Email;
