import React from "react";
import { Link } from "react-router-dom";
import "./QuickLinks.css";

const QuickLinks = () => {
  return (
    <div className="main-div">
      <ul className="ql-ul">
        <li>
          <Link className="quick-links">Recent Orders</Link>
        </li>
        <li>
          <Link className="quick-links">My reviews</Link>
        </li>
        <li>
          <Link className="quick-links">Useful Links</Link>
        </li>
        <li>
          <Link className="quick-links">Alerts</Link>
        </li>
        <li>
          <Link className="quick-links">Coupons</Link>
        </li>
      </ul>
      <hr className="hr" />

      <div className="order-history">
        <div className="content-div">
          <span className="span">Show orders from : </span>
          <select className="select-div">
            <option>Select</option>
            <option>Last 6 months </option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
        </div>

        <div className="content-div1">
          <p>You have not made any purchase yet</p>
        </div>

        <div className="content-div">
          <Link to="/">
            <button className="button">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
