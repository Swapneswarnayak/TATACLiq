import React, { useEffect } from "react";
import "./Payment.css";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Payment = (props) => {
  let [state, setState] = React.useState([]);
  let { val, fn } = props;

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("cartdata")) || [];
    setState(arr);
    console.log(state);
  }, []);

  return (
    <>
      <div id="payment">
        <h1 style={{ fontWeight: "700", fontSize: "30px", textAlign: "left" }}>
          CheckOut
        </h1>
        <div id="Delivery_Address">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{ width: "22px" }}
                src="https://www.tatacliq.com/src/cart/components/img/check.svg"
                alt="tick"
              />
              <h2 style={{ display: "inline", fontWeight: "700" }}>
                Delivery Address
              </h2>
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>
                <u>Change</u>
              </p>
            </div>
          </div>
          <br />
          <div>
            <p style={{ fontSize: "18px", textAlign: "left" }}>
              Swapneswar Nayak <br />
              Home-house no.29, plot no.957, Krishna Garden annex, Pramay news
              lane, Jagamara Square, Khandagiri
            </p>
          </div>
        </div>
        <div id="Delivery_Mode">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{ width: "22px" }}
                src="https://www.tatacliq.com/src/cart/components/img/check.svg"
                alt="tick"
              />
              <h2 style={{ display: "inline", fontWeight: "700" }}>
                Delivery Mode
              </h2>
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>
                <u>Change</u>
              </p>
            </div>
          </div>
          <br />
          <div>
            {
            state.map((el, i) => {
              return (
                <p style={{ fontSize: "18px", textAlign: "left" }}>
                  {el.name}
                  <span style={{ fontWeight: "400", color: "red" }}>
                    &nbsp; Delivery by 6th Dec
                  </span>
                </p>
              );
            })
            }
          </div>
        </div>
        <br />
        <br />
        <div id="Active_wallet">
          <h1 style={{ textAlign: "left", fontWeight: "600" }}>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Activate your CLIQ Cash Wallet
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
          </h1>

          <Button onClick={() => fn(4)} colorScheme="red">
            Pay Now
          </Button>
        </div>
        <br />
      </div>
    </>
  );
};

export default Payment;
