'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {useState, useEffect} from "react";
import "./layout.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Home",
//   description: "This is the home page",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const [position_of_the_menu_area_for_mobile,set_position_of_the_menu_area_for_mobile] = useState("-200vw"); 
  const [class_name_of_icon,set_class_name_of_icon] = useState("fa fa-bars");

  const showMenuAreaInMobile = ()=>{
      console.log(class_name_of_icon);
    if(position_of_the_menu_area_for_mobile === "-200vw"){
      set_position_of_the_menu_area_for_mobile("0vw");
      set_class_name_of_icon("fa fa-times");
    }    
    else{
      set_position_of_the_menu_area_for_mobile("-200vw");
      set_class_name_of_icon("fa fa-bars");
    }
  }

  return (
    <html lang="en">
      
    <head><title>Comfort Zone</title></head>
      <body className={inter.className}>
      <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
      <div className="navigation_area">

        <div className="user_input_area">

          <Link href="/" className="logo">LOGO</Link>

          <div className="search_bar_area">
            <input type="text" placeholder="Enter the name of the book" className="search_bar"/>
            <div className="search_btn">Search</div>
          </div>

          <div className="log_in_area">
            <div className="user_profile_image"></div>
            <Link href="/register" className="register_btn">Register</Link>
          </div>
{/*fa fa-bars*/}
          <div className="mobile_menu_btn" onClick={()=>{showMenuAreaInMobile()}}><i className={class_name_of_icon}></i></div>
        </div>

        {/* The nev_btn_area is designed for the desktop version of this website  */}

        <div className="nev_btn_area">
          <Link href="/" className="nev_btn">Home  </Link>
          <Link href="/products" as="products" className="nev_btn">Products</Link>
          <Link href="/category" as="category" className="nev_btn">Category</Link>
          <Link href="/about-us" as="about-us" className="nev_btn">About us</Link>
          <Link href="/order-status" as="order-status" className="nev_btn o_s">Order Status</Link>
        </div>


      </div>

      <div style={{ left: position_of_the_menu_area_for_mobile }} className="mobile_menu_area">
        <div className="menu_btns_box">
          <Link href="/"  as="" className="nev_btn_for_mobile h_home" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); set_class_name_of_icon("fa fa-bars"); }}>Home  </Link>
          <Link href="/products"  as="products" className="nev_btn_for_mobile p_products" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); set_class_name_of_icon("fa fa-bars");}}>Products</Link>
          <Link href="/category"  as="category" className="nev_btn_for_mobile c_category" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); set_class_name_of_icon("fa fa-bars");}}>Category</Link>
          <Link href="/about-us"  as="about-us" className="nev_btn_for_mobile a_aboutus" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); set_class_name_of_icon("fa fa-bars");}}>About us</Link>
          <Link href="/order-status"  as="order-status" className="nev_btn_for_mobile or_orderstatus" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); set_class_name_of_icon("fa fa-bars"); }}>Order Status</Link>
        </div>
      </div>
      {children}
      </body>
    </html>
  );
}
