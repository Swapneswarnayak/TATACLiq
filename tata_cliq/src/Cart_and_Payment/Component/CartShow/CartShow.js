import React, { useEffect } from "react";
import Cartdetails from "../CartDetails/Cartdetails";
import AddCoupon from "../Addcoupon/AddCoupon";
import Checkout from "../CheckOut/Checkout";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import CartPay from "../Card_payment/CartPay";
import myCartContext from "../../CartContext/Cartcontext";

const CartShow = () => {
  let [state, setState] = React.useState(1);
  let [load, setLoad] = React.useState([]);
  let [total, setTotal] = React.useState(200);
  let [coupon, setCoupon] = React.useState(0);
  let [load2, setLoad2] = React.useState(false);

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("cartdata")) || [];
    setLoad(arr);
    getTotal();
  }, [load2]);

  const getTotal = () => {
    let arr = JSON.parse(localStorage.getItem("cartdata")) || [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i].price, 10);
    }

    setTotal(sum);
  };

  return (
    <>
      <myCartContext.Provider
        value={{
          totval: total,
          totalfn: setTotal,
          coupon: coupon,
          setcop: setCoupon,
          load2: setLoad2,
        }}
      >
        {state === 1 ? (
          <div className="para">
            <p>
              Apply a relevant coupon code here to avail any additional
              discount. Applicable cashback if any will be credited to your
              account as per T&C.
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
              load.map((el, i) => {
                console.log(el);
                return <Cartdetails props={el} index={i} fn={setLoad} />;
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
      </myCartContext.Provider>
    </>
  );
};

export default CartShow;
