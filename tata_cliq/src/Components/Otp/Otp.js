import React from "react";

const Otp = () => {
  return (
    <div>
      <h2>Almost There</h2>
      <p>
        Please enter the 6 digit OTP that we just sent on anjalicuh909@gmail.com
      </p>
      <div className="otp-box">
        <input type="text" id="otp1" maxLength="1" />
        <input type="text" id="otp2" maxLength="1" />
        <input type="text" id="otp3" maxLength="1" />
        <input type="text" id="otp4" maxLength="1" />
        <input type="text" id="otp5" maxLength="1" />
        <input type="text" id="otp6" maxLength="1" />
      </div>

      <div>
        <button>Edit Email</button>
        <button>Resend OTP</button>
      </div>
    </div>
  );
};

export default Otp;
