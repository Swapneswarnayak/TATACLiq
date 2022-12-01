import React from "react";
import Navbar from "../Navbar/Navbar";
import MyBag from "../Navbar/MyBag";
import "../Allcss.css/all.css";

import CartShow from "../CartShow/CartShow";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <MyBag />
      <CartShow />
    </div>
  );
};

export default Cart;
