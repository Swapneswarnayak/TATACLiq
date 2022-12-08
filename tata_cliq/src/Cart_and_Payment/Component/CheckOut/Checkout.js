import React, { useContext } from "react";
import "./Checkout.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import myCartContext from "../../CartContext/Cartcontext";

const Checkout = (props) => {
  let total = useContext(myCartContext).totval;
  let { coupon, setcop } = useContext(myCartContext);
  console.log(total);
  let { val, fn } = props;
  // console.log(fn);

  const ToAddress = () => {
    fn(2);
  };
  return (
    <>
      <div id="check">
        <div className="check_name">
          <p>Bag Total</p>
          <p>₹{total}</p>
        </div>
        <div className="check_name">
          <p>Shipping Charge</p>
          <p style={{ color: "green" }}>
            <b>FREE</b>
          </p>
        </div>
        <div className="check_name">
          <p>Bag Subtotal</p>
          <p>₹{total}.00</p>
        </div>
        <div className="check_name">
          <p>Product Discount(s)</p>
          <p>-₹{total > 0 ? Math.round(total * (10 / 100)) : total}</p>
        </div>
        <div className="check_name">
          <p>Coupon Discount</p>
          <p>-₹{coupon > 0 ? coupon : "0.00"}</p>
        </div>
        <p style={{ color: "green" }}>
          You will save{" "}
          <span style={{ color: "red" }}>
            <b>₹{Math.round(total * (10 / 100)) + coupon}</b>
          </span>{" "}
          on this order
        </p>
        <hr />
        <div id="check_total">
          {val === 2 ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "30px",
                alignItems: "baseline",
              }}
            >
              <div style={{ width: "50%" }}>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Total Payable Amount</b>
                </h1>
              </div>
              <div>
                <h1 style={{ fontSize: "25px" }}>
                  ₹{Math.round(total - total * (10 / 100))}
                </h1>
                <img
                  style={{ marginTop: "8px", width: "60px" }}
                  src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                  alt="cartmove"
                />
              </div>
            </div>
          ) : val === 1 ? (
            <>
              <div>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Total</b>
                </h1>
                <h1 style={{ fontSize: "20px" }}>
                  ₹{total - (Math.round(total * (10 / 100)) + coupon)}
                </h1>
              </div>
              <div>
                <Link>
                  <Button
                    onClick={ToAddress}
                    size="lg"
                    variant="outline"
                    colorScheme="red"
                  >
                    Checkout
                    <img
                      style={{ marginRight: "-10px", width: "60px" }}
                      src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                      alt="cartmove"
                    />
                  </Button>
                </Link>
              </div>
            </>
          ) : val === 3 ? (
            <>
              <div>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Total Payable Amount</b>
                </h1>
              </div>
              <div>
                <h1 style={{ fontSize: "25px" }}>₹{total - (Math.round(total * (10 / 100)) + coupon)}</h1>
                <img
                  style={{ marginTop: "8px", width: "60px" }}
                  src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                  alt="cartmove"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Total Payable Amount</b>
                </h1>
              </div>
              <div>
                <h1 style={{ fontSize: "25px" }}>₹{total - (Math.round(total * (10 / 100)) + coupon)}</h1>
                <img
                  style={{ marginTop: "8px", width: "60px" }}
                  src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                  alt="cartmove"
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div
        style={{
          height: "50px",
          width: "95%",
          margin: "auto",
          display: "flex",
          padding: "5px",
        }}
      >
        <img style={{width:"29px"}}
          src="https://www.tatacliq.com/src/cart/components/img/lock.svg"
          alt="security"
        />&nbsp; &nbsp;
        <p style={{ fontWeight: "300", fontSize: "12px" }}>
          Safe and secure payments. Easy returns. 100% Authentic products.
        </p>
      </div>
      <br />
      <div
        style={{
          width: "95%",
          margin: "auto",
          display: "flex",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <Checkbox colorScheme="red" defaultChecked>
          <p style={{ fontWeight: "500", fontSize: "12px" }}>
            Get Order Update on WhatsApp
          </p>
        </Checkbox>
        &nbsp;
        <img
          style={{ width: "10%" }}
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0iIzU5Q0U3MiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjQ1MyAxOC4xMDgxQzIxLjE2NzkgMTcuOTY1NSAxOS43NjY3IDE3LjI3NjIgMTkuNTA1NCAxNy4xODExQzE5LjI0NDEgMTcuMDg2MSAxOS4wNTQyIDE3LjAzODUgMTguODY0MiAxNy4zMjM4QzE4LjY3NDIgMTcuNjA5IDE4LjEyNzkgMTguMjUwOCAxNy45NjE3IDE4LjQ0MDlDMTcuNzk1NCAxOC42MzExIDE3LjYyOTIgMTguNjU0OSAxNy4zNDQyIDE4LjUxMjJDMTcuMDU5MiAxOC4zNjk3IDE2LjE0MDggMTguMDY4NyAxNS4wNTIyIDE3LjA5OEMxNC4yMDQ5IDE2LjM0MjYgMTMuNjMyOSAxNS40MDk0IDEzLjQ2NjYgMTUuMTI0MkMxMy4zMDA0IDE0LjgzOSAxMy40NDg5IDE0LjY4NDggMTMuNTkxNiAxNC41NDI3QzEzLjcxOTggMTQuNDE1MSAxMy44NzY2IDE0LjIxIDE0LjAxOTEgMTQuMDQzNkMxNC4xNjE2IDEzLjg3NzIgMTQuMjA5MSAxMy43NTgzIDE0LjMwNDEgMTMuNTY4MkMxNC4zOTkxIDEzLjM3OCAxNC4zNTE2IDEzLjIxMTYgMTQuMjgwMyAxMy4wNjlDMTQuMjA5MSAxMi45MjY0IDEzLjYzOTEgMTEuNTI0IDEzLjQwMTYgMTAuOTUzNUMxMy4xNzAzIDEwLjM5NzkgMTIuOTM1MyAxMC40NzMxIDEyLjc2MDQgMTAuNDY0NEMxMi41OTQzIDEwLjQ1NjEgMTIuNDA0MSAxMC40NTQ0IDEyLjIxNDEgMTAuNDU0NEMxMi4wMjQxIDEwLjQ1NDQgMTEuNzE1MyAxMC41MjU3IDExLjQ1NCAxMC44MTA5QzExLjE5MjggMTEuMDk2MSAxMC40NTY1IDExLjc4NTUgMTAuNDU2NSAxMy4xODc5QzEwLjQ1NjUgMTQuNTkwMyAxMS40Nzc4IDE1Ljk0NTEgMTEuNjIwMyAxNi4xMzUzQzExLjc2MjggMTYuMzI1NSAxMy42MzAxIDE5LjIwMzQgMTYuNDg5MiAyMC40Mzc2QzE3LjE2OTIgMjAuNzMxMSAxNy43MDAxIDIwLjkwNjQgMTguMTE0IDIxLjAzNzhDMTguNzk2OCAyMS4yNTQ2IDE5LjQxODEgMjEuMjI0IDE5LjkwOTIgMjEuMTUwN0MyMC40NTY4IDIxLjA2ODkgMjEuNTk1NSAyMC40NjEzIDIxLjgzMyAxOS43OTU4QzIyLjA3MDQgMTkuMTMwMyAyMi4wNzA0IDE4LjU1OTggMjEuOTk5MiAxOC40NDA5QzIxLjkyOCAxOC4zMjIxIDIxLjczOCAxOC4yNTA4IDIxLjQ1MyAxOC4xMDgxWk0xNi4yNTI1IDI1LjIwNjVIMTYuMjQ4N0MxNC41NDc1IDI1LjIwNTggMTIuODc4OSAyNC43NDkgMTEuNDIzMiAyMy44ODU0TDExLjA3NyAyMy42Nzk5TDcuNDg4NzUgMjQuNjIxTDguNDQ2NTQgMjEuMTIzNUw4LjIyMTA4IDIwLjc2NUM3LjI3MjA2IDE5LjI1NTkgNi43NzA4MyAxNy41MTE4IDYuNzcxNTUgMTUuNzIxQzYuNzczNjMgMTAuNDk1MyAxMS4wMjY3IDYuMjQzODMgMTYuMjU2MyA2LjI0MzgzQzE4Ljc4ODYgNi4yNDQ4MiAyMS4xNjkgNy4yMzE5OCAyMi45NTkgOS4wMjM0QzI0Ljc0OSAxMC44MTQ5IDI1LjczNDMgMTMuMTk2MiAyNS43MzMzIDE1LjcyODdDMjUuNzMxMiAyMC45NTQ3IDIxLjQ3ODEgMjUuMjA2NSAxNi4yNTI1IDI1LjIwNjVaTTI0LjMyMTQgNy42NjIxM0MyMi4xNjc4IDUuNTA2NzQgMTkuMzAzOCA0LjMxOTE1IDE2LjI1MjQgNC4zMTc5NUM5Ljk2NTIyIDQuMzE3OTUgNC44NDgxOCA5LjQzMzAyIDQuODQ1NjYgMTUuNzIwM0M0Ljg0NDg0IDE3LjczIDUuMzcwMDYgMTkuNjkxOSA2LjM2ODIzIDIxLjQyMUw0Ljc1IDI3LjMzMDFMMTAuNzk2OSAyNS43NDQ0QzEyLjQ2MyAyNi42NTI5IDE0LjMzODggMjcuMTMxNiAxNi4yNDc5IDI3LjEzMjRIMTYuMjUyNUgxNi4yNTI2QzIyLjUzOTIgMjcuMTMyNCAyNy42NTY3IDIyLjAxNjcgMjcuNjU5MiAxNS43Mjk0QzI3LjY2MDQgMTIuNjgyNSAyNi40NzUgOS44MTc0OCAyNC4zMjE0IDcuNjYyMTMiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
          alt="whatsapp"
        />
      </div>
    </>
  );
};

export default Checkout;
