import { color } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";


const Productwishlist = () => {
    let [show,setshow]=useState(false)
  return (
    <div onClick={()=>{setshow(!show)  }}>
        <FaRegHeart  size={'18px'} />
    </div>
  )
}

export default Productwishlist