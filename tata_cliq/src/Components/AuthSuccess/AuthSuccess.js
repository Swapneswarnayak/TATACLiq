import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Nav from "../Nav/Nav";

const AuthSuccess = ({ validate }) => {
  const timeOut = useRef({});
  useEffect(() => {
    setTimeout(() => {
      timeOut.current = 1;
    }, 1000);
  }, []);

  if (timeOut.current === 1) {
    return <Nav />;
  } else {
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
  }
};

export default AuthSuccess;
