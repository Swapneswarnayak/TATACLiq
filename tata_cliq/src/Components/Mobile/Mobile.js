import React from "react";

const Mobile = ({ validate, toggleAuthType, x }) => {
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
      {x === 0 ? (
        <button
          onClick={() => {
            toggleAuthType("email");
          }}
        >
          Use Email Address
        </button>
      ) : (
        <></>
      )}
      <br />
    </div>
  );
};

export default Mobile;
