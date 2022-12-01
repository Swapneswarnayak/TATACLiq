import React from "react";
import Cartdetails from "../CartDetails/Cartdetails";
import AddCoupon from "../Addcoupon/AddCoupon";
import Checkout from "../CheckOut/Checkout";
const CartShow = () => {
  let arr = [1, 2, 3, 4];
  return (
    <div className="cart_container" style={{ display: "flex" }}>
      <div className="Cart_Show_multi">
        {arr.map((el) => {
          return <Cartdetails />;
        })}
      </div>
      <div className="Cart_show_checkout">
        <AddCoupon />
        
        <Checkout />
      </div>
    </div>
  );
};

export default CartShow;
