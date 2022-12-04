import "./NavBar.css"
import {Link, Routes, Route} from "react-router-dom";
import SigninSignup from './Signin_Signip_page';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import {useState} from 'react';

function NavBar(){
    const wishhlistformlocal = localStorage.getItem("wishlistdata");
    const len_wish = wishhlistformlocal.length;
    let cartformlocal = localStorage.getItem("cartdata");
    let len_cart = cartformlocal.length;
    const [wishlistlen, setwishlistlen] = useState(len_wish);
    const [cartlen , setcartlen] = useState(len_cart)
    const [current , setcurrent] = useState(false);
    const [text , setText] = useState("");

    const linkstyle = {
        textDecoration: "none",
        color : "gray",
    }
    console.log(text);

    const products= ["shirts","formal-shirts","t-shirts","socks","formal-shirts","shoes","shoes-sneakers","shoes-formal","shoes-heels"];


    function handinginputbox(){

        if(text.length > 1){
            setcurrent(true)
        }
        
        if(text.length == 1){
            setcurrent(false)
        }

        if(text == ""){
            setcurrent(false);
        }
    }

    function clickoninputdrop(targ){
        console.log(targ);
        document.getElementById("right_lower_box_third_input_box_id").value = targ;
    }



    return <>
    <div id="main_navbar">
        <div id="navbar_left_box">
           <Link to="/"> <img id="img_of_logo" src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png"></img></Link>
        </div>
        <div id="navbar_right_box">
            <div id="right_upper_box">
                <div id="right_upper_box_left_box">
                    <div>
                        <h1 className="upper_boxof_navbar_h1">Tata CLiq Luxury</h1>
                    </div>
                </div>
                <div id="right_upper_box_right_box">
                    <div><h1 className="upper_boxof_navbar_h1">CLiq Cash</h1></div>
                    <div><h1 className="upper_boxof_navbar_h1">Gift Card</h1></div>
                    <div><h1 className="upper_boxof_navbar_h1">CLiq Care</h1></div>
                    <div><h1 className="upper_boxof_navbar_h1">Track Orders</h1></div>
                    <div><SigninSignup /></div>
                </div>
            </div>
            <div id="right_lower_box">
                <div className="right_lower_box_first">
                    <div className="right_lower_box_first_first">
                        <div id="category_box_arrow">
                            <div><h1 className="lowerboxof_navbar_category" id="category_box">Categories</h1></div>
                            <div id="category_box_arrow_arrow"><h1><ChevronDownIcon  /></h1></div>
                        </div>

                        <div className="dropdown-menu-category">
                        <div className="dropdown-menu-category-first">
                            <div  className="dropdown-menu-category-first-first  h4-tag"><p>Women's Fashion</p></div>
                            <div className="dropdown-menu-category-first-second">
                                <div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Shop All Etnic Wear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Kurtis & Kurtas</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Suits</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sarees & Lehnga Sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Bottoms</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Blouses & Fabrics</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Dupattas</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Shops All Western Wear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Tops & Tunics</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Dresses</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Jeans</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Trouses</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Skirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Shorts</a></Link></div>
                                </div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jackets & Blazzer</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Legging</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Capris</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jumpsuits</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Shrugs</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sweater</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sweatshirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Activerwear & Sportships</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">T-shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">shorts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jackets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Truck Pnts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">innerwear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Linkerie</a></Link></div>

                                </div>
                                <div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">Shops all</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">sets</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">bras</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">Pnties</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">Lingerie</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">Cammison</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">sleepswear</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">swimswear</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="black-giving">sjops all footwear</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">casua;l wear</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">boots</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">sneakers</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">flips flops</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">sports shoes</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">shoes</a></Link></div>
                                </div>
                                <div>
                                   <div><Link style={linkstyle}><a className="a-a">jackets & Blazzer</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Legging</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Capris</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jumpsuits</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Shrugs</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sweater</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sweatshirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Activerwear & Sportships</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">T-shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">shorts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jackets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Truck Pnts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">innerwear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Linkerie</a></Link></div>
                                 </div>
                                </div>
                            </div>
                        </div>
                        


                        <div className="dropdown-menu-category-second">
                            <div className="dropdown-menu-category-second-first h4-tag"><p>Kid's Fashion</p></div>
                            <div className="dropdown-menu-category-second-second">
                                <div>
                                <div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">Girls clothing</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Tops</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Jeans and trouser</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Dresses</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">jumpsuits</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">skirts and other wear</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Ethnic Wear</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a  className="a-a">Matching sets</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">sleepswear</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">Boys Clothing</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">T-isrts</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Shirts</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Trouses</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Skirts</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Shorts</a></Link></div>
                                </div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jackets & Blazzer</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Legging</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Capris</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">inner wear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Winter wear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sweater</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sweatshirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Infants</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">T-shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">shorts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jackets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Truck Pnts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jumpsuits</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Footwear</a></Link></div>

                                </div>
                                <div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Girl's footewear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">mamthcing shortss</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">inner</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">suits</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">snw=eakerss</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">blazzer</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">track suits</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">swimswear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">shops all footwear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">casual wear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">boots</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">sneakers</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">flips flops</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">sports shoes</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">shoes</a></Link></div>
                                </div>
                                <div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="a-a">jackets & Blazzer</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Legging</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Capris</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jumpsuits</a></Link></div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="dropdown-menu-category-third">
                            <div className="dropdown-menu-category-third-first h4-tag"><p>Men's Fashion</p></div>
                            <div className="dropdown-menu-category-third-second">
                                <div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Tops</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">t-shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Jeans</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Formal shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Bottoms</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Jeans</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a" >chinos</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">sleepswear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Boys Clothing</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">T-isrts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Trouses</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Track pants</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Sctive wear</a></Link></div>
                                </div>
                                <div>
                                    <div><Link style={linkstyle}><a className="a-a">jackets & Blazzer</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">shortss</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">jogger</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">inner wear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Winter wear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sweater</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a">Sweatshirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Innerwear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a" >T-shirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a" >shorts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a" >jackets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a" >Truck Pnts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a" >jumpsuits</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="a-a" >sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Footwear</a></Link></div>

                                </div>
                                <div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >footewear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >mamthcing shorts</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >inner</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >suits</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >snweakerss</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >blazzer</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >track suits</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >vests</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">Watches</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a" >casual wear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">boots</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">sneakers</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">flips flops</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">sports shoes</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">Bags and Backpacks</a></Link></div>
                                </div>
                                <div>
                                <div><Link style={linkstyle}><a className="a-a">track suits</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">swimswear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">shops all footwear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">casual wear</a></Link></div>
                                   <div className="a-a"  ><Link style={linkstyle}><a className="a-a">jackets & Blazzer</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Legging</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="a-a">Capris</a></Link></div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="dropdown-menu-category-fourth">
                            <div className="dropdown-menu-category-fourth-first h4-tag"><p>Home and Kitchen</p></div>
                            <div className="dropdown-menu-category-fourth-second">
                                <div>
                                <div>
                                    <div><Link style={linkstyle}><a className="black-giving">Bedding & linene</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Bedsjheets</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Bedding sets</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Pilows and matt</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Comforters</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">quilts</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Dohar</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a" >Kids Bedding linen</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">sleepswear</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="black-giving">Bath linen</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Towels</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Hand Towel</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Face towel</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Bath mats and rugs</a></Link></div>
                                    <div className="a-a"><Link style={linkstyle}><a className="a-a">Rugs</a></Link></div>
                                </div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Floor Lmaps</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Decorative Lights</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Lundry</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>coushion cover</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Rooms furninshing</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>rugs</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Sweatshirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Lamps and light</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>table lamps</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>cieling lamps</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>carpets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>cusion cover</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Doormats</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Footwear</a></Link></div>

                                </div>
                                <div>
                                   <div className="a-a" ><Link  style={linkstyle}><a>carpets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>cusion cover</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Doormats</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Lmaps</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Bedsjheets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Bedding sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Pilows and matt</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Bedding & linene</a></Link></div>
                                   <div className="a-a" > <Link style={linkstyle}><a>casual wear</a></Link></div>
                                   <div className="a-a" >  <Link style={linkstyle}><a>boots</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Bath linen</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Towels</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Hand Towel</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Face towel</a></Link></div>
                                </div>
                                <div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Home Decore</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Show piece</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">wall Decore</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>vases</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Bedsjheets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Bedding sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Pilows and matt</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>carpets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>cusion cover</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Doormats</a></Link></div>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="dropdown-menu-category-fifth">
                            <div className="dropdown-menu-category-fifth-first h4-tag"><p>Beauty</p></div>
                            <div className="dropdown-menu-category-fifth-second">
                                <div>
                                <div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">Fragrance Store</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>perfume</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>gift</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>Deodrandts</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>Bodymists</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>All frangrance</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>Makeup</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">Eyes</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a >Matching sets</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>Naila</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>Fcae</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>Lips</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a className="black-giving">Skin</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>All Makeup</a></Link></div>
                                    <div className="a-a"  ><Link style={linkstyle}><a>Shorts</a></Link></div>
                                </div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Mosturises</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>facial</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Eye creams</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Combo sets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Men's Skin Care</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Ntural skin care</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Derma Skin Care</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Hair</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>hsmapoo</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>conditioner</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>hair masks</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>hair styling</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>hair care</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>all skin</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">K-skin</a></Link></div>

                                </div>
                                <div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Ntural Hair Color</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>All Hiar</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>inner</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Men's grooming</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>shaving</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Beard and momtchaaes</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Tools and Accesories</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Bath and Body</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="black-giving">All Beauty and grooming</a></Link></div>
                                </div>
                                </div>
                            </div>
                        </div>



                        <div className="dropdown-menu-category-sixth">
                            <div className="dropdown-menu-category-sixth-first h4-tag"><p>Gadgets</p></div>
                            <div className="dropdown-menu-category-sixth-second">
                                <div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Audio store</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Headphones</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Wired Earphone</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Headsets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Neckbands</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>True wear</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Headsets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Headphones</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Spekaers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a >Bluetooth</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Wearabele</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>premium</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Personal Care</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Hair Dryers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>sound</a></Link></div>
                                </div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Hair starithner</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>hair stylers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Trimmers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Eplitaors</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Oral Care</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Hair curlers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Health care</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Electric meassagers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Health monitor</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Steamers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Wiegh</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Thermometer</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Tech Accesories</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Fast Chargers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Power Banks</a></Link></div>

                                </div>
                                <div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Cables</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Cases & Cover</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Screen Protector</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Memeory Cards</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Mobile Holders</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Tblets</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Smart Home</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Lights</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a >Smarts Plugs</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Smarts Locks</a></Link></div>
                                   <div className="a-a" ><Link style={linkstyle}><a>Powers and hands</a></Link></div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown-menu-category-seventh">
                            <div className="dropdown-menu-category-seventh-first h4-tag"><p>Jewellery</p></div>
                            <div className="dropdown-menu-category-seventh-second">
                                <div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Golds Jewellery</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Earrings</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Chains</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Pendants</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Nceklace</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Managalsutaerra</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Bnales</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Diamond Jewellery</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Earring</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Pnedats</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Nceklace</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Rings</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Bnales</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Necklace</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Silver Jewellery</a></Link></div>
                                </div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Earring</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Rings</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Pendants</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Necklace</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Bangles</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Toe Rings</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Sweatshirts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Fashion Jewellery</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Earring</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Necklaces</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Pendants</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Bangles</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Rings</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Coins and bars</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Golds</a></Link></div>

                                </div>
                                <div>
                                   <div><Link style={linkstyle}><a>Silver</a></Link></div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown-menu-category-eight">
                            <div className="dropdown-menu-category-eight-first h4-tag"><p>Accesories</p></div>
                            <div className="dropdown-menu-category-eight-second">
                                <div>
                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Bags, Wallets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>handsbags</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Sling Bags</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Backpacks</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Wallets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Clutches</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>meassagers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a >Body Bags</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Watches</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Smartsphones</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>for him</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>For hers</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Eyewears</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Wallets</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>sunglasses</a></Link></div>
                                </div>

                                <div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Reading Glasses</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Eye glasses</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Ffashion Accesories</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Belts</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Ties</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Socks</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Luggage & Trolley</a></Link></div>
                                    <div className="a-a" ><Link style={linkstyle}><a>Trolley</a></Link></div>
                                </div>

                                </div>
                            </div>
                        </div>

                        </div>

                    </div>
                    
                </div>
                <div className="right_lower_box_second">
                       <div className="right_lower_box_second_first">
                           {/* <h1 className="lowerboxof_navbar_brand" id="brand_box">Brands</h1> */}
                           <div id="brand_box_arrow">
                            <div><h1 className="lowerboxof_navbar_brand" id="brand_box">Brands</h1></div>
                            <div id="brand_box_arrow_arrow"><h1><ChevronDownIcon  /></h1></div>
                            </div>



                           <div className="dropdown-menu-category-brands">
                           <div className="dropdown-menu-category-brands-first">
<div className="dropdown-menu-category-brands-first-first h5-tag"><p>Women's Wear</p></div>
<div className="dropdown-menu-category-brands-first-second">
    <div>
        <div>
           <div className="a-a" ><Link style={linkstyle}><a className="black-giving" >Popular Brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Utsa</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}>Forver 21</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Lov</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Biba</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Bomabay Pasley</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Only</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Wardrobe</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Ishin</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Vark</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Trumph</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Zuba</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Indo Era</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Zivame</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Zink London</Link></div>
        </div>
        <div>
           <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Featured Brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Westside</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Westside</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>wan huesen</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Adidas</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Kazo</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Arelia</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Kazo</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Engamo</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Levi's</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Jaipuri kurti</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Clovia</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Soch</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>United color</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Globus</a></Link></div>
        </div>
        <div className="third_box_of_brands_extension">
            <div >
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/13999033614366.png"></img>
            </div>
            <div >
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/13999033843742.png"></img>
            </div>
            <div >
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/15140220403742.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013524955166.jpg"></img>
            </div>
            <div >
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/15963080425502.jpg"></img>
            </div>
            <div >
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/13999034531870.png"></img>
            </div>
        </div>
    </div>
</div>
</div>



<div className="dropdown-menu-category-brands-second">
<div className="dropdown-menu-category-brands-second-first h5-tag"><p>Men's Wear</p></div>
<div className="dropdown-menu-category-brands-second-second">
<div>
        <div>
        <div><Link style={linkstyle}><a className="black-giving">Popular Brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}>Utsa</Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Eta</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Kazo</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Engamo</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Levi's</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Puma</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Ascot</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>killer</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Raymonds</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Blackberry</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Woodlands</a></Link></div>
        </div>
        <div>
           <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Fetaured brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>WestSide</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>US POLO</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>WES</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Peter Englands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Fruits of the loom</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Flying Machine</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Celo</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>westesed</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>parx</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>spykar</a></Link></div>
        </div>
        <div className="third_box_of_brands_extension">
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525020702.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525086238.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525151774.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525217310.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525282846.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525348382.jpg"></img>
            </div>
        </div>
    </div>
</div>
</div>


<div className="dropdown-menu-category-brands-third">
<div className="dropdown-menu-category-brands-third-first h5-tag"><p>Footwear</p></div>
<div className="dropdown-menu-category-brands-third-second">
<div>
        <div>
           <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Popular Brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>red chief</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Roush</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Toms</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Alberto</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Campus</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Luna</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Regal</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Reebok</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>London</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a></a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Aldo</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>New Ballance</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Hush Pupples</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Hoka</a></Link></div>
        </div>
        <div>
           <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Fetaured brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}>Red Tape</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Puma</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Crocs</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Asics</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Woodlnd</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Ctawalk</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Clarks</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Metro</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Mochio</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Bata</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Leone</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Clarks</Link></div>
        </div>
        <div className="third_box_of_brands_extension">
            <div>
                <img className="third_box_of_brands_extension_div" src= "https://assets.tatacliq.com/medias/sys_master/images/33013525413918.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src= "https://assets.tatacliq.com/medias/sys_master/images/33013525479454.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525544990.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/14003109986334.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525610526.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525676062.jpg"></img>
            </div>
        </div>
    </div>
