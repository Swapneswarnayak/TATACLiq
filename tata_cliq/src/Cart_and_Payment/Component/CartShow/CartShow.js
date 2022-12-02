import React from "react";
import Cartdetails from "../CartDetails/Cartdetails";
import AddCoupon from "../Addcoupon/AddCoupon";
import Checkout from "../CheckOut/Checkout";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import CartPay from "../Card_payment/CartPay";
const CartShow = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  let [state, setState] = React.useState(1);
  return (
    <>
      {state === 1 ? (
        <div className="para">
          <p>
            Apply a relevant coupon code here to avail any additional discount.
            Applicable cashback if any will be credited to your account as per
            T&C.
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="cart_container" style={{ display: "flex" }}>
        <div className="Cart_Show_multi">
          {state === 2 ? (
            <Address val={state} fn={setState} />
          ) : state === 1 ? (
            arr.map((el) => {
              return <Cartdetails />;
            })
          ) : state === 3 ? (
            <Payment val={state} fn={setState} />
          ) : (
            <CartPay />
          )}
        </div>
        <div className="Cart_show_checkout">
          {state === 1 ? <AddCoupon /> : ""}

          <Checkout val={state} fn={setState} />
        </div>
      </div>
    </>
  );
};

export default CartShow;
