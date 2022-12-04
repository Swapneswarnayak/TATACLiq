import React, { useContext, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import myContext from "./Context/Context";

const Sort = () => {
  let [state, setState] = React.useState([]);
  let [state1, setState1] = React.useState([]);
  let [toggle, setToggle] = React.useState(null);
  let [load, setLoad] = React.useState(false);
  let reference=useRef("")

  let setfunc = useContext(myContext).fn;

  useEffect(() => {
    console.log(toggle);
    if (toggle === 1) {
      console.log("in");
      data1();
    } else if (toggle === 2) {
      data();
    }
    console.log(state1);

    if (state.length === 0) {
      fetchData();
    }
  }, [state1, state, load]);

  const fetchData = async () => {
    let res = await fetch("http://localhost:3004/data");
    let data = await res.json();
    setfunc(data);
  };

  // Handling Department Sort start----------------------------->
  const handleChange = (e) => {
    let { value, checked } = e.target;
    if (checked === false) {
      let newArr = state.filter((el) => {
        return el !== value;
      });
      setState(newArr);
      return;
    }
    setState([...state, value]);
    setToggle(2);
  };

  const data = async () => {
    // console.log(state);
    if (state.length > 0) {
      let res = await fetch("http://localhost:3004/data");
      let data = await res.json();

      let arr;
      var arr3 = [];
      for (let i = 0; i < state.length; i++) {
        arr = data.filter((el) => {
          return el.department === state[i];
        });
        arr3 = [].concat(arr, arr3);
      }
      console.log(arr3);
      setfunc(arr3);
      setLoad((prev) => !prev);
    }
  };

  // handling department sort Ends------------------------->

  // handling brand sort Start---------------------------------->

  const handleChange1 = (e) => {
    let { value, checked } = e.target;
    if (checked === false) {
      let newArr = state1.filter((el) => {
        return el !== value;
      });
      setState1(newArr);
      return;
    }
    setState1([...state1, value]);
    setToggle(1);
  };

  const data1 = async () => {
    if (state1.length > 0) {
      let res = await fetch("http://localhost:3004/data");
      let data = await res.json();
      console.log(data);
      let arr;
      var arr4 = [];
      for (let i = 0; i < state.length; i++) {
        arr = data.filter((el) => {
          return el.brand === state1[i];
        });
        console.log(arr);
        arr4 = [].concat(arr4, arr);
      }
      console.log(arr4);
      setfunc(arr4);
      setLoad((prev) => !prev);
    }
  };

  
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px 8px 0px 0px",
      }}
    >
      {/* ,backgroundColor:"red" */}
      <div
        style={{
          height: "40px",
          width: "100%",
          backgroundColor: "#F5F5F5",
          display: "flex",
          padding: "19px",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <h2 style={{ fontWeight: "600", fontSize: "17px" }}>Filters</h2>
        <div>
          <h3 style={{ color: "red", cursor: "pointer" }}>
            <u>Clear All</u>
          </h3>
        </div>
      </div>
      <br />
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px 8px 0px 0px",
          padding: "8px",
        }}
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem id="div" mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Department</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="footwear">
                    Footwear
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="electronics">
                    Electronics
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="beauty & grooming">
                    beauty & grooming
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="eyewear">
                    eyewear
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Men's Clothing">
                    Men's Clothing
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Electronics">
                    Gadgets
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Kids">
                    Kids
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Home">
                    Home
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Beauty & Grooming">
                    Beauty & Grooming
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          {state.length > 0 ? (
            <AccordionItem mb="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <p style={{ fontWeight: "600" }}>Brand</p>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup colorScheme="green">
                  <Box
                    display="flex"
                    flexDirection="column"
                    spacing={[1, 5]}
                    direction={["column", "row"]}
                  >
                    <Checkbox onChange={handleChange1} value="Woodland">
                      Woodland
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="U.S. Polo Assn">
                      U.S. Polo Assn
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Puma">
                      Puma
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Samsung">
                      Samsung
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Apple">
                      Apple
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Asus">
                      Asus
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Boat">
                      Boat
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Ray-Ban">
                      Ray-Ban
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="O3+">
                      O3+
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="VLCC">
                      VLCC
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Ustraa">
                      Ustraa
                    </Checkbox>
                  </Box>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
          ) : (
            <AccordionItem display="none" mb="10px">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <p style={{ fontWeight: "600" }}>Brand</p>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup colorScheme="green">
                  <Box
                    display="flex"
                    flexDirection="column"
                    spacing={[1, 5]}
                    direction={["column", "row"]}
                  >
                    <Checkbox onChange={handleChange1} value="Woodland">
                      Woodland
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="U.S. Polo Assn">
                      U.S. Polo Assn
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Puma">
                      Puma
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Samsung">
                      Samsung
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Apple">
                      Apple
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Asus">
                      Asus
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Boat">
                      Boat
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Ray-Ban">
                      Ray-Ban
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="O3+">
                      O3+
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="VLCC">
                      VLCC
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Ustraa">
                      Ustraa
                    </Checkbox>
                  </Box>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
          )}

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Category</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="men">
                    Men
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="mobile phones">
                    mobile phones
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="bath,body & hygiene">
                    bath,body & hygiene
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="laptop">
                    laptop
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Air conditioner">
                    Air conditioner
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Product Type</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="notebook & macbook">
                    notebook & macbook
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Desert Air Cooler">
                    Desert Air Cooler
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="split ac">
                    split ac
                  </Checkbox>
                  <Checkbox
                    onChange={handleChange}
                    value="shampoo & conditioner"
                  >
                    shampoo & conditioner
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Colour</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="Black">
                    Black
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Red">
                    Red
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Yellow">
                    Yellow
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Green">
                    Green
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Pink">
                    Pink
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Fabric Family</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="Cotton">
                    Cotton
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Nylon">
                    Nylon
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Rope">
                    Rope
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Discount</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="naruto">
                    50%
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    100%
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    200%
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Fit</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="naruto">
                    Slim
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    Loose
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    Over-Sized
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Occasion</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="naruto">
                    Marraige
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    Official
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    Party
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>All Discount</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="naruto">
                    Jio
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    Airtel
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    Vodafone
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Availability</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="naruto">
                    No
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    Little
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    Full House
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p style={{ fontWeight: "600" }}>Pattern</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                {/* //value={state} */}
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="naruto">
                    Cross
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    Lining
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    Transparent
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Accordion>
      </div>
    </div>
  );
};

export default Sort;
