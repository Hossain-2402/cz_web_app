'use client';

import "./CartScreen.css";
import {useState,useEffect} from "react";
import db from "../products/firebase_in_products";
import firebase from "firebase/compat/app";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, addToCartFunction } from '../store/reducer.js';


const CartScreen = ()=>{


  const cartProducts = useSelector((state)=> state.cart);

  const [position_of_the_detail_area,set_position_of_the_detail_area] = useState("-200vw"); 



	return (
		<div className="CartScreen">
			<div className="desktop_menu_item_selected_style_for_Cart_page">
				<div className="nevigation_btn_background_style_in_Cart_page bg_white"> </div>
				<div className="nevigation_btn_background_style_in_Cart_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_Cart_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_Cart_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_Cart_page bg_white o_s"></div>
			</div>

			<div style={{ left : position_of_the_detail_area }} className="detail_cart_product">
				<div className="exit_detail_screen" onClick={()=>{ set_position_of_the_detail_area("-200vw") }}><i className="fa fa-times"></i></div>
			</div>


			{cartProducts.length === 0 ?

			<div className="no_product_in_cart_area">No items in cart</div>

			 :
 				<div className="cart_products_area" >
					{cartProducts.map((item,index) =>{
			            return (
				            <div key={index} className="cartProduct" onClick={()=>{ set_position_of_the_detail_area("0vw") }}>
								<div style={{ backgroundImage: "url("+item.leading_image+")",backgroundPosition :'center center',backgroundRepeat : 'no-repeat',backgroundSize : '85%'}}  className="cartProductImage"></div>
								<div className="cart_product_name">{item.product_name} </div>
								<div className="cart_price">৳ {item.product_price}</div>
				            </div>);
			          })}
				</div>


			  }



		</div>
		);
}

export default CartScreen;