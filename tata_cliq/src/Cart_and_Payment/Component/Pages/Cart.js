import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MyBag from "../Navbar/MyBag";
import "../Allcss.css/all.css";
import Emptycart from "../NodataCart/Emptycart";

import CartShow from "../CartShow/CartShow";
const Cart = () => {
  let [cartData, setCardData] = React.useState();
  useEffect(() => {
  
   let arr=JSON.parse(localStorage.getItem("cartData"))||[];
   console.log(arr)
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <MyBag />
      <CartShow />
      {/* <Emptycart /> */}
    </div>
  );
};

export default Cart;
