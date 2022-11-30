import React, { useState } from "react";
import Email from "../Email/Email";
import Mobile from "../Mobile/Mobile";

const UserAuth = () => {
  const [authType, toggleAuthType] = useState("email");

  const validate = () => {
    if (authType === "email") {
      const email = document.querySelector(".email").value;
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(mailformat)) {
        document.getElementById("continue").disabled = false;
      } else {
        document.getElementById("continue").disabled = true;
      }
    } else {
      const mobile = document.querySelector(".mobile").value;
      if (mobile.length === 10) {
        document.getElementById("continue").disabled = false;
      } else {
        document.getElementById("continue").disabled = true;
      }
    }
  };

  return (
    <div>
      <h2>Welcome to Tata CLiQ</h2>

      {authType === "email" ? (
        <div className="email-auth">
          <Email validate={validate} toggleAuthType={toggleAuthType} />
        </div>
      ) : (
        <div className="mobile-auth">
          <Mobile validate={validate} toggleAuthType={toggleAuthType} />
        </div>
      )}

      <button disabled id="continue">
        Continue
      </button>
    </div>
  );
};

export default UserAuth;
