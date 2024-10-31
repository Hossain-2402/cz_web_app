'use client';

import "./Home.css";
import { useEffect,useState } from "react";
import db from "./firebase";
import firebase from "firebase/compat/app";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/reducer.js';
import Image from "next/Image";

import HeaderImage from "./headerImage.png";


const Home = ()=>{


  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const [products,setProducts] = useState([{
        product_name : "Product Name",
        product_price : "55",
        product_detail : " Product detail" ,
        leading_image : "Some Image",
        first_image : "first image",
        second_image : "second image",
        third_image : "third image",
        forth_image : "forth image",
        quantity : 1,
        sizes : "S",
        timestamp : firebase.firestore.FieldValue.serverTimestamp()}]);

  const [categories,setCategories] = useState([]);

  const [currentCategoryProducts,setCurrentCategoryProducts] = useState([]);


  var list = [];

  var tempList = [];

  var categoryList = [];


  useEffect(()=>{
    db.collection('products').orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setProducts(snapshot.docs.map(doc=> doc.data()));
    });

    db.collection('products').orderBy("timestamp","desc").onSnapshot(snapshot=>{
      snapshot.docs.map(doc=>{
        if(!list.includes(doc.data().category)){
          list.push(doc.data().category);
          tempList.push({categoryName: doc.data().category,categoryImage: doc.data().leading_image })
        }
      });
      setCategories(tempList);
    });

    db.collection('products').orderBy("timestamp","desc").onSnapshot(snapshot=>{
      snapshot.docs.map(doc =>{
      if(doc.data().category === "drop-shoulder"){
        categoryList.push(doc.data())
      }
      });
      setCurrentCategoryProducts(categoryList);
    });
  },[currentCategoryProducts]);

  return (
    <div className="Home">
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Anton+SC&display=swap" rel="stylesheet"/>
      <div className="desktop_menu_item_selected_style_for_home_page">
        <div className="nevigation_btn_background_style_in_home_page h"> </div>
        <div className="nevigation_btn_background_style_in_home_page bg_white"></div>
        <div className="nevigation_btn_background_style_in_home_page bg_white"></div>
        <div className="nevigation_btn_background_style_in_home_page bg_white"></div>
        <div className="nevigation_btn_background_style_in_home_page bg_white o_s"></div>
      </div>

      <div className="landing_image_area">
        <Image src={HeaderImage} objectFit="cover"  placeholder="blur" className="landing_image"/>
        <div className="grey_shade_in_landing_image"></div>
        <div className="heading_text_and_btn_area">
          <h1 className="large_image">Comfort Zone</h1>
          <span className="intro_text">Comfort Zone is a brand targeting the youth to provide their desired outfits.</span>
          <div className="cart_btn_in_heading">Cart</div>
        </div>
      </div>

      <h2 className="products_text">Latest products</h2>

      <div className="first_five_products_products_area">
        {products.filter((item, idx) => idx < 4).map((item,index) => {
          const image_path = item.leading_image;
          return (
            <Link href={`/products/${item.productId}`} key={index} className="first_five_products_product" >
              <div style={{ backgroundImage: "url("+item.leading_image+")",backgroundPosition :'center center',backgroundRepeat : 'no-repeat'}}  className="first_five_products_image"></div>
              <div className="first_five_products_product_name">{item.product_name} </div>
              <div className="first_five_products_price">৳ {item.product_price}</div>
            </Link>);
        })}
      </div>


      <h2 className="products_text">Catogery</h2>


      <div className="cover">
        {categories.map((item,index)=>{
          return (
              <Link key={index} style={{ backgroundImage: "url("+item.categoryImage+")",backgroundPosition :'center center',backgroundRepeat : 'no-repeat' }} href={`/category/${item.categoryName}`}  className="card">
                <div className="layer"></div>
                <p className="categoryName">{item.categoryName}</p>
              </Link>
            );
        })}
      </div>


      <h2 className="products_text">Drop Shoulders</h2>

      <div className="first_five_products_products_area">
        {currentCategoryProducts.map((item,index) => {
          return (
            <Link href={`/products/${item.productId}`} key={index} className="first_five_products_product" >
              <div style={{ backgroundImage: "url("+item.leading_image+")",backgroundPosition :'center center',backgroundRepeat : 'no-repeat'}}  className="first_five_products_image"></div>
              <div className="first_five_products_product_name">{item.product_name} </div>
              <div className="first_five_products_price">৳ {item.product_price}</div>
            </Link>);
        })}
      </div>



      <div className="footer">
        <div className="layer_1">
          <Link href="/" as="/" className="logo_in_footer">CZ</Link>
          <a href="https://www.facebook.com/comfortzone.outfit" className="facebook">Facebook</a>
          <a href="" className="instagram">Instagram</a>
          <a href="" className="twitter">Twitter</a>
        </div>
        <div className="layer_2">© 2024 CZ. All rights reserved.</div>
      </div>

    </div>
    );
}

export default Home;





/*

              <div style={{ backgroundImage: "url("+item.leading_image+")",backgroundPosition :'center center',backgroundRepeat : 'no-repeat'}}  className="first_five_products_image"></div>


*/