import React from "react";
import "./Checkout.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Checkout = (props) => {
  let { val, fn } = props;
  console.log(fn);


  const ToAddress=()=>{
    fn(true)
  }
  return (
    <div id="check">
      <div className="check_name">
        <p>Bag Total</p>
        <p>₹12494.00</p>
      </div>
      <div className="check_name">
        <p>Shipping Charge</p>
        <p style={{ color: "green" }}>
          <b>FREE</b>
        </p>
      </div>
      <div className="check_name">
        <p>Bag Subtotal</p>
        <p>₹12494.00</p>
      </div>
      <div className="check_name">
        <p>Product Discount(s)</p>
        <p>-₹4749.00</p>
      </div>
      <div className="check_name">
        <p>Coupon Discount</p>
        <p>-₹0.00</p>
      </div>
      <p style={{ color: "green" }}>
        You will save{" "}
        <span style={{ color: "red" }}>
          <b>₹5049.00</b>
        </span>{" "}
        on this order
      </p>
      <hr />
      <div id="check_total">
        {val ? (
          <>
            <div>
              <h1 style={{ fontSize: "20px" }}>
                <b>Total Payable Amount</b>
              </h1>
            </div>
            <div>
              <h1 style={{ fontSize: "25px" }}>₹5000.00</h1>
              <img
                style={{ marginTop: "-8px" }}
                width={"60px"}
                src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                alt="cartmove"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <h1 style={{ fontSize: "20px" }}>
                <b>Total</b>
              </h1>
              <h1 style={{ fontSize: "20px" }}>₹ 7445</h1>
            </div>
            <div>
              <Link >
                <Button onClick={ToAddress} size="lg" variant="outline" colorScheme="red">
                  Checkout
                  <img
                    style={{ marginRight: "-10px" }}
                    width={"60px"}
                    src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                    alt="cartmove"
                  />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
