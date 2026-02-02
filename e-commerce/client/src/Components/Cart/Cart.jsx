import React, { useEffect } from "react";
import { useDialog } from "../../ContextProvider/ContextProvider";
import { IoClose } from "react-icons/io5";

import "./Cart.css";
import { Button } from "@mui/material";
import fashion2 from "../../assets/images/fashion2.jpg";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartDrawer, openDrawer, closedDrawer } = useDialog();

  console.log(`cart Drawer state is ${cartDrawer}`);
  if (!cartDrawer) return null;

  // console.log(`open drawer`)
  return (
    // <div>Cart</div>

    <div className="cart-main-container" onClick={closedDrawer}>
      <div
        className="cart-container"
        onClick={(e) => e.stopPropagation()} // prevent close when clicked inside drawer
      >
        <div className="cart-header">
          <h2>Shopping cart (255) </h2>
          <Button className="close-btn" onClick={closedDrawer}>
            <IoClose />
          </Button>
        </div>

        <div className="cart-items-scroll">
          <div className="cart-content">
            {" "}
            <div className="cart-item-details">
              {" "}
              <div className="cart-image">
                {" "}
                <img src={fashion2} />{" "}
              </div>{" "}
              <div className="cart-items-info">
                {" "}
                <h2>महिला वाइड लेग हाई-राइज</h2>{" "}
                <span>Track Suit for Women</span> <span>Quantity: 2</span>{" "}
                <span>Price Rs2500</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="cart-delete-btn">
              {" "}
              <Button className="dustbin-hell">
                <IoClose size={18} /> {/* X sign added */}
              </Button>{" "}
            </div>{" "}
          </div>
          <div className="cart-content">
            {" "}
            <div className="cart-item-details">
              {" "}
              <div className="cart-image">
                {" "}
                <img src={fashion2} />{" "}
              </div>{" "}
              <div className="cart-items-info">
                {" "}
                <h2>महिला वाइड लेग हाई-राइज</h2>{" "}
                <span>Track Suit for Women</span> <span>Quantity: 2</span>{" "}
                <span>Price Rs2500</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="cart-delete-btn">
              {" "}
              <Button className="dustbin-hell">
                <IoClose size={18} /> {/* X sign added */}
              </Button>{" "}
            </div>{" "}
          </div>
          <div className="cart-content">
            {" "}
            <div className="cart-item-details">
              {" "}
              <div className="cart-image">
                {" "}
                <img src={fashion2} />{" "}
              </div>{" "}
              <div className="cart-items-info">
                {" "}
                <h2>महिला वाइड लेग हाई-राइज</h2>{" "}
                <span>Track Suit for Women</span> <span>Quantity: 2</span>{" "}
                <span>Price Rs2500</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="cart-delete-btn">
              {" "}
              <Button className="dustbin-hell">
                <IoClose size={18} /> {/* X sign added */}
              </Button>{" "}
            </div>{" "}
          </div>
          <div className="cart-content">
            {" "}
            <div className="cart-item-details">
              {" "}
              <div className="cart-image">
                {" "}
                <img src={fashion2} />{" "}
              </div>{" "}
              <div className="cart-items-info">
                {" "}
                <h2>महिला वाइड लेग हाई-राइज</h2>{" "}
                <span>Track Suit for Women</span> <span>Quantity: 2</span>{" "}
                <span>Price Rs2500</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="cart-delete-btn">
              {" "}
              <Button className="dustbin-hell">
                <IoClose size={18} /> {/* X sign added */}
              </Button>{" "}
            </div>{" "}
          </div>
          <div className="cart-content">
            {" "}
            <div className="cart-item-details">
              {" "}
              <div className="cart-image">
                {" "}
                <img src={fashion2} />{" "}
              </div>{" "}
              <div className="cart-items-info">
                {" "}
                <h2>महिला वाइड लेग हाई-राइज</h2>{" "}
                <span>Track Suit for Women</span> <span>Quantity: 2</span>{" "}
                <span>Price Rs2500</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="cart-delete-btn">
              {" "}
              <Button className="dustbin-hell">
                <IoClose size={18} /> {/* X sign added */}
              </Button>{" "}
            </div>{" "}
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>1 item</span>
            <span>$86.00</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>$7.00</span>
          </div>
          <div className="summary-row">
            <span>Total (tax excl.)</span>
            <span>$93.00</span>
          </div>
          <div className="summary-row">
            <span>Total (tax incl.)</span>
            <span>$93.00</span>
          </div>
          <div className="taxes">Taxes: $0.00</div>
        </div>

        <div className="cart-divider"></div>

        <div className="cart-actions">
          <div className="cart-actions-btn">
            <Link to="/cart">
            
            <button className="btn-view">VIEW CART</button>
            </Link>
          </div>
          <div className="cart-actions-btn">
            <Link to="/checkout">
            <button className="btn-checkout">CHECKOUT</button>
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;