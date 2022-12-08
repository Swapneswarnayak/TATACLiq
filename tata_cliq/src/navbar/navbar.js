import "./NavBar.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SigninSignup from "./Signin_Signip_page";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { LoginContext } from "../ProductSection/Context/Context";
import { useContext } from "react";

function NavBar() {
  // let wishhlistformlocal = localStorage.getItem("wishlistdata");
  // let len_wish = wishhlistformlocal.length;
  // let cartformlocal = localStorage.getItem("cartdata");
  // let len_cart = cartformlocal.length;
  // const [wishlistlen, setwishlistlen] = useState(len_wish);
  // const [cartlen, setcartlen] = useState(len_cart);
  const [current, setcurrent] = useState(false);
  const [text, setText] = useState("");

  let { fn, valu } = useContext(LoginContext);

  let navigate = useNavigate();
  const linkstyle = {
    textDecoration: "none",
    color: "gray",
  };
  console.log(text);

  const products = [
    "shirts",
    "formal-shirts",
    "t-shirts",
    "socks",
    "formal-shirts",
    "shoes",
    "shoes-sneakers",
    "shoes-formal",
    "shoes-heels",
    "electronics",
    "footwear",
    "beauty & grooming",
    "eyewear",
    "Men's Clothing",
  ];

  function handinginputbox() {
    if (text.length > 1) {
      setcurrent(true);
    }

    if (text.length == 1) {
      setcurrent(false);
    }

    if (text == "") {
      setcurrent(false);
    }
  }

  function clickoninputdrop(targ) {
    console.log(targ);
    document.getElementById("right_lower_box_third_input_box_id").value = targ;
  }

  return (
    <>
      <div id="main_navbar">
        <div id="navbar_left_box">
          <Link to="/">
            {" "}
            <img id="img_of_logo" src="/Tata_Assets/logo.png"></img>
          </Link>
        </div>
        <div id="navbar_right_box">
          <div id="right_upper_box">
            <div id="right_upper_box_left_box">
              <div>
                <h1 className="upper_boxof_navbar_h1">Tata CLiq Luxury</h1>
              </div>
            </div>
            <div id="right_upper_box_right_box">
              <div>
                <h1 className="upper_boxof_navbar_h1">CLiq Cash</h1>
              </div>
              <div>
                <h1 className="upper_boxof_navbar_h1">Gift Card</h1>
              </div>
              <div>
                <h1 className="upper_boxof_navbar_h1">CLiq Care</h1>
              </div>
              <div>
                <h1 className="upper_boxof_navbar_h1">Track Orders</h1>
              </div>
              <div>
                <SigninSignup />
              </div>
            </div>
          </div>
          <div id="right_lower_box">
            <Link to="/products/footwear">
              {" "}
              <div className="right_lower_box_first">
                <div className="right_lower_box_first_first">
                  <div id="category_box_arrow">
                    <div>
                      <h1
                        className="lowerboxof_navbar_category"
                        id="category_box"
                      >
                        Categories
                      </h1>
                    </div>
                    <div id="category_box_arrow_arrow">
                      <h1>
                        <ChevronDownIcon />
                      </h1>
                    </div>
                  </div>

                  <div className="dropdown-menu-category">
                    <div className="dropdown-menu-category-first">
                      <div className="dropdown-menu-category-first-first  h4-tag">
                        <p style={{ fontWeight: "300" }}>Women's Fashion</p>
                      </div>
                      <div className="dropdown-menu-category-first-second">
                        <div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Shop All Etnic Wear
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Kurtis & Kurtas
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Suits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sarees & Lehnga Sets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Bottoms
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Blouses & Fabrics
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Dupattas
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Shops All Western Wear
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Tops & Tunics
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Dresses
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Jeans
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Trouses
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Skirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shorts
                                </p>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets & Blazzer
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Legging
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Capris
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jumpsuits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shrugs
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sweater
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sweatshirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Activerwear & Sportships
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  T-shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  shorts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Truck Pnts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  innerwear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Linkerie
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shops all
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  bras
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Pnties
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Lingerie
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Cammison
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sleepswear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  swimswear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  shops all footwear
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  casua;l wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  boots
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sneakers
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  flips flops
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sports shoes
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  shoes
                                </p>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets & Blazzer
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Legging
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Capris
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jumpsuits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shrugs
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sweater
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sweatshirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Activerwear & Sportships
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  T-shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  shorts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Truck Pnts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  innerwear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Linkerie
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-menu-category-second">
                      <div className="dropdown-menu-category-second-first h4-tag">
                        <p style={{ fontWeight: "300" }}>Kid's Fashion</p>
                      </div>
                      <div className="dropdown-menu-category-second-second">
                        <div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Girls clothing
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Tops
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Jeans and trouser
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Dresses
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jumpsuits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  skirts and other wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Ethnic Wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Matching sets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sleepswear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Boys Clothing
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  T-isrts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Trouses
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Skirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shorts
                                </p>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets & Blazzer
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Legging
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Capris
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  inner wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Winter wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sweater
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sweatshirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Infants
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  T-shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  shorts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Truck Pnts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jumpsuits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>sets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Footwear
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Girl's footewear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  mamthcing shortss
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  inner
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  suits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  snw=eakerss
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  blazzer
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  track suits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  swimswear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  shops all footwear
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  casual wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  boots
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sneakers
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  flips flops
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sports shoes
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  shoes
                                </p>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets & Blazzer
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Legging
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Capris
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jumpsuits
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-menu-category-third">
                      <div className="dropdown-menu-category-third-first h4-tag">
                        <p style={{ fontWeight: "300" }}>Men's Fashion</p>
                      </div>
                      <div className="dropdown-menu-category-third-second">
                        <div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Tops
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  t-shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Jeans
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Formal shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Bottoms
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Jeans
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  chinos
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sleepswear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Boys Clothing
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  T-isrts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Trouses
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Track pants
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Sctive wear
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets & Blazzer
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  shortss
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jogger
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  inner wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Winter wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sweater
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Sweatshirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Innerwear
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  T-shirts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  shorts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Truck Pnts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jumpsuits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Footwear
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  footewear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  mamthcing shorts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  inner
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  suits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  snweakerss
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  blazzer
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  track suits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  vests
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Watches
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  casual wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  boots
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sneakers
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  flips flops
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sports shoes
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Bags and Backpacks
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  track suits
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  swimswear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  shops all footwear
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  casual wear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  jackets & Blazzer
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Legging
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Capris
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-menu-category-fourth">
                      <div className="dropdown-menu-category-fourth-first h4-tag">
                        <p style={{ fontWeight: "300" }}>Home and Kitchen</p>
                      </div>
                      <div className="dropdown-menu-category-fourth-second">
                        <div>
                          <div>
                            <div>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Bedding & linene
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Bedsjheets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Bedding sets
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Pilows and matt
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Comforters
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  quilts
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Dohar
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Kids Bedding linen
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  sleepswear
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Bath linen
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Towels
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Hand Towel
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Face towel
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Bath mats and rugs
                                </p>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <p
                                  className="a-a"
                                  style={{ fontWeight: "300" }}
                                >
                                  Rugs
                                </p>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Floor Lmaps</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Decorative Lights</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Lundry</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>coushion cover</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Rooms furninshing
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>rugs</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Sweatshirts</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Lamps and light
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>table lamps</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>cieling lamps</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>carpets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>cusion cover</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Doormats</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>sets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Footwear
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>carpets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>cusion cover</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Doormats</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>sets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Lmaps
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bedsjheets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bedding sets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Pilows and matt</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Bedding & linene
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              {" "}
                              <Link style={linkstyle}>
                                <a>casual wear</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              {" "}
                              <Link style={linkstyle}>
                                <a>boots</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Bath linen
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Towels</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Hand Towel</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Face towel</a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Home Decore</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Show piece</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  wall Decore
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>vases</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bedsjheets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bedding sets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Pilows and matt</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>carpets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>cusion cover</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Doormats</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-menu-category-fifth">
                      <div className="dropdown-menu-category-fifth-first h4-tag">
                        <p style={{ fontWeight: "300" }}>Beauty</p>
                      </div>
                      <div className="dropdown-menu-category-fifth-second">
                        <div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Fragrance Store
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>perfume</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>gift</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Deodrandts</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bodymists</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>All frangrance</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Makeup</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Eyes
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Matching sets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Naila</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Fcae</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Lips</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Skin
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>All Makeup</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Shorts</a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Mosturises</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>facial</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Eye creams</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Combo sets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Men's Skin Care</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Ntural skin care</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Derma Skin Care</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Hair
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>hsmapoo</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>conditioner</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>hair masks</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>hair styling</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>hair care</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>all skin</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  K-skin
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Ntural Hair Color</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>All Hiar</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>inner</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Men's grooming
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>shaving</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Beard and momtchaaes</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Tools and Accesories
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Bath and Body
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  All Beauty and grooming
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-menu-category-sixth">
                      <div className="dropdown-menu-category-sixth-first h4-tag">
                        <p style={{ fontWeight: "300" }}>Gadgets</p>
                      </div>
                      <div className="dropdown-menu-category-sixth-second">
                        <div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Audio store
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Headphones</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Wired Earphone</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Headsets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Neckbands</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>True wear</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Headsets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Headphones</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Spekaers
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bluetooth</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Wearabele
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>premium</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Personal Care
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Hair Dryers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>sound</a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Hair starithner</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>hair stylers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Trimmers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Eplitaors</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Oral Care</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Hair curlers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Health care
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Electric meassagers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Health monitor</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Steamers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Wiegh</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Thermometer</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Tech Accesories
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Fast Chargers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Power Banks
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Cables</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Cases & Cover</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Screen Protector</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Memeory Cards</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Mobile Holders</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Tblets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Smart Home
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Lights</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Smarts Plugs</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Smarts Locks</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Powers and hands</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-menu-category-seventh">
                      <div className="dropdown-menu-category-seventh-first h4-tag">
                        <p style={{ fontWeight: "300" }}>Jewellery</p>
                      </div>
                      <div className="dropdown-menu-category-seventh-second">
                        <div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Golds Jewellery
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Earrings</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Chains</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Pendants</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Nceklace</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Managalsutaerra</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bnales</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Diamond Jewellery
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Earring</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Pnedats</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Nceklace</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Rings</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bnales</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Necklace</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Silver Jewellery
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Earring</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Rings</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Pendants</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Necklace</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bangles</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Toe Rings</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Sweatshirts</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Fashion Jewellery
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Earring</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Necklaces</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Pendants</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Bangles</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Rings</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Coins and bars
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Golds</a>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div>
                              <Link style={linkstyle}>
                                <a>Silver</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-menu-category-eight">
                      <div className="dropdown-menu-category-eight-first h4-tag">
                        <p style={{ fontWeight: "300" }}>Accesories</p>
                      </div>
                      <div className="dropdown-menu-category-eight-second">
                        <div>
                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Bags, Wallets
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>handsbags</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Sling Bags</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Backpacks</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Wallets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Clutches</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>meassagers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Body Bags</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Watches
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Smartsphones</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>for him</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>For hers</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Eyewears
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Wallets</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>sunglasses</a>
                              </Link>
                            </div>
                          </div>

                          <div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Reading Glasses</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Eye glasses</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Ffashion Accesories
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Belts</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Ties</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Socks</a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a
                                  className="black-giving"
                                  style={{ fontWeight: "450" }}
                                >
                                  Luggage & Trolley
                                </a>
                              </Link>
                            </div>
                            <div className="a-a" style={{ fontWeight: "300" }}>
                              <Link style={linkstyle}>
                                <a>Trolley</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="right_lower_box_second">
              <div className="right_lower_box_second_first">
                {/* <h1 className="lowerboxof_navbar_brand" id="brand_box">Brands</h1> */}
                <div id="brand_box_arrow">
                  <div>
                    <h1 className="lowerboxof_navbar_brand" id="brand_box">
                      Brands
                    </h1>
                  </div>
                  <div id="brand_box_arrow_arrow">
                    <h1>
                      <ChevronDownIcon />
                    </h1>
                  </div>
                </div>

                <div className="dropdown-menu-category-brands">
                  <div className="dropdown-menu-category-brands-first">
                    <div className="dropdown-menu-category-brands-first-first h5-tag">
                      <p style={{ fontWeight: "300" }}>Women's Wear</p>
                    </div>
                    <div className="dropdown-menu-category-brands-first-second">
                      <div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <p className="black-giving">Popular Brands</p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Utsa</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Forver 21</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Lov</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Biba</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Bomabay Pasley</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Only</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Wardrobe</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Ishin</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Vark</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Trumph</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Zuba</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Indo Era</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Zivame</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Zink London</Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Featured Brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Westside</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Westside</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>wan huesen</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Adidas</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Kazo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Arelia</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Kazo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Engamo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Levi's</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Jaipuri kurti</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Clovia</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Soch</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>United color</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Globus</a>
                            </Link>
                          </div>
                        </div>
                        <div className="third_box_of_brands_extension">
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/13999033614366.png"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/13999033843742.png"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/15140220403742.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013524955166.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/15963080425502.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/13999034531870.png"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-menu-category-brands-second">
                    <div className="dropdown-menu-category-brands-second-first h5-tag">
                      <p style={{ fontWeight: "300" }}>Men's Wear</p>
                    </div>
                    <div className="dropdown-menu-category-brands-second-second">
                      <div>
                        <div>
                          <div>
                            <Link style={linkstyle}>
                              <p className="black-giving">Popular Brands</p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Utsa</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Eta</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Kazo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Engamo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Levi's</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Puma</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Ascot</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>killer</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Raymonds</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Blackberry</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Woodlands</a>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Fetaured brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>WestSide</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>US POLO</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>WES</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Peter Englands</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Fruits of the loom</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Flying Machine</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Celo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>westesed</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>parx</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>spykar</a>
                            </Link>
                          </div>
                        </div>
                        <div className="third_box_of_brands_extension">
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525020702.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525086238.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525151774.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525217310.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525282846.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525348382.jpg"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-menu-category-brands-third">
                    <div className="dropdown-menu-category-brands-third-first h5-tag">
                      <p style={{ fontWeight: "300" }}>Footwear</p>
                    </div>
                    <div className="dropdown-menu-category-brands-third-second">
                      <div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <p className="black-giving">Popular Brands</p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>red chief</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Roush</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Toms</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Alberto</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Campus</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Luna</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Regal</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Reebok</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>London</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a></a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Aldo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>New Ballance</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Hush Pupples</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Hoka</a>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Fetaured brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Red Tape</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Puma</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Crocs</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Asics</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Woodlnd</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Ctawalk</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Clarks</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Metro</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Mochio</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Bata</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Leone</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Clarks</Link>
                          </div>
                        </div>
                        <div className="third_box_of_brands_extension">
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525413918.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525479454.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525544990.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/14003109986334.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525610526.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525676062.jpg"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-menu-category-brands-fourth">
                    <div className="dropdown-menu-category-brands-fourth-first h5-tag">
                      <p style={{ fontWeight: "300" }}>Jewellery</p>
                    </div>
                    <div className="dropdown-menu-category-brands-fourth-second">
                      <div>
                        <div>
                          <div>
                            <Link style={linkstyle}>
                              <p className="black-giving">Popular Brands</p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Mia by Tanisq</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Malabar</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Jyalukkas</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>P.C Jewellery</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>P.C Chandra </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Wemen hari</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Orra</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Banglore Refinery</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Jyalukkas</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>P.C Jewellery</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>shaya</a>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Fetaured Brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>MELLORA</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Shaya</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>claar</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Sri Pearls</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Tribe</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Izara</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Tarash</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Ahilya</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Tlisman</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>London</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>real effect</a>
                            </Link>
                          </div>
                        </div>
                        <div className="third_box_of_brands_extension">
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/26759829979166.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/13957515968542.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/13957516165150.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/13957516099614.jpg"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-menu-category-brands-first">
                    <div className="dropdown-menu-category-brands-first-first h5-tag">
                      <p style={{ fontWeight: "300" }}>
                        Watches and Accesories
                      </p>
                    </div>
                    <div className="dropdown-menu-category-brands-first-second">
                      <div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <p className="black-giving">Popular Brands</p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>lavie</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Caprese</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Hide</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Lino</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Saggit</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Ammerican</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Carlton</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Skybags</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Gio</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Esbeda</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Fossil</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Da Milano</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Elle</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Addons</a>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Featured Brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Esbeda</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Fossil</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Da Milano</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Citzens</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Kenneth</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Lenskart</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Casion</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Tommy</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Sonata</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Caprese</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Hide</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Lino</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Timex</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>kklien</Link>
                          </div>
                        </div>
                        <div className="third_box_of_brands_extension">
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525741598.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525807134.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525872670.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013525938206.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013526003742.jpg"
                            ></img>
                          </div>
                          <div>
                            <img
                              className="third_box_of_brands_extension_div"
                              src="https://assets.tatacliq.com/medias/sys_master/images/33013526069278.jpg"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_lower_box_third">
              <input
                id="right_lower_box_third_input_box_id"
                className={
                  current
                    ? "right_lower_box_third_input_box whiteoninput"
                    : "right_lower_box_third_input_box"
                }
                onChange={(event) => {
                  setText(event.target.value);
                  handinginputbox();
                }}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    navigate(`/products/${text}`);
                    document.getElementById(
                      "right_lower_box_third_input_box_id"
                    ).value = "";
                    fn((prev) => !prev);
                    setcurrent(false);
                  }
                }}
                placeholder="Search By Category"
              ></input>

              <div
                className={
                  current ? "hidden_box displayblock" : "hidden_box displayNOne"
                }
              >
                {products.map((elem) => {
                  return (
                    <>
                      {elem.includes(text) ? (
                        <div className="inputdrop">
                          <h1
                            onClick={(ev) => {
                              clickoninputdrop(ev.target.innerText);
                            }}
                          >
                            {elem}
                          </h1>
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="fourth_lower_box">
              <div>
                <div>
                  <h1 className="icon_heart">
                    <FontAwesomeIcon icon={faHeart} />
                  </h1>
                </div>
                {/* {wishlistlen > 0 ? (
                  <div className="redround heart_icon">
                    <Link to="/wishlist">
                      <h4 className="heart_icon_h4">{wishlistlen}</h4>
                    </Link>
                  </div>
                ) : null} */}
              </div>
              <div>
                <Link to="/cart">
                  <div>
                    <h1 className="icon_heart">
                      <FontAwesomeIcon icon={faFolder} />
                    </h1>
                  </div>
                </Link>
                {/* {cartlen > 0 ? (
                  <div className="redround bag_icon">
                    <Link to="/cart">
                      <h4 className="heart_icon_h4">{cartlen}</h4>
                    </Link>
                  </div>
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
