'use client'

import "./Category.css";
import { useEffect,useState } from "react";
import db from "../firebase";
import firebase from "firebase/compat/app";
import Link from "next/link";

const CategoryScreen = ()=>{
  

  const [products,setProducts] = useState([]);

  var list = [];

  useEffect(()=>{
    db.collection('products').orderBy("timestamp","desc").onSnapshot(snapshot=>{
      snapshot.docs.map(doc=>{
      	if(!list.includes(doc.data().category)){
			list.push(doc.data().category);
      	}
      });
      setProducts(list);
      console.log(products);
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

			{products.map((item)=>{
				return (
						<Link href={`/category/${item}`}  className="card">{item}</Link>
					);
			})}

		</div>
		);
}

export default CategoryScreen;