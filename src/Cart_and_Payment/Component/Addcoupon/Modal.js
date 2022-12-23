import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import myCartContext from "../../CartContext/Cartcontext";
import React, { useContext } from "react";
import { Highlight } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
//modal component
//modal component


export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let { totval, totalfn, coupon, setcop } = useContext(myCartContext);

  const myFunc = (a) => {
    onClose();
    console.log(totval, totalfn);
    if (a === "WOW33") {
      console.log(totval - 300);
      setcop(300);
    } else if (a === "ALPHA12") {
      setcop(1000);
    } else if (a === "MAGIC6") {
      setcop(600);
    }
  };

  return (
    <>
      <Button w={"100%"} bgColor={"white"} onClick={onOpen}>
        <img
          style={{ width: "54px" }}
          src="https://i.pinimg.com/originals/97/e2/0f/97e20f80e51dcaf17a3b78a860d8e43a.gif"
          alt="gif"
        />
        Check For Coupons &nbsp;&nbsp; <ChevronRightIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Coupons Discounts</ModalHeader>
          <hr />
          <hr />
          <hr />
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Bank Coupons</Tab>
                <Tab>Other Coupons</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Highlight
                    query="WOW33"
                    styles={{
                      px: "1",
                      py: "1",
                      rounded: "full",
                      bg: "teal.100",
                    }}
                  >
                    WOW33
                  </Highlight>
                  <Button onClick={() => myFunc("WOW33")} ml={5} mb={2}>
                    Apply
                  </Button>
                  <p>You Save ₹300</p>
                  <br />
                  <p>
                    You Save ₹300Get 15% instant discount on purchase above
                    Rs.1,500 | Valid on AU Small Finance Bank Limited Debit &
                    Credit Cards.Valid till: 31 Dec 2022
                  </p>
                  <br />
                  <hr />
                  <br />
                  <Highlight
                    query="ALPHA12"
                    styles={{
                      px: "1",
                      py: "1",
                      rounded: "full",
                      bg: "teal.100",
                    }}
                  >
                    ALPHA12
                  </Highlight>
                  <Button onClick={() => myFunc("ALPHA12")} ml={5} mb={2}>
                    Apply
                  </Button>
                  <p>You Save ₹1000</p>
                  <br />
                  <p>
                    You Save ₹1000Get 15% instant discount on purchase above
                    Rs.1,500 | Valid on AU Small Finance Bank Limited Debit &
                    Credit Cards.Valid till: 31 Dec 2022
                  </p>
                  <br />
                  <hr />
                  <br />
                </TabPanel>
                <TabPanel>
                  <Highlight
                    query="MAGIC6"
                    styles={{
                      px: "1",
                      py: "1",
                      rounded: "full",
                      bg: "teal.100",
                    }}
                  >
                    MAGIC6
                  </Highlight>
                  <Button onClick={() => myFunc("MAGIC6")} ml={5} mb={2}>
                    Apply
                  </Button>
                  <p>You Save ₹600</p>
                  <br />
                  <p>
                    You Save ₹600Get 15% instant discount on purchase above
                    Rs.1,800 | Valid on AU Small Finance Bank Limited Debit &
                    Credit Cards.Valid till: 31 Dec 2022
                  </p>
                  <br />
                  <hr />
                </TabPanel>
              </TabPanels>
            </Tabs>
            {/* <h3 style={{margin:"auto"}}>Offers</h3> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
