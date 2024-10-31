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
			<div className="cover">
			{products.map((item,index)=>{
				return (
						<Link key={index}  href={`/category/${item.categoryName}`}  className="card">
              <img src={item.categoryImage} className="card_image"/>
							<div className="layer"></div>
							<p className="categoryName">{item.categoryName}</p>
						</Link>
					);
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

export default CategoryScreen;