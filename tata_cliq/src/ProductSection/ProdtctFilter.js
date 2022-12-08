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
import { myContext } from "./Context/Context";
import "./ProductFilter.css";

const Sort = () => {
  let [state, setState] = React.useState([]);
  let [state1, setState1] = React.useState([]);
  let [toggle, setToggle] = React.useState(null);
  let [load, setLoad] = React.useState(false);
  let reference = useRef("");

  let setfunc = useContext(myContext).fn;
  let paramName = useContext(myContext).name;
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
    let res = await fetch(
      `https://raghvendra-tatacilq-data.onrender.com/data/?department=${paramName}`
    );
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
    setLoad((prev) => !prev);
  };

  const data = async () => {
    // console.log(state);
    if (state.length > 0) {
      let res = await fetch(
        "https://raghvendra-tatacilq-data.onrender.com/data"
      );
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
      setfunc(shuffle(arr3));
      // setLoad((prev) => !prev);
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
    setLoad((prev) => !prev);
  };

  const data1 = async () => {
    if (state1.length > 0) {
      let res = await fetch(
        "https://raghvendra-tatacilq-data.onrender.com/data"
      );
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

      setfunc(shuffle(arr4));
      // setLoad((prev) => !prev);
    }
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

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
                  <p className="filterhead">Department</p>
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
                    <span className="checkboxtext">Footwear</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="electronics">
                    <span className="checkboxtext">Electronics</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="beauty & grooming">
                    <span className="checkboxtext">beauty & grooming</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="eyewear">
                    <span className="checkboxtext">eyewear</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Men's Clothing">
                    <span className="checkboxtext">Men's Clothing</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Electronics">
                    <span className="checkboxtext">Gadgets</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Kids">
                    <span className="checkboxtext">Kids</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Home">
                    <span className="checkboxtext">Home</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Beauty & Grooming">
                    <span className="checkboxtext">Beauty & Grooming</span>
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
                    <p className="filterhead">Brand</p>
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
                      <span className="checkboxtext">Woodland</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="U.S. Polo Assn">
                      <span className="checkboxtext">U.S. Polo Assn</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Puma">
                      <span className="checkboxtext">Puma</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Samsung">
                      <span className="checkboxtext">Samsung</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Apple">
                      <span className="checkboxtext">Apple</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Asus">
                      <span className="checkboxtext">Asus</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Boat">
                      <span className="checkboxtext">Boat</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Ray-Ban">
                      <span className="checkboxtext">Ray-Ban</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="O3+">
                      <span className="checkboxtext">O3+</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="VLCC">
                      <span className="checkboxtext">VLCC</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Ustraa">
                      <span className="checkboxtext">Ustraa</span>
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
                    <p className="filterhead">Brand</p>
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
                      <span className="checkboxtext">Woodland</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="U.S. Polo Assn">
                      <span className="checkboxtext">U.S. Polo Assn</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Puma">
                      <span className="checkboxtext">Puma</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Samsung">
                      <span className="checkboxtext">Samsung</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Apple">
                      <span className="checkboxtext">Apple</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Asus">
                      <span className="checkboxtext">Asus</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Boat">
                      <span className="checkboxtext">Boat</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Ray-Ban">
                      <span className="checkboxtext">Ray-Ban</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="O3+">
                      <span className="checkboxtext">O3+</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="VLCC">
                      <span className="checkboxtext">VLCC</span>
                    </Checkbox>
                    <Checkbox onChange={handleChange1} value="Ustraa">
                      <span className="checkboxtext">Ustraa</span>
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
                  <p className="filterhead">Category</p>
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
                    <span className="checkboxtext">Men</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="mobile phones">
                    <span className="checkboxtext">mobile phones</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="bath,body & hygiene">
                    <span className="checkboxtext">bath,body & hygiene</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="laptop">
                    <span className="checkboxtext">laptop</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Air conditioner">
                    <span className="checkboxtext">Air conditioner</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">Product Type</p>
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
                    <span className="checkboxtext">notebook & macbook</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Desert Air Cooler">
                    <span className="checkboxtext">Desert Air Cooler</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="split ac">
                    <span className="checkboxtext">split ac</span>
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
                  <p className="filterhead">Colour</p>
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
                    <span className="checkboxtext">Black</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Red">
                    <span className="checkboxtext">Red</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Yellow">
                    <span className="checkboxtext">Yellow</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Green">
                    <span className="checkboxtext">Green</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Pink">
                    <span className="checkboxtext">Pink</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">Fabric Family</p>
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
                    <span className="checkboxtext">Cotton</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Nylon">
                    <span className="checkboxtext">Nylon</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Rope">
                    <span className="checkboxtext">Rope</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">Discount</p>
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
                    <span className="checkboxtext">50%</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    <span className="checkboxtext">100%</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    <span className="checkboxtext">200%</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">Fit</p>
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
                    <span className="checkboxtext">Slim</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    <span className="checkboxtext">Loose</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    <span className="checkboxtext">Over-Sized</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">Occasion</p>
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
                    <span className="checkboxtext">Marraige</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    <span className="checkboxtext">Official</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    <span className="checkboxtext">Party</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">All Discount</p>
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
                    <span className="checkboxtext">Jio</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    <span className="checkboxtext">Airtel</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    <span className="checkboxtext">Vodafone</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">Availability</p>
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
                    <span className="checkboxtext">No</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    <span className="checkboxtext">Little</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    <span className="checkboxtext">Full House</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">Pattern</p>
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
                    <span className="checkboxtext">Cross</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="sasuke">
                    <span className="checkboxtext">Lining</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="kakashi">
                    <span className="checkboxtext">Transparent</span>
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
