import React from "react";
import Navbar from "../Navbar/Navbar";
import MyBag from "../Navbar/MyBag";
import "../Allcss.css/all.css";
import Emptycart from "../NodataCart/Emptycart";

import CartShow from "../CartShow/CartShow";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <MyBag />
      <CartShow />
      {/* <Emptycart /> */}
    </div>
  );
};

export default Cart;
