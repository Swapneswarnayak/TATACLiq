import React, { useEffect } from "react";
import Cartdetails from "../CartDetails/Cartdetails";
import AddCoupon from "../Addcoupon/AddCoupon";
import Checkout from "../CheckOut/Checkout";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import CartPay from "../Card_payment/CartPay";
const CartShow = () => {
  
  let [state, setState] = React.useState(1);
  let[load,setLoad]=React.useState([])
   
  useEffect(()=>{
    let arr=JSON.parse(localStorage.getItem("cartData"))||[];
  setLoad(arr)
  },[])
      
  
 
    
  
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
            
            load.map((el,i) => {
              console.log(el)
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
    </>
  );
};

export default CartShow;
