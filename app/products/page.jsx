'use client';

import "./Products.css";
import {useState,useEffect} from "react";
import db from "./firebase_in_products";
import firebase from "firebase/compat/app";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, addToCartFunction } from '../store/reducer.js';



const ProductsScreen = ()=>{

  const cartLength = useSelector((state) => state.cartLength);
  const cart = useSelector((state)=> state.cart);
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

  useEffect(()=>{
  	db.collection('products').orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setProducts(snapshot.docs.map(doc => doc.data()));
    });
  },[products]);


	return (
		<div className="ProductsScreen">
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Anton+SC&display=swap" rel="stylesheet"/>
			<div className="desktop_menu_item_selected_style_for_books_page">
				<div className="nevigation_btn_background_style_in_books_page bg_white"> </div>
				<div className="nevigation_btn_background_style_in_books_page b"></div>
				<div className="nevigation_btn_background_style_in_books_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_books_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_books_page bg_white o_s"></div>
			</div>

			<div className="products_area">
				{products.map((item,index) =>{
		            return (
			            <Link href={`/products/${item.productId}`} key={index} className="product" 
				            >


							<div style={{ backgroundImage: "url("+item.leading_image+")",backgroundPosition :'center center',backgroundRepeat : 'no-repeat'}}  className="image"></div>
							<div className="product_name">{item.product_name} </div>
							<div className="price">৳ {item.product_price}</div>
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

export default ProductsScreen;