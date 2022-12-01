import React from "react";
import "./Checkout.css";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Checkout = () => {
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
        <div>
          <h1 style={{ fontSize: "20px" }}>
            <b>Total</b>
          </h1>
          <h1 style={{ fontSize: "20px" }}>₹ 7445</h1>
        </div>
        <div>
          <Button size="lg" variant="outline" colorScheme="red">
            Checkout
            <img
              style={{ margin: "auto" }}
              width={"60px"}
              src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
              alt="cartmove"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
