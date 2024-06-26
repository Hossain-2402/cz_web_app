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
}) {


  const handle = ()=>{

  }

  return (
    <html lang="en">
      

      <body className={inter.className}>
      <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
      <div className="navigation_area">

        <div className="user_input_area">

          <div className="logo">LOGO</div>

          <div className="search_bar_area">
            <input type="text" placeholder="Enter the name of the book" className="search_bar"/>
            <div className="search_btn">Search</div>
          </div>

          <div className="log_in_area">
            <div className="user_profile_image"></div>
            <Link href="/register" className="register_btn">Register</Link>
          </div>

          <div className="mobile_menu_btn"><i className="fa fa-bars"></i></div>
        </div>

        {/* The nev_btn_area is designed for the desktop version of this website  */}

        <div className="nev_btn_area">
          <Link href="/" className="nev_btn" onClick={()=>{ handle() }}>Home  </Link>
          <Link href="/books" className="nev_btn">Books</Link>
          <Link href="/category" className="nev_btn">Category</Link>
          <Link href="/about-us" className="nev_btn">About us</Link>
          <Link href="/contact-us" className="nev_btn">Contact us</Link>
        </div>


        {/* The menu_btn_area is designed for the desktop version of this website  */}

        <div className="menu_btn_area"></div>

      </div>
      {children}
      </body>
    </html>
  );
}
