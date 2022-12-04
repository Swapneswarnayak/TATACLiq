import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const { loggedOut, setLoggedOut } = React.useState(false);
  return (
    <div>
      <Link to="/authenticate">Login/Register</Link>
      <br />
      <Link to="/myaccount">My Account</Link>
      <br />
      <button
        onClick={() => {
          sessionStorage.setItem("loggedIn", {});
          // setLoggedOut(true);
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Nav;
