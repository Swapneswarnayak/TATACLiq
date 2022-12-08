import React from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Productwishlist from "./Productwishlist";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  // const data = {
  //     department: "footwear",
  //     category: "men",
  //     img: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010622194_437Wx649H_202109170204431.jpeg",
  //     brand: "Woodland",
  //     name: "Woodland Men's Rust Derby Shoes",
  //     price: "1497",
  //     strikedPrice:"1699",
  //     product_type: "casual"
  //   }
  return (
    <div>
      <Box width="205px" height="auto">
        <Link to={`/product/${data.id}`}>
          {/* IMAGE DIV START */}
          <Box position={"relative"} className="imagecard">
            <Image
              style={{ borderRadius: "10px" }}
              width="100%"
              src={data.img}
              alt={data.img}
            />
            <Image
              position={"absolute"}
              top="2%"
              width={"30%"}
              left="-1%"
              src="https://i.ibb.co/xL3pwP6/discounttag.png"
            />
          </Box>
        </Link>
        {/* IMAGE DIV END */}

        {/* PRODUCT BRAND START */}
        <Box display="flex" margin={"5px 2px"} justifyContent="space-between">
          <Text color={"#212121"} fontWeight="500" fontSize={"16px"}>
            {data.brand}
          </Text>
          <Box>
            <Productwishlist data={data} />
          </Box>
        </Box>
        {/* PRODUCT BRAND START */}

        {/* PRODUCT NAME START */}
        <Box
          textAlign="left"
          margin={"5px 2px"}
          fontWeight="300"
          padding="5px auto"
          color="#4a4a4a"
          lineHeight="125%"
          marginBottom={"8px"}
          fontSize="14px"
        >
          {data.name}
        </Box>
        {/* PRODUCT NAME END */}

        {/* PRICE AND DISCOUNT START */}
        <Box display="flex" margin={"5px 2px"} justifycontent="left">
          <Text
            fontWeight="500"
            fontSize={"14px"}
            mr={2}
            color="#212121"
            lineHeight="100%"
          >
            ₹{data.price}
          </Text>
          <Text textDecoration="line-through" color="#979797" fontSize="12px">
            ₹{data.strikedprice}
          </Text>
        </Box>
        {/* PRICE AND DISCOUNT END */}

        {/* RATING AND DISCOUNT START */}
        <Box display="flex" margin={"5px 2px"} justifycontent="left">
          <Box
            display="flex"
            justifycontent="left"
            fontSize="12px"
            color="#212121"
            padding="3px 6px"
            borderRadius="100px"
            backgroundColor="#eef8e7"
            lineHeight="1"
            fontStyle="normal"
          >
            4.2
            <StarIcon color="rgb(73,155,31)" width="8px" ml={2} mr={3} />
          </Box>
          <Text color={"#979797"} fontSize={"12px"} fontWeight={400}>
            (5)
          </Text>
        </Box>
        {/* RATING AND DISCOUNT END*/}
      </Box>
    </div>
  );
};

export default ProductCard;
