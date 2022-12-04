import React from "react";
import "./Email.css";

const Email = ({ validate, toggleAuthType }) => {
  return (
    <div id="Email">
      <p id="EnterEmail">Please enter your email address</p>

      <br />
      <div className="form">
        <input
          type="email"
          placeholder=""
          className="email"
          autoComplete="off"
          required
          onChange={validate}
        />
        <label htmlFor="name" className="label-name">
          <span className="content-name">E-mail Address</span>
        </label>
      </div>
      <br />

      <button
        id="use-mobile"
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
