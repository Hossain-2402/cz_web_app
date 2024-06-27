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

  const showMenuAreaInMobile = ()=>{
    if(position_of_the_menu_area_for_mobile === "-200vw"){
      set_position_of_the_menu_area_for_mobile("0vw");
    }    
    else{
      set_position_of_the_menu_area_for_mobile("-200vw");
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

          <div className="mobile_menu_btn" onClick={()=>{showMenuAreaInMobile()}}><i className="fa fa-bars"></i></div>
        </div>

        {/* The nev_btn_area is designed for the desktop version of this website  */}

        <div className="nev_btn_area">
          <Link href="/" className="nev_btn">Home  </Link>
          <Link href="/products" className="nev_btn">Products</Link>
          <Link href="/category" className="nev_btn">Category</Link>
          <Link href="/about-us" className="nev_btn">About us</Link>
          <Link href="/order-status" className="nev_btn o_s">Order Status</Link>
        </div>


      </div>

      <div style={{ left: position_of_the_menu_area_for_mobile }} className="mobile_menu_area">
        <div className="menu_btns_box">
          <Link href="/"  as="" className="nev_btn_for_mobile h_home" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); }}>Home  </Link>
          <Link href="/products"  as="products" className="nev_btn_for_mobile p_products" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); }}>Products</Link>
          <Link href="/category"  as="category" className="nev_btn_for_mobile c_category" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); }}>Category</Link>
          <Link href="/about-us"  as="about-us" className="nev_btn_for_mobile a_aboutus" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); }}>About us</Link>
          <Link href="/order-status"  as="order-status" className="nev_btn_for_mobile or_orderstatus" onClick={()=>{ set_position_of_the_menu_area_for_mobile("-200vw"); }}>Order Status</Link>
        </div>
      </div>
      {children}
      </body>
    </html>
  );
}
