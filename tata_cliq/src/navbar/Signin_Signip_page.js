import {Button,Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody,
    PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor, 
   Box, } from '@chakra-ui/react'
import {Link} from "react-router-dom";
import {ChevronDownIcon} from '@chakra-ui/icons'
import {useState} from "react"

function SigninSignup(){
   const isAuth = false;
   const [name,setname] = useState("prince");
   if(isAuth){
    return<>  <Popover>
                    <PopoverTrigger>
                      <Box display ="flex">
                      <Box>
                         <Button  size='sm'  _hover={{ bg: 'black' }} color="white" bg="black" mt={1} >{name}</Button>
                      </Box>
                      <Box color="white" mt={2} ml={-1}>
                       <ChevronDownIcon  />
                      </Box>
                      </Box>
                      
                    </PopoverTrigger>
                    <PopoverContent w="180px">
                      <PopoverArrow />
                      <PopoverBody><Box ml={3}><h1>My Account</h1></Box></PopoverBody>
                      <PopoverBody><Box ml={3}><h1>Alert & Coupon</h1></Box></PopoverBody>
                      <PopoverBody><Box ml={3}><h1>Order History</h1></Box></PopoverBody>
                      <PopoverBody><Box ml={3}><h1>My WishList</h1></Box></PopoverBody>
                      <PopoverBody><Box ml={3}><h1>Gift Card</h1></Box></PopoverBody>
                      <PopoverBody><Box ml={3}><h1>CLiq Cash</h1></Box></PopoverBody>
                      <PopoverBody><Box ml={3}><h1>LogOut</h1></Box></PopoverBody>
                    </PopoverContent>
                  </Popover>
          </> 
   }
   else{
     return  <>
           <Popover>
                 <PopoverTrigger>
                   <Button size='sm'  _hover={{ bg: 'black' }} color="white" bg="black" mt={1}>Sign in/Sign up</Button>
                 </PopoverTrigger>
                 <PopoverContent w="180px">
                   <PopoverArrow />
                   <PopoverBody><Button  _hover={{ bg: '#FF1744' }} bg="#FF1744" size='sm' mt={1} ml={3} borderRadius='lg' color="white"><Link to="/authenticate">Login/Register</Link></Button></PopoverBody>
                   <PopoverBody><Box ml={3}><Link to="/myaccount"><h1>My Account</h1></Link></Box></PopoverBody>
                   <PopoverBody><Box ml={3}><h1>Alert & Coupon</h1></Box></PopoverBody>
                   <PopoverBody><Box ml={3}><h1>Order History</h1></Box></PopoverBody>
                   <PopoverBody><Box ml={3}><h1>My WishList</h1></Box></PopoverBody>
                   <PopoverBody><Box ml={3}><h1>Gift Card</h1></Box></PopoverBody>
                   <PopoverBody><Box ml={3}><h1>CLiq Cash</h1></Box></PopoverBody>
                 </PopoverContent>
           </Popover>
           </>
   }

}

export default SigninSignup