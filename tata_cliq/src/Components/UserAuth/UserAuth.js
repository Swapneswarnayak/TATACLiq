import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../Actions/userAction";
import AuthSuccess from "../AuthSuccess/AuthSuccess";
import Email from "../Email/Email";
import Mobile from "../Mobile/Mobile";
import Otp from "../Otp/Otp";

const UserAuth = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((storeData) => {
    return storeData.users;
  });
  const [authType, toggleAuthType] = useState("email");
  const [stage, setStage] = useState(0);

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
      setStage(1);
      toggleAuthType("mobile");
    } else if (stage === 1) {
      setStage(2);
      toggleAuthType("otp");
    } else if (stage === 2) {
      setStage(3);
      toggleAuthType("success");
    }
  };

  return (
    <div>
      {authType === "email" ? (
        <div className="email-auth">
          <h2>Welcome to Tata CLiQ</h2>
          <Email validate={validate} toggleAuthType={toggleAuthType} />
        </div>
      ) : authType === "mobile" ? (
        <div className="mobile-auth">
          <h2>Welcome to Tata CLiQ</h2>
          <Mobile
            validate={validate}
            toggleAuthType={toggleAuthType}
            x={stage}
          />
        </div>
      ) : authType === "otp" ? (
        <Otp validate={validate} />
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
