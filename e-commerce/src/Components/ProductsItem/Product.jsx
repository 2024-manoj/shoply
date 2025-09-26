import Button from "@mui/material/Button";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { PiRectangleDashedThin } from "react-icons/pi";
import { Link } from "react-router-dom";




const Product = ({
  image,
  discount,
  brand,
  name,
  rating,
  price,
  originalPrice,
  id
}) => {
  return (

    <Link to={`/product/${id}`} style={{textDecoration:"none", color:"inherit"}}>
    <div className="product-list">
      <div className="product-img-container">

      <img className="product-img" src={image} alt={name} />
      <div className="hover-buttons">
        <button className="hover-btn"><IoEyeOutline /></button>
        <button className="hover-btn"><FaRegHeart /></button>
        <button className="hover-btn"><PiRectangleDashedThin/></button>
      </div>
      </div>
      <div className="discount">{discount}% OFF</div>
      <div className="product-details">
        <p>{brand}</p>
        <h3>{name}</h3>
        <div className="rating">
          {"★".repeat(rating)} ({rating}/5)
        </div>
        <div className="price-container">
          <div className="original-price">Rs{originalPrice}</div>
          <div className="discounted-price">Rs{price}</div>
        </div>
        <div className="add-cart">
          <Button variant="outlined" className="add-to-cart">
            <MdOutlineShoppingCart /> ADD TO CART
          </Button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Product;