</div>
</div>

<div className="dropdown-menu-category-brands-fourth">
<div className="dropdown-menu-category-brands-fourth-first h5-tag"><p>Jewellery</p></div>
<div className="dropdown-menu-category-brands-fourth-second">
<div>
        <div>
        <div><Link style={linkstyle}><a className="black-giving">Popular Brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Mia by Tanisq</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Malabar</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Jyalukkas</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>P.C Jewellery</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>P.C Chandra </a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Wemen hari</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Orra</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Banglore Refinery</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Jyalukkas</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>P.C Jewellery</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>shaya</a></Link></div>
        </div>
        <div>
           <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Fetaured Brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>MELLORA</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Shaya</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>claar</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Sri Pearls</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Tribe</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Izara</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Tarash</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Ahilya</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Tlisman</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>London</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>real effect</a></Link></div>
        </div>
        <div className="third_box_of_brands_extension">
            <div>
                <img  className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/26759829979166.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div"  src="https://assets.tatacliq.com/medias/sys_master/images/13957515968542.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div"  src= "https://assets.tatacliq.com/medias/sys_master/images/13957516165150.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div"  src="https://assets.tatacliq.com/medias/sys_master/images/13957516099614.jpg"></img>
            </div>
        </div>
    </div>
</div>
</div>


