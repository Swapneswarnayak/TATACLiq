import {Link, Routes, Route} from "react-router-dom";
import {Navigate} from "react";
import Home from "../Home/Home/Home";
import React from "react";
// import Login from "../LoginSignupPage/Components/UserAuth/UserAuth"
import UserAuth from "../LoginSignupPage/Components/UserAuth/UserAuth";
import MyAccount from "../LoginSignupPage/Components/MyAccount/MyAccount";
import Cart from "../Cart_and_Payment/Component/Pages/Cart"
import ProductAll from "../ProductSection/ProductAll"
import ProductDetail from "../ProductSection/ProductDetail"
import Success from "../Cart_and_Payment/Success/Success"

function AllRoutes(){
    {console.log(Cart)}
    return <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route  path="/authenticate" element={<UserAuth />}></Route>
        <Route path="/myaccount" element={<MyAccount />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<ProductAll />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/success" element={<Success />}></Route>
    </Routes>
    </>
}

export default AllRoutes;