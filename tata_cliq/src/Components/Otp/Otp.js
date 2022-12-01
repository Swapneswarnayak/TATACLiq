import React from "react";
import "./Otp.css";

const Otp = ({ validate, otpCred }) => {
  return (
    <div>
      <h1 className="there">Almost There</h1>
      <p>
        Please enter the 6 digit OTP that we just sent on{" "}
        {otpCred.type === "e" ? otpCred.i : "+91 " + otpCred.i}
      </p>
      <div className="otp-box">
        <input type="text" className="otp" maxLength="1" />
        <input type="text" className="otp" maxLength="1" />
        <input type="text" className="otp" maxLength="1" />
        <input type="text" className="otp" maxLength="1" />
        <input type="text" className="otp" maxLength="1" />
        <input type="text" className="otp" maxLength="1" onChange={validate} />
      </div>

      <div id="Resend">
        <button>Edit Number</button>
        <button>Resend OTP</button>
      </div>
    </div>
  );
};

export default Otp;