<div className="dropdown-menu-category-brands-first">
<div className="dropdown-menu-category-brands-first-first h5-tag"><p>Watches and Accesories</p></div>
<div className="dropdown-menu-category-brands-first-second">
<div>
        <div>
            <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Popular Brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>lavie</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Caprese</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Hide</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Lino</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Saggit</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Ammerican</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Carlton</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Skybags</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Gio</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Esbeda</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Fossil</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Da Milano</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Elle</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Addons</a></Link></div>
        </div>
        <div>
           <div className="a-a" ><Link style={linkstyle}><a className="black-giving">Featured Brands</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Esbeda</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Fossil</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Da Milano</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}>Citzens</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Kenneth</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Lenskart</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Casion</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Tommy</Link></div>
           <div className="a-a" ><Link style={linkstyle}>Sonata</Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Caprese</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Hide</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}><a>Lino</a></Link></div>
           <div className="a-a" ><Link style={linkstyle}>Timex</Link></div>
           <div className="a-a" ><Link style={linkstyle}>kklien</Link></div>
        </div>
        <div className="third_box_of_brands_extension">
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525741598.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525807134.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525872670.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013525938206.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013526003742.jpg"></img>
            </div>
            <div>
                <img className="third_box_of_brands_extension_div" src="https://assets.tatacliq.com/medias/sys_master/images/33013526069278.jpg"></img>
            </div>
        </div>
    </div>
