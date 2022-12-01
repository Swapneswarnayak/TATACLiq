import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="menu">Menu</div>
        <ul className="side-list">
          <li className="li">
            <Link className="links">
              <i className="fa-regular fa-heart"></i>&emsp;My Wishlist
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-solid fa-bag-shopping"></i>&emsp;Order History
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-regular fa-address-book"></i>&emsp;Address Book
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-solid fa-tag"></i>&emsp;Brands
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-regular fa-credit-card"></i>&emsp;Saved Payments
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-regular fa-bell"></i>&emsp;Alerts & Coupons
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-solid fa-gift"></i>&emsp;Gift Card
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-solid fa-wallet"></i>&emsp;CLiQ Cash
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-solid fa-address-book"></i>&emsp;Manage
              Notifications
            </Link>
          </li>
          <li>
            <Link className="links">
              <i className="fa-solid fa-gear"></i>&emsp;Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
