import React from "react";
import "./Address.css";
import { Button, Input } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Select, Stack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Address = (props) => {
  let { val, fn } = props;

  const saveAdress = () => {
    console.log(document.getElementById("f_name").value);
    if (
      document.getElementById("f_name").value === "" ||
      document.getElementById("l_name").value === "" ||
      document.getElementById("pin").value === "" ||
      document.getElementById("state").value === "" ||
      document.getElementById("city").value === "" ||
      document.getElementById("full_add").value === "" ||
      document.getElementById("mobile").value === ""
    ) {
      return false;
    }
    let obj = {
      fname: document.getElementById("f_name").value,
      lname: document.getElementById("l_name").value,
      pin: document.getElementById("pin").value,
      state: document.getElementById("state").value,
      city: document.getElementById("city").value,
      full_add: document.getElementById("full_add").value,
      mobile: document.getElementById("mobile").value,
    };

    localStorage.setItem("Address", JSON.stringify(obj));

    console.log(obj);

    fn(3);
  };

  const clearAll=()=>{
    document.getElementById("f_name").value = ""
    document.getElementById("l_name").value = ""
    document.getElementById("pin").value = ""
    document.getElementById("state").value = ""
    document.getElementById("city").value = ""
    document.getElementById("full_add").value = ""
    document.getElementById("mobile").value = ""
  }
  return (
    <div id="address">
      <div className="Shipping">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img
            style={{ display: "inline-flex", width: "30px" }}
            src="data:image/png;base64,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"
            alt="one"
          />

          <b style={{ fontSize: "20px" }}>Add Shipping Address</b>
        </div>
        <div style={{ float: "right" }}>
          <Button size="xs" onClick={clearAll} style={{ padding: "10px" }} colorScheme="red">
            {" "}
            <DeleteIcon />
            &nbsp; Clear All
          </Button>
        </div>
      </div>
      <div id="Input_box">
        <div id="In-Input1">
          <Input
            className="a"
            id="f_name"
            w={"49%"}
            style={{ display: "inline" }}
            placeholder="First Name(Required)*"
          />
          &nbsp;
          <Input
            className="a"
            id="l_name"
            w={"49%"}
            // style={{ display: "inline" }}
            placeholder="Last Name(Required)*"
          />
          <br />
          <br />
          <Input
            className="a"
            id="city"
            errorBorderColor="red.500"
            placeholder="City/district(Required)*"
          />
          <br />
          <br />
          <Input className="a" id="state" placeholder="State(Required)*" />
          <br />
          <br />
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Landmark">
              <option>Home</option>
              <option>Near Home</option>
              <option>Far Far from Home</option>
            </Select>
          </Stack>
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="1">
                  Home
                </Radio>

                <Radio colorScheme="green" value="2">
                  Office
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
        </div>
        <div id="In-Input2">
          <Input
            id="pin"
            className="a"
            placeholder="Enter Your PIN code(Required)*"
          />

          <br />
          <br />
          <Input
            className="a"
            id="full_add"
            height="89px"
            style={{ float: "left" }}
            placeholder="Flat/House No., Floor,Building,Area(Required)*"
          />
          <p
            style={{ fontSize: "11px", fontWeight: "10px", textAlign: "left" }}
          >
            Character Limit:120
          </p>

          <br />
          <Input
            className="a"
            id="mobile"
            placeholder="Enter Your Mobile Number(Required)*"
          />
        </div>
      </div>
      <hr />
      <hr />
      <br />
      <div id="address_foot">
        <h2
          onClick={() => {
            window.history.back();
          }}
          style={{ color: "red", fontWeight: "500" }}
        >
          Cancel
        </h2>

        <Button
          onClick={saveAdress}
          style={{ borderRadius: "20px" }}
          colorScheme="red"
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default Address;
