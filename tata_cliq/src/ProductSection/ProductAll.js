import { Accordion, Box, Image } from "@chakra-ui/react";
import lodergif from "./loder.gif";
import React, { useEffect, useState } from "react";
import ProdtctFilter from "./ProdtctFilter";
import ProductCard from "./ProductCard";
import { Link, useParams } from "react-router-dom";
import { myContext } from "./Context/Context";
import { LoginContext } from "./Context/Context";
import { useContext } from "react";

const ProductAll = () => {
  let { category } = useParams();
  console.log(category);

  let [state, setState] = React.useState("");
  let [loder, setloader] = useState(false);
  let [val, setVal] = React.useState([]);
  let { valu, fn } = useContext(LoginContext);
  useEffect(() => {
    fetchdata();
  }, [valu]);

  // https://raghvendra-tatacilq-data.onrender.com/data
  const fetchdata = async () => {
    let res = await fetch(
      `https://raghvendra-tatacilq-data.onrender.com/data/?department=${category}`
    );
    //
    let data = await res.json();
    console.log(data);
    setVal(data);
  };

  // let data=React.useContext(myContext).stat
  useEffect(() => {
    setloader(true);
    setState(val);
    setTimeout(() => {
      setloader(false);
    }, 200);
  }, [state]);

  return (
    <myContext.Provider value={{ stat: val, fn: setVal, name: category }}>
      <div style={{ backgroundColor: "#ECECEC" }}>
        <Box width={"90%"} margin="auto" pt={"25px"}>
          {loder ? (
            <Image
              position={"fixed"}
              top={"30%"}
              left="30%"
              margin="auto"
              width={"50%"}
              src={lodergif}
            />
          ) : (
            <Box
              width="100%"
              display="grid"
              backgroundColor={"#ECECEC"}
              gridTemplateColumns="21% 75%"
              gap={"3%"}
            >
              <Box style={{ borderRadius: "10px", padding: "8px" }}>
                <ProdtctFilter />
              </Box>

              <Box
                display="grid"
                gridTemplateColumns="repeat(4,1fr)"
                rowGap={"15px"}
                columnGap={"8px"}
              >
                {val.map((ele, i) => {
                  return <ProductCard key={i} data={ele} />;
                })}
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </myContext.Provider>
  );
};

export default ProductAll;
