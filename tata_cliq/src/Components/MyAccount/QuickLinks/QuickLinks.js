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

      <div className="order-history">
        <div className="content-div">
          <span>Show orders from:</span>
          <select>
            <option>Last 6 months</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
        </div>

        <div className="content-div">
          <p>You have not made any purchase yet</p>
        </div>

        <div className="content-div">
          <button>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