</div>
</div>
                           </div>
                        </div>
                </div>
                <div className="right_lower_box_third">

                    <input id="right_lower_box_third_input_box_id" className={current ? "right_lower_box_third_input_box whiteoninput" : "right_lower_box_third_input_box"}  onChange={(event)=>{
                        setText(event.target.value);
                        handinginputbox();
                    }}></input>


                    <div className = {current ? "hidden_box displayblock" : "hidden_box displayNOne"}>

                         {
                           products.map((elem)=>{
                         return <>{elem.includes(text) ? <div className="inputdrop"><h1 onClick={(ev)=>{clickoninputdrop(ev.target.innerText)}}>{elem}</h1></div> : null}</>
                            })
                         }
                    </div>


                </div>
                <div className="fourth_lower_box">
                    <div>
                        <div><h1 className="icon_heart"><FontAwesomeIcon icon={faHeart} /></h1></div>
                        {
                            wishlistlen > 0 ? <div className="redround heart_icon"><Link to="/wishlist" ><h4 className="heart_icon_h4">{wishlistlen}</h4></Link></div> : null
                        }
                    </div>
                    <div>
                        <div><h1 className="icon_heart"><FontAwesomeIcon icon={faFolder} /></h1></div>
                        {
                            cartlen > 0 ? <div className="redround bag_icon"><Link to="/cart" ><h4 className="heart_icon_h4">{cartlen}</h4></Link></div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}


export default NavBar;

