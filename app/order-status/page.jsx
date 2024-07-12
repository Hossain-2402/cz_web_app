'use client'

import "./OrderStatus.css";
import db from "../cart/firebase_in_cart";
import firebase from "firebase/compat/app";
import {useState,useEffect} from "react";

const OrderStatusScreen = ()=>{

	const [order_id,set_order_id] = useState("");

	const [position_of_the_checkouh_user_info_input_area,set_position_of_the_checkouh_user_info_input_area] = useState("-200vw");

	const[text_here,setText_here] = useState("");

	const [orderedProducts,serOrderedProducts] = useState("");

	const handle_customer_name = (e)=>{
		set_order_id(e.target.value);
	}

	const search = ()=>{
		 db.collection('orders').orderBy("timestamp","desc").onSnapshot(snapshot=>{
	      snapshot.docs.map(doc =>{
			if(doc.data().checkoutID === order_id){
				console.log(doc.data().products);
				setText_here("Your order has been found");
				serOrderedProducts(doc.data().products);
			}
		  });
	    });
	}

	return (
		<div className="OrderStatusScreen">
			<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
			<link href="https://fonts.googleapis.com/css2?family=Anton+SC&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>

			<div className="desktop_menu_item_selected_style_for_order_status_page">
				<div className="nevigation_btn_background_style_in_order_status_page bg_white"> </div>
				<div className="nevigation_btn_background_style_in_order_status_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_order_status_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_order_status_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_order_status_page o_s o"></div>
			</div>

			<input type="text" placeholder="Enter Your Order ID" className="order_status_input" onChange={(e)=>{handle_customer_name(e)}} value={order_id}/>

			<div className="see_status_btn" onClick={()=>{
				if(order_id !== ""){
					set_position_of_the_checkouh_user_info_input_area("0")
				}else{ alert("Enter your order id")}
			 }}>See Status</div>

			<div style={{ left : position_of_the_checkouh_user_info_input_area }}  className="order_status_area">
				<div className="exit_detail_screen" onClick={()=>{ set_position_of_the_checkouh_user_info_input_area("-200vw"); search(); }}><i className="fa fa-times"></i></div>
				{orderedProducts.length}
			</div>

		</div>
		);
}

export default OrderStatusScreen;


// 6405244a-5d24-4ef6-adfa-4f2a9be48001