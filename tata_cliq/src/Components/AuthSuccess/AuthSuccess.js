import React from "react";

const AuthSuccess = ({ validate }) => {
  return (
    <div>
      {validate()}
      <img
        src="https://www.tatacliq.com/src/mobile-number-login/images/sucess_login.svg"
        alt="success"
      />
      <h2>You're Successfully</h2>
      <h2>Logged In</h2>
      <h2>Start CLiQuing</h2>
    </div>
  );
};

export default AuthSuccess;
