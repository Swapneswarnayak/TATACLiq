import React from 'react'
import Navbar from '../Navbar/Navbar'
import MyBag from "../Navbar/MyBag"
import "../Allcss.css/all.css"
import Cartdetails from '../CartDetails/Cartdetails'
const Cart = () => {
  return (
    <div className='cart_container'>
         <Navbar />
        <MyBag />
       
    

        <Cartdetails />
        

    </div>
  )
}

export default Cart