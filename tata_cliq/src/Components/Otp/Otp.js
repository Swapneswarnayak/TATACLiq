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
        <input
          type="text"
          className="otp"
          id="ist"
          maxLength="1"
          onKeyUp={() => {
            if (document.getElementById("ist").value.length) {
              document.getElementById("sec").focus();
            }
          }}
        />
        <input
          type="text"
          className="otp"
          id="sec"
          maxLength="1"
          onKeyUp={() => {
            if (document.getElementById("sec").value.length) {
              document.getElementById("third").focus();
            }
          }}
        />
        <input
          type="text"
          className="otp"
          id="third"
          maxLength="1"
          onKeyUp={() => {
            if (document.getElementById("third").value.length) {
              document.getElementById("fourth").focus();
            }
          }}
        />
        <input
          type="text"
          className="otp"
          id="fourth"
          maxLength="1"
          onKeyUp={() => {
            if (document.getElementById("fourth").value.length) {
              document.getElementById("fifth").focus();
            }
          }}
        />
        <input
          type="text"
          className="otp"
          id="fifth"
          maxLength="1"
          onKeyUp={() => {
            if (document.getElementById("fifth").value.length) {
              document.getElementById("sixth").focus();
            }
          }}
        />
        <input
          type="text"
          className="otp"
          id="sixth"
          maxLength="1"
          onChange={validate}
        />
      </div>

      <div id="Resend">
        <button>Edit Number</button>
        <button>Resend OTP</button>
      </div>
    </div>
  );
};

export default Otp;
