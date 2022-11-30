import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../Actions/userAction";
import AuthSuccess from "../AuthSuccess/AuthSuccess";
import Email from "../Email/Email";
import Mobile from "../Mobile/Mobile";
import Otp from "../Otp/Otp";
import "./UserAuth.css";

const UserAuth = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((storeData) => {
    return storeData.users;
  });
  const [authType, toggleAuthType] = useState("email");
  const [stage, setStage] = useState(0);
  const userInfo = useRef({ email: "", mobile: "" });
  const otpCred = useRef({ type: "", i: "" });

  useEffect(() => {
    document.getElementById("continue").disabled = true;
    if (usersData.length === 0) {
      getUsersData();
    }
  });

  const getUsersData = async () => {
    const res = await fetch("http://localhost:4000/users");
    const data = await res.json();
    // console.log(data);
    userAction(data, dispatch);
  };

  const register = async () => {
    // const user = {
    //   email,
    //   mobile,
    // };

    const requestOption = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo.current),
    };

    await fetch("http://localhost:4000/users", requestOption);
    // const data = await res.json();
    // console.log(data);
    getUsersData();
  };

  const validate = () => {
    if (authType === "email") {
      const email = document.querySelector(".email").value;
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(mailformat)) {
        document.getElementById("continue").disabled = false;
      } else {
        document.getElementById("continue").disabled = true;
      }
    } else if (authType === "mobile") {
      const mobile = document.querySelector(".mobile").value;
      if (mobile.length === 10) {
        document.getElementById("continue").disabled = false;
      } else {
        document.getElementById("continue").disabled = true;
      }
    } else if (authType === "otp") {
      //console.log("logic");
      document.getElementById("continue").disabled = false;
    } else if (authType === "success") {
      document.getElementById("continue").style.display = "none";
    }
  };

  const foo = () => {
    if (stage === 0) {
      // login logic
      if (authType === "email") {
        const email = document.querySelector(".email").value;
        const info = usersData.filter((elem) => {
          return elem.email === email;
        });
        // console.log(info);
        if (info.length === 0) {
          setStage(1);
          toggleAuthType("mobile");
          userInfo.current.email = email;
        } else {
          setStage(2);
          otpCred.current.type = "e";
          otpCred.current.i = email;
          toggleAuthType("otp");
        }
      } else {
        const mobile = document.querySelector(".mobile").value;
        const info = usersData.filter((elem) => {
          return elem.mobile === mobile;
        });
        // console.log(info);
        if (info.length === 0) {
          setStage(1);
          toggleAuthType("mobile");
        } else {
          setStage(2);
          otpCred.current.type = "m";
          otpCred.current.i = mobile;
          toggleAuthType("otp");
        }
      }
    } else if (stage === 1) {
      userInfo.current.mobile = document.querySelector(".mobile").value;
      register(userInfo);
      setStage(2);
      otpCred.current.type = "m";
      otpCred.current.i = document.querySelector(".mobile").value;
      toggleAuthType("otp");
    } else if (stage === 2) {
      setStage(3);
      toggleAuthType("success");
    }
  };

  return (
    <div id="pop-up">
      <div className="close-btn">&times;</div>
      {authType === "email" ? (
        <div className="email-auth">
          <div className="pop">
            <h1>Welcome to Tata CLiQ</h1>
          </div>
          <Email validate={validate} toggleAuthType={toggleAuthType} />
        </div>
      ) : authType === "mobile" ? (
        <div className="mobile-auth">
          <div className="pop">
            <h1>Welcome to Tata CLiQ</h1>
          </div>
          <Mobile
            validate={validate}
            toggleAuthType={toggleAuthType}
            x={stage}
          />
        </div>
      ) : authType === "otp" ? (
        <Otp validate={validate} otpCred={otpCred.current} />
      ) : (
        <AuthSuccess validate={validate} />
      )}

      <button id="continue" onClick={foo}>
        Continue
      </button>
    </div>
  );
};

export default UserAuth;
