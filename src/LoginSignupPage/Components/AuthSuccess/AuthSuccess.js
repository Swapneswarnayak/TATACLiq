import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../ProductSection/Context/Context";
import { useContext } from "react";
const AuthSuccess = ({ validate }) => {
  const { setloginInfo } = useContext(LoginContext);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setloginInfo(JSON.parse(sessionStorage.getItem("loggedIn")));
      navigate("/", { replace: true });
    }, 3000);
  }, [navigate]);

  return (
    <div style={{ marginTop: "50px" }}>
      {validate()}
      <img
        src="https://www.tatacliq.com/src/mobile-number-login/images/sucess_login.svg"
        alt="success"
      />

      <div style={{ marginTop: "10%" }}>
        <h2 style={{ fontSize: "20px" }}>You're Successfully</h2>
        <h2 style={{ fontSize: "20px" }}>Logged In</h2>
        <br />
        <h2 style={{ fontSize: "25px" }}>Start CLiQuing</h2>
      </div>
    </div>
  );
};

export default AuthSuccess;
