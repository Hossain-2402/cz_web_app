'use client';

import "./SingalCategory.css";
import {useState,useEffect} from "react";
import db from "../../firebase";
import firebase from "firebase/compat/app";
import Link from "next/link";



const SingalCategory = ({params})=>{

	const [currentCategoryProducts,setCurrentCategoryProducts] = useState([]);

	var list = [];

	useEffect(()=>{
		db.collection('products').orderBy("timestamp","desc").onSnapshot(snapshot=>{
		  snapshot.docs.map(doc =>{
			if(doc.data().category === params.categoryId){
				list.push(doc.data())
			}
		  });
		  console.log(list)
		  setCurrentCategoryProducts(list);
		});
		console.log(currentCategoryProducts);
	},[currentCategoryProducts]);


	return (
		<div className="SingalCategory">
			<div className="desktop_menu_item_selected_style_for_category_page_in_detail_area">
				<div className="nevigation_btn_background_style_in_category_page_in_detail_area " > </div>
				<div className="nevigation_btn_background_style_in_category_page_in_detail_area "></div>
				<div className="nevigation_btn_background_style_in_category_page_in_detail_area b_in_detail_area">{params.categoryId}</div>
				<div className="nevigation_btn_background_style_in_category_page_in_detail_area bg_white"> </div>
				<div className="nevigation_btn_background_style_in_category_page_in_detail_area bg_white o_s_in_detail_area"> </div>
			</div>

			<div className="singalCategory_products_area">
				{currentCategoryProducts.map((item,index) =>{
		            return (
			            <Link href={`/products/${item.productId}`} key={index} className="singalCategory_product" 
				            >


							<div style={{ backgroundImage: "url("+item.leading_image+")",backgroundPosition :'center center',backgroundRepeat : 'no-repeat'}}  className="singalCategory_image"></div>
							<div className="singalCategory_product_name">{item.product_name} </div>
							<div className="singalCategory_price">৳ {item.product_price}</div>
			            </Link>);
	          })}
			</div>


		</div>
	);
}

export default SingalCategory;