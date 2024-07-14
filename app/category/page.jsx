'use client'

import "./Category.css";
import { useEffect,useState } from "react";
import db from "../firebase";
import firebase from "firebase/compat/app";
import Link from "next/link";

const CategoryScreen = ()=>{
  

  const [products,setProducts] = useState([]);

  var list = [];

  var tempList = [];

  useEffect(()=>{
    db.collection('products').orderBy("timestamp","desc").onSnapshot(snapshot=>{
      snapshot.docs.map(doc=>{
      	if(!list.includes(doc.data().category)){
      		list.push(doc.data().category);
      		tempList.push({categoryName: doc.data().category,categoryImage: doc.data().leading_image })
      	}
      });
      setProducts(tempList);
      console.log(tempList);
    });
  },[]);

	return (
		<div className="CategoryScreen">
			<div className="desktop_menu_item_selected_style_for_category_page">
				<div className="nevigation_btn_background_style_in_category_page bg_white"> </div>
				<div className="nevigation_btn_background_style_in_category_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_category_page c"></div>
				<div className="nevigation_btn_background_style_in_category_page bg_white"></div>
				<div className="nevigation_btn_background_style_in_category_page bg_white o_s"></div>
			</div>

			{products.map((item,index)=>{
				return (
						<Link key={index} style={{ backgroundImage: "url("+item.categoryImage+")",backgroundPosition :'center center',backgroundRepeat : 'no-repeat' }} href={`/category/${item.categoryName}`}  className="card">
							<div className="layer"></div>
							<p className="categoryName">{item.categoryName}</p>
						</Link>
					);
			})}

		</div>
		);
}

export default CategoryScreen;