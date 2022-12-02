import React from "react";
import "./cartpay.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const CartPay = () => {
  const paynow = () => {
    console.log(101);
  };
  return (
    <>
      <div id="cartPay">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img
            style={{ display: "inline-flex" }}
            width="30px"
            src="data:image/png;base64,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"
            alt="one"
          />

          <b style={{ fontSize: "20px" }}>Payment Method</b>
        </div>
        <br />

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  style={{ display: "flex", alignItems: "center" }}
                  textAlign="left"
                >
                  <img
                    width={"30px"}
                    src="https://www.tatacliq.com/src/cart/components/img/credit-card.svg"
                    alt="card"
                  />
                  &nbsp; Credit Card
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "50%" }}>
                  <Input mb={"10px"} placeholder="Card Number*" />

                  <Input placeholder="Name On Card*" />
                </div>
                <div style={{ width: "50%" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Select placeholder="Expiry Month">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Select mb={"10px"} placeholder="Expiry Year">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input w={"50%"} placeholder="CVV" />
                    <Button onClick={paynow} w={"40%"} colorScheme="red">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div> */}
              <img width={"100%"} src="https://acegif.com/wp-content/uploads/gifs/raining-money-8.gif" alt="honey" />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  style={{ display: "flex", alignItems: "center" }}
                  textAlign="left"
                >
                  <img
                    width={"30px"}
                    src="https://www.tatacliq.com/src/cart/components/img/debit-card.svg"
                    alt="card"
                  />
                  &nbsp; Debit Card
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "50%" }}>
                  <Input mb={"10px"} placeholder="Card Number*" />

                  <Input placeholder="Name On Card*" />
                </div>
                <div style={{ width: "50%" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Select placeholder="Expiry Month">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Select mb={"10px"} placeholder="Expiry Year">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input w={"50%"} placeholder="CVV" />
                    <Button onClick={paynow} w={"40%"} colorScheme="red">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  style={{ display: "flex", alignItems: "center" }}
                  textAlign="left"
                >
                  <img
                    width={"30px"}
                    src="https://www.tatacliq.com/src/cart/components/img/emi.svg"
                    alt="card"
                  />
                  &nbsp; EMI
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "50%" }}>
                  <Input mb={"10px"} placeholder="Card Number*" />

                  <Input placeholder="Name On Card*" />
                </div>
                <div style={{ width: "50%" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Select placeholder="Expiry Month">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Select mb={"10px"} placeholder="Expiry Year">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input w={"50%"} placeholder="CVV" />
                    <Button onClick={paynow} w={"40%"} colorScheme="red">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  style={{ display: "flex", alignItems: "center" }}
                  textAlign="left"
                >
                  <img
                    width={"30px"}
                    src="https://www.tatacliq.com/src/cart/components/img/upi-checkout-img.svg"
                    alt="card"
                  />
                  &nbsp; UPI ID
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "50%" }}>
                  <Input mb={"10px"} placeholder="Card Number*" />

                  <Input placeholder="Name On Card*" />
                </div>
                <div style={{ width: "50%" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Select placeholder="Expiry Month">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Select mb={"10px"} placeholder="Expiry Year">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input w={"50%"} placeholder="CVV" />
                    <Button onClick={paynow} w={"40%"} colorScheme="red">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  style={{ display: "flex", alignItems: "center" }}
                  textAlign="left"
                >
                  <img
                    width={"30px"}
                    src="https://www.tatacliq.com/src/cart/components/img/netBanking.svg"
                    alt="card"
                  />
                  &nbsp; Netbanking
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "50%" }}>
                  <Input mb={"10px"} placeholder="Card Number*" />

                  <Input placeholder="Name On Card*" />
                </div>
                <div style={{ width: "50%" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Select placeholder="Expiry Month">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Select mb={"10px"} placeholder="Expiry Year">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input w={"50%"} placeholder="CVV" />
                    <Button onClick={paynow} w={"40%"} colorScheme="red">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  style={{ display: "flex", alignItems: "center" }}
                  textAlign="left"
                >
                  <img
                    width={"30px"}
                    src="https://www.tatacliq.com/src/cart/components/img/cod.svg"
                    alt="card"
                  />
                  &nbsp; COD
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "50%" }}>
                  <Input mb={"10px"} placeholder="Card Number*" />

                  <Input placeholder="Name On Card*" />
                </div>
                <div style={{ width: "50%" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Select placeholder="Expiry Month">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Select mb={"10px"} placeholder="Expiry Year">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input w={"50%"} placeholder="CVV" />
                    <Button onClick={paynow} w={"40%"} colorScheme="red">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div> */}
              <img width={"100%"} src="https://acegif.com/wp-content/uploads/gifs/raining-money-8.gif" alt="honey" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div id="Neu_money">
        <h1 style={{ textAlign: "left", fontWeight: "400" }}>
          <FormControl display="flex" alignItems="center">
            <Switch id="email-alerts" /> &nbsp;&nbsp; &nbsp;&nbsp;
            <FormLabel htmlFor="email-alerts" mb="0">
              Use My NeuCoins <WarningIcon mb={"10px"} w={"10px"} /> <br />
              <p style={{ fontSize: "10px", fontWeight: "100" }}>
                Balance: 0 NeuCoins
              </p>
            </FormLabel>
          </FormControl>
        </h1>
      </div>
    </>
  );
};

export default CartPay;
