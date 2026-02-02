import React, { useState } from "react";
import fashion3 from "../../assets/images/fashion3.jpg";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import './CartSpecifi.css'

const CartSpecifi = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Remove item function without actual logic
  const handleRemoveItem = () => {
    console.log("Remove item clicked - Add your logic here");
    // Yaha tapaile pachi remove logic add garna saknuhunchha
  };

  return (
    <div className="cart-sp-container">
      <div className="carting">
        <div className="cart-title">Shopping Cart</div>
        <div className="out-of-stock">Items out of stock</div>
      </div>
      
      <div className="cart-sp">
        <div className="cart-sp-content">
          {/* First Cart Item */}
          <div className="cart-sp-items">
            {/* Close/Delete Button */}
            <button 
              className="remove-item-btn"
              onClick={handleRemoveItem}
            >
              <IoClose size={20} />
            </button>
            
            <div className="cart-sp-image">
              <img src={fashion3} alt="fashion" />
            </div>
            <div className="items-sp-details">
              <div className="item-sp-brand">फ्लाइङ मेशिन</div>
              <div className="items-sp-name">महिला वाइड लेग हाई-राइज</div>
              
              {/* Size Selection */}
              <div className="item-sp-size">
                <span className="size-label-sp">Size:</span>
                <div className="size-options">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="quantity-selector">
                <span className="quantity-label">Quantity:</span>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={handleDecrease}>-</button>
                  <span className="quantity-value">{quantity}</span>
                  <button className="quantity-btn" onClick={handleIncrease}>+</button>
                </div>
              </div>

              <div className="item-price-sp">
                <span className="current-price-sp">£1,214</span>
                <span className="original-price-sp">£2,699</span>
                <span className="discount-sp">55% OFF</span>
              </div>
              <div className="return-info-sp">14 days return available</div>
            </div>
          </div>

          {/* Second Cart Item */}
          <div className="cart-sp-items">
            {/* Close/Delete Button */}
            <button 
              className="remove-item-btn"
              onClick={handleRemoveItem}
            >
              <IoClose size={20} />
            </button>
            
            <div className="cart-sp-image">
              <img src={fashion3} alt="fashion" />
            </div>
            <div className="items-sp-details">
              <div className="item-sp-brand">फ्लाइङ मेशिन</div>
              <div className="items-sp-name">महिला वाइड लेग हाई-राइज</div>
              
              {/* Size Selection for second item */}
              <div className="item-sp-size">
                <span className="size-label-sp">Size:</span>
                <div className="size-options">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector for second item */}
              <div className="quantity-selector">
                <span className="quantity-label">Quantity:</span>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={handleDecrease}>-</button>
                  <span className="quantity-value">{quantity}</span>
                  <button className="quantity-btn" onClick={handleIncrease}>+</button>
                </div>
              </div>

              <div className="item-price-sp">
                <span className="current-price-sp">£1,214</span>
                <span className="original-price-sp">£2,699</span>
                <span className="discount-sp">55% OFF</span>
              </div>
              <div className="return-info-sp">14 days return available</div>
            </div>
          </div>
        </div>

        <div className="cart-summary-sp">
          <div className="price-details-sp">
            <div className="price-title-sp">PRICE DETAILS (2 items)</div>
            <div className="price-row-sp">
              <span className="price-label-sp">Total MRP</span>
              <span className="price-value-sp">£3,794</span>
            </div>
            <div className="price-row-sp">
              <span className="price-label-sp">Discount on MRP</span>
              <span className="price-value-sp discount-value-sp">- £1,485</span>
            </div>
            <div className="price-row-sp coupon-section">
              <span className="price-label-sp">Coupon Discount</span>
              <Link to="#" className="apply-coupon-sp">Apply Coupon</Link>
            </div>
            <div className="price-row-sp">
              <span className="price-label-sp">Platform Fee</span>
              <span className="price-value-sp">FREE</span>
            </div>
            <div className="price-row-sp">
              <span className="price-label-sp">Shipping Fee</span>
              <span className="price-value-sp">Free shipping for you</span>
            </div>
            <div className="total-amount-sp">
              <span>Total Amount</span>
              <span>£2,309</span>
            </div>
          </div>
          <Link to="/checkout" className="place-order-btn-sp">PLACE ORDER</Link>
        </div>
      </div>
    </div>
  );
};

export default CartSpecifi;