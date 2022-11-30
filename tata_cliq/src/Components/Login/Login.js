import React from "react";
import "./Login.css";

const Login = (setToken) => {
  const login = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("myForm").reset();

    const user = {
      email,
      password,
    };

    const requestOption = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const res = await fetch("http://localhost:4000/users", requestOption);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form id="myForm">
        <input type="email" id="email" placeholder="Enter email" />
        <input type="password" id="password" placeholder="password" />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Login;
