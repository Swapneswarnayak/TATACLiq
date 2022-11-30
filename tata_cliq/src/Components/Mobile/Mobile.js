import React from "react";

const Mobile = ({ validate, toggleAuthType }) => {
  return (
    <div>
      <p>Please enter your mobile number</p>
      <label>Mobile Number</label>
      <br />
      +91
      <input
        type="text"
        placeholder="Enter Mobile Number"
        className="mobile"
        onChange={validate}
      />
      <br />
      <button
        onClick={() => {
          toggleAuthType("email");
        }}
      >
        Use Email Address
      </button>
      <br />
    </div>
  );
};

export default Mobile;
