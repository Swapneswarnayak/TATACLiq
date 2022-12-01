import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/authenticate">Login/Register</Link>
      <br />
      <Link to="/myaccount">My Account</Link>
    </div>
  );
};

export default Nav;
