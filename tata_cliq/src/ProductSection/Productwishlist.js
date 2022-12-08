import { color } from '@chakra-ui/react';
import React, { useEffect,useContext, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import {LoginContext} from "./Context/Context";
import { useToast } from '@chakra-ui/react'



const Productwishlist = ({data}) => {
  const { loginInfo, setloginInfo } = useContext(LoginContext);

  const toast = useToast()
  let user=true;
  
    console.log(data)
      let [show,setshow]=useState(false)


  useEffect(()=>{
    let wishlistdata=JSON.parse(localStorage.getItem("wishlistdata"))||[];
    for(let i=0;i<wishlistdata.length;i++){
      if(wishlistdata[i].id===data.id){
        setshow(true);
      }
    }
  },[data])

    const handlewishlist =()=>{
      if(loginInfo !== "{}"){
        let wishlistdata=JSON.parse(localStorage.getItem("wishlistdata"))||[];
      let temp=false;
      for(let i=0;i<wishlistdata.length;i++){
        if(wishlistdata[i].id===data.id){
          setshow(false);
          temp=true;
          // return;
        }
      }

      if(temp){

        let newarr=wishlistdata.filter((ele)=>{
          return ele.id!==data.id
        })
        localStorage.setItem("wishlistdata",JSON.stringify(newarr))
      }else{
        wishlistdata.push(data)
        localStorage.setItem("wishlistdata",JSON.stringify(wishlistdata))
        setshow(true)
      }
      }else{
        toast({
          title: 'Login first',
          status: 'error',
          position: "top",
          duration: 3000,
          isClosable: true,
        })
      }
    }
  return (
    <div onClick={handlewishlist}>
        {show?<AiFillHeart style={{color:"rgb(255,15,88)",fontSize:"22px"}} />:<AiOutlineHeart style={{color:"rgb(255,15,88)",fontSize:"22px"}}/>}
    </div>
  )
}

export default Productwishlist