import React from "react";
import "./Mobile.css";

const Mobile = ({ validate, toggleAuthType, x }) => {
  return (
    <div id="Mobile">
      <p id="EnterMobile">Please enter your mobile number</p>
      <br />
      {/* <p>+91</p> */}
      <div className="form">
        <input
          type="text"
          placeholder=""
          className="mobile"
          required
          onChange={validate}
        />
        <label htmlFor="name" className="label-name">
          <span className="content-name">Mobile Number</span>
        </label>
      </div>

      <br />
      {x === 0 ? (
        <button
          id="use-email"
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
