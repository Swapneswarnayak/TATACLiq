import React from "react";
import AccountDetails from "./AccountDetails/AccountDetails";
import "./MyAccount.css";
import QuickLinks from "./QuickLinks/QuickLinks";
import Sidebar from "./Sidebar/Sidebar";

const MyAccount = () => {
  return (
    <div className="myaccount-div">
      <Sidebar />
      <QuickLinks />
      <AccountDetails />
    </div>
  );
};

export default MyAccount;
