import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthSuccess = ({ validate }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  }, [navigate]);

  return (
    <div style={{ marginTop: "50px" }}>
      {validate()}
      <img
        src="https://www.tatacliq.com/src/mobile-number-login/images/sucess_login.svg"
        alt="success"
      />
      <div style={{ marginTop: "30px" }}>
        <h2>You're Successfully</h2>
        <h2>Logged In</h2>
        <h2>Start CLiQuing</h2>
      </div>
    </div>
  );
};

export default AuthSuccess;
