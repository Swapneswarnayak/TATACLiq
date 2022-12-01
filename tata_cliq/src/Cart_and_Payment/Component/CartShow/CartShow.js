import React from "react";
import Cartdetails from "../CartDetails/Cartdetails";
import AddCoupon from "../Addcoupon/AddCoupon";
import Checkout from "../CheckOut/Checkout";
import Address from "../Address/Address";
const CartShow = () => {
  let arr = [1, 2, 3, 4];
  let [state, setState] = React.useState(false);
  return (
    <>
      <div className="para">
        <p>
          Apply a relevant coupon code here to avail any additional discount.
          Applicable cashback if any will be credited to your account as per
          T&C.
        </p>
      </div>
      <div className="cart_container" style={{ display: "flex" }}>
        <div className="Cart_Show_multi">
          {state ? (
            <Address />
          ) : (
            arr.map((el) => {
              return <Cartdetails />;
            })
          )}
        </div>
        <div className="Cart_show_checkout">
          <AddCoupon />

          <Checkout val={state} fn={setState} />
        </div>
      </div>
    </>
  );
};

export default CartShow;
