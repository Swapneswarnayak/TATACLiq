import React from "react";

const Otp = ({ validate, otpCred }) => {
  return (
    <div>
      <h2>Almost There</h2>
      <p>
        Please enter the 6 digit OTP that we just sent on{" "}
        {otpCred.type === "e" ? otpCred.i : "+91 " + otpCred.i}
      </p>
      <div className="otp-box">
        <input type="text" id="otp1" maxLength="1" />
        <input type="text" id="otp2" maxLength="1" />
        <input type="text" id="otp3" maxLength="1" />
        <input type="text" id="otp4" maxLength="1" />
        <input type="text" id="otp5" maxLength="1" />
        <input type="text" id="otp6" maxLength="1" onChange={validate} />
      </div>

      <div>
        <button>Edit Email</button>
        <button>Resend OTP</button>
      </div>
    </div>
  );
};

export default Otp;
