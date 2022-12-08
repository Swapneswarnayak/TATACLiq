import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { LoginContext } from "../ProductSection/Context/Context";

function SigninSignup() {
  const { loginInfo, setloginInfo } = useContext(LoginContext);
  //  const isAuth = false;
  //  const [name,setname] = useState("prince");
  if (loginInfo !== "{}") {
    return (
      <>
        {" "}
        <Popover>
          <PopoverTrigger>
            <Box display="flex">
              <Box>
                <Button
                  size="sm"
                  _hover={{ bg: "black" }}
                  color="white"
                  bg="black"
                  mt={1}
                >
                  <i className="fa-solid fa-user"></i>
                </Button>
              </Box>
              <Box color="white" mt={2} ml={-1}>
                <ChevronDownIcon />
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent w="180px" textAlign={"left"}>
            <PopoverArrow />
            <PopoverBody>
              <Link to="/myaccount">
                <Box ml={3}>
                  <h1>My Account</h1>
                </Box>
              </Link>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Alert & Coupon</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Order History</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>My WishList</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Gift Card</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>CLiq Cash</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <button
                  onClick={() => {
                    sessionStorage.setItem("loggedIn", JSON.stringify({}));
                    setloginInfo(JSON.stringify({}));
                  }}
                >
                  LogOut
                </button>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  } else {
    return (
      <>
        <Popover>
          <PopoverTrigger>
            <Button
              size="sm"
              _hover={{ bg: "black" }}
              color="white"
              bg="black"
              mt={1}
              fontWeight="400"
            >
              Sign in/Sign up
            </Button>
          </PopoverTrigger>
          <PopoverContent w="180px" textAlign={"left"}>
            <PopoverArrow />
            <PopoverBody>
              <Button
                _hover={{ bg: "#F0FFF0", color: "blue" }}
                bg="#FF1744"
                size="sm"
                mt={1}
                ml={3}
                borderRadius="lg"
                color="white"
              >
                <Link to="/authenticate">Login/Register</Link>
              </Button>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <Link to="/myaccount">
                  <h1>My Account</h1>
                </Link>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Alert & Coupon</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Order History</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>My WishList</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>Gift Card</h1>
              </Box>
            </PopoverBody>
            <PopoverBody>
              <Box ml={3}>
                <h1>CLiq Cash</h1>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  }
}

export default SigninSignup;
