// src/components/OrderPage.jsx
import React, { useState } from 'react';
import './OrderPage.css';
import { FaShoppingBag, FaShippingFast, FaCreditCard, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFlag, FaMountain, FaHiking } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const OrderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Kathmandu',
    state: '',
    zipCode: '',
    country: 'Nepal',
    wardNumber: ''
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    method: 'esewa',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      name: 'Masala Mix (Sundari Brand)',
      price: 250,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
      category: 'Spices',
      brand: 'Nepali Kitchen'
    },
    {
      id: 2,
      name: 'Goat Meat - Fresh',
      price: 850,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1603048297172-c83c0ac75b81?w=400&h=400&fit=crop',
      category: 'Meat',
      weight: '1 kg',
      local: true
    },
    {
      id: 3,
      name: 'Coriander Powder',
      price: 120,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1596040033221-a5f2e8f9e72a?w=400&h=400&fit=crop',
      category: 'Spices',
      weight: '100 gm'
    },
    {
      id: 4,
      name: 'Siddo Rice (Basmati)',
      price: 1800,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
      category: 'Grains',
      weight: '25 kg',
      local: true
    }
  ]);

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 2000 ? 0 : 150; // Free shipping above NPR 2000
  const tax = subtotal * 0.13; // 13% VAT
  const total = subtotal + shippingCost + tax;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setOrderItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setOrderItems(items => items.filter(item => item.id !== id));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    alert('Your order has been placed successfully! Thank you for shopping with us.');
  };

  const nepaliCities = [
    'Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur', 'Biratnagar',
    'Birgunj', 'Butwal', 'Dharan', 'Hetauda', 'Janakpur', 'Nepalgunj'
  ];

  const steps = [
    { number: 1, title: 'Cart', icon: <FaShoppingBag /> },
    { number: 2, title: 'Shipping', icon: <FaShippingFast /> },
    { number: 3, title: 'Payment', icon: <FaCreditCard /> },
    { number: 4, title: 'Confirm', icon: <FaCheckCircle /> }
  ];

  return (
    <div className="order-page">
      {/* Nepali Themed Header */}
      <div className="order-header">
        <div className="nepal-icon">
          <FaMountain />
        </div>
        <h1>Nepal Shop - Order Checkout</h1>
        <p className="order-subtitle">Complete your purchase with local Nepali products</p>
      </div>

      {/* Progress Steps */}
      <div className="progress-steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div 
              className={`step ${currentStep >= step.number ? 'active' : ''}`}
              onClick={() => setCurrentStep(step.number)}
            >
              <div className="step-icon">{step.icon}</div>
              <span className="step-title">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="step-connector">
                <FiChevronRight />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="order-container">
        <div className="order-content">
          {/* Cart Items with Nepali Products */}
          {currentStep === 1 && (
            <div className="cart-section">
              <h2><FaShoppingBag /> Shopping Cart</h2>
              <div className="cart-items">
                {orderItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                      {item.local && <span className="local-badge">Local Product</span>}
                      {item.category === 'Spices' && <span className="category-badge spice">Spices</span>}
                      {item.category === 'Meat' && <span className="category-badge meat">Meat</span>}
                      {item.category === 'Grains' && <span className="category-badge grain">Grains</span>}
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <div className="item-meta">
                        {item.brand && <span className="brand">{item.brand}</span>}
                        <span className="category">{item.category}</span>
                        {item.weight && <span className="weight">{item.weight}</span>}
                      </div>
                      <div className="item-price">
                        <span className="currency">NPR</span> {item.price.toLocaleString('en-NP')}
                      </div>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-control">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <div className="item-total">
                        NPR {(item.price * item.quantity).toLocaleString('en-NP')}
                      </div>
                      <button 
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-promo">
                <div className="promo-banner">
                  <span className="promo-icon">🎉</span>
                  <div>
                    <strong>Free Shipping Offer!</strong>
                    <p>On orders above NPR 2,000</p>
                  </div>
                </div>
              </div>
              <div className="section-actions">
                <button 
                  className="btn btn-next"
                  onClick={() => setCurrentStep(2)}
                >
                  Proceed to Shipping
                </button>
              </div>
            </div>
          )}

          {/* Shipping Information */}
          {currentStep === 2 && (
            <div className="shipping-section">
              <h2><FaShippingFast /> Shipping Information</h2>
              <form className="shipping-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleShippingChange}
                      required
                      placeholder="Ram Bahadur Shrestha"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      required
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      required
                      placeholder="980XXXXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label>Country *</label>
                    <div className="country-select">
                      <FaFlag className="nepal-flag" />
                      <select
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingChange}
                      >
                        <option>Nepal</option>
                        <option>India</option>
                        <option>Bhutan</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    required
                    placeholder="Tole, Village/City"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City/Municipality *</label>
                    <select
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      required
                    >
                      {nepaliCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>District *</label>
                    <input
                      type="text"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                      required
                      placeholder="Kathmandu"
                    />
                  </div>
                  <div className="form-group">
                    <label>Ward Number (Optional)</label>
                    <input
                      type="text"
                      name="wardNumber"
                      value={shippingInfo.wardNumber}
                      onChange={handleShippingChange}
                      placeholder="1, 2, 3..."
                    />
                  </div>
                </div>
                <div className="shipping-note">
                  <p><FaMapMarkerAlt /> <strong>Delivery Note:</strong> We deliver within 24 hours in Kathmandu Valley, 3-5 days in other locations.</p>
                </div>
              </form>
              <div className="section-actions">
                <button 
                  className="btn btn-back"
                  onClick={() => setCurrentStep(1)}
                >
                  Back to Cart
                </button>
                <button 
                  className="btn btn-next"
                  onClick={() => setCurrentStep(3)}
                  disabled={!shippingInfo.fullName || !shippingInfo.phone || !shippingInfo.address}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Payment Methods - Nepal Focused */}
          {currentStep === 3 && (
            <div className="payment-section">
              <h2><FaCreditCard /> Payment Method</h2>
              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="method"
                    value="esewa"
                    checked={paymentInfo.method === 'esewa'}
                    onChange={() => setPaymentInfo(prev => ({ ...prev, method: 'esewa' }))}
                  />
                  <div className="payment-option-content">
                    <div className="esewa-logo">eSewa</div>
                    <span>eSewa</span>
                  </div>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="method"
                    value="khalti"
                    checked={paymentInfo.method === 'khalti'}
                    onChange={() => setPaymentInfo(prev => ({ ...prev, method: 'khalti' }))}
                  />
                  <div className="payment-option-content">
                    <div className="khalti-logo">Khalti</div>
                    <span>Khalti</span>
                  </div>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="method"
                    value="cod"
                    checked={paymentInfo.method === 'cod'}
                    onChange={() => setPaymentInfo(prev => ({ ...prev, method: 'cod' }))}
                  />
                  <div className="payment-option-content">
                    <div className="cod-icon">💰</div>
                    <span>Cash on Delivery</span>
                  </div>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="method"
                    value="credit-card"
                    checked={paymentInfo.method === 'credit-card'}
                    onChange={() => setPaymentInfo(prev => ({ ...prev, method: 'credit-card' }))}
                  />
                  <div className="payment-option-content">
                    <FaCreditCard />
                    <span>Credit/Debit Card</span>
                  </div>
                </label>
              </div>

              {paymentInfo.method === 'credit-card' && (
                <div className="card-form">
                  <div className="form-group">
                    <label>Card Number *</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentChange}
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="form-group">
                    <label>Name on Card *</label>
                    <input
                      type="text"
                      name="cardName"
                      value={paymentInfo.cardName}
                      onChange={handlePaymentChange}
                      placeholder="Ram Bahadur Shrestha"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date *</label>
                      <input
                        type="text"
                        name="expiry"
                        value={paymentInfo.expiry}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentChange}
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="payment-instruction">
                {paymentInfo.method === 'esewa' && (
                  <div className="instruction esewa-instruction">
                    <h4>How to pay with eSewa:</h4>
                    <ol>
                      <li>Confirm your order</li>
                      <li>Scan the eSewa QR code</li>
                      <li>Receive payment confirmation</li>
                    </ol>
                  </div>
                )}
                {paymentInfo.method === 'khalti' && (
                  <div className="instruction khalti-instruction">
                    <h4>How to pay with Khalti:</h4>
                    <ol>
                      <li>Open Khalti app</li>
                      <li>Make the payment</li>
                      <li>Enter the Transaction ID</li>
                    </ol>
                  </div>
                )}
                {paymentInfo.method === 'cod' && (
                  <div className="instruction cod-instruction">
                    <h4>Cash on Delivery:</h4>
                    <ul>
                      <li>Pay when you receive the items</li>
                      <li>Cash, card, or mobile payment accepted</li>
                      <li>No extra charges</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="section-actions">
                <button 
                  className="btn btn-back"
                  onClick={() => setCurrentStep(2)}
                >
                  Back to Shipping
                </button>
                <button 
                  className="btn btn-next"
                  onClick={() => setCurrentStep(4)}
                >
                  Review Order
                </button>
              </div>
            </div>
          )}

          {/* Order Confirmation */}
          {currentStep === 4 && (
            <div className="confirmation-section">
              <h2><FaCheckCircle /> Order Summary</h2>
              <div className="order-review">
                <div className="review-section">
                  <h3><FaShippingFast /> Shipping Information</h3>
                  <div className="review-detail">
                    <p><strong>Name:</strong> {shippingInfo.fullName}</p>
                    <p><strong>Address:</strong> {shippingInfo.address}</p>
                    <p><strong>City:</strong> {shippingInfo.city}, {shippingInfo.state}</p>
                    {shippingInfo.wardNumber && <p><strong>Ward Number:</strong> {shippingInfo.wardNumber}</p>}
                    <p><strong>Phone:</strong> {shippingInfo.phone}</p>
                    <p><strong>Email:</strong> {shippingInfo.email}</p>
                  </div>
                </div>
                <div className="review-section">
                  <h3><RiSecurePaymentLine /> Payment Method</h3>
                  <div className="review-detail">
                    {paymentInfo.method === 'esewa' && <p><strong>eSewa</strong></p>}
                    {paymentInfo.method === 'khalti' && <p><strong>Khalti</strong></p>}
                    {paymentInfo.method === 'cod' && <p><strong>Cash on Delivery</strong></p>}
                    {paymentInfo.method === 'credit-card' && <p><strong>Credit/Debit Card</strong></p>}
                  </div>
                </div>
                <div className="review-section">
                  <h3><FaShoppingBag /> Order Items</h3>
                  <div className="review-items">
                    {orderItems.map(item => (
                      <div key={item.id} className="review-item">
                        <div className="review-item-info">
                          <span className="review-item-name">{item.quantity} × {item.name}</span>
                          {item.category && <span className="review-item-category">{item.category}</span>}
                        </div>
                        <div className="review-item-total">
                          NPR {(item.price * item.quantity).toLocaleString('en-NP')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmitOrder}>
                <div className="agreement">
                  <label>
                    <input type="checkbox" required />
                    <span>I agree to the Terms and Conditions and Privacy Policy</span>
                  </label>
                  <label>
                    <input type="checkbox" required />
                    <span>All the information provided above is correct</span>
                  </label>
                </div>

                <div className="section-actions">
                  <button 
                    type="button"
                    className="btn btn-back"
                    onClick={() => setCurrentStep(3)}
                  >
                    Back to Payment
                  </button>
                  <button 
                    type="submit"
                    className="btn btn-confirm"
                  >
                    <FaCheckCircle /> Place Order
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar - Nepal Style */}
        <div className="order-summary">
          <h2><FaShoppingBag /> Order Summary</h2>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>NPR {subtotal.toLocaleString('en-NP')}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className={shippingCost === 0 ? 'free-shipping' : ''}>
                {shippingCost === 0 ? 'FREE' : `NPR ${shippingCost.toLocaleString('en-NP')}`}
              </span>
            </div>
            <div className="summary-row">
              <span>VAT (13%)</span>
              <span>NPR {tax.toLocaleString('en-NP')}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total Amount</span>
              <span className="total-amount">
                NPR {total.toLocaleString('en-NP')}
              </span>
            </div>
            {shippingCost === 0 && (
              <div className="free-shipping-banner">
                🎉 You've got FREE shipping!
              </div>
            )}
          </div>

          <div className="secure-checkout">
            <RiSecurePaymentLine />
            <span>Secure Checkout</span>
            <p>Your payment information is securely encrypted</p>
          </div>

          <div className="support-info">
            <h3><FaPhone /> Need Help?</h3>
            <p><FaPhone /> Phone: 980-1234567</p>
            <p><FaEnvelope /> Email: support@nepalshop.com</p>
            <p className="support-hours">⏰ Hours: Sun-Fri, 9:00 AM - 6:00 PM</p>
          </div>

          <div className="delivery-info">
            <h4><FaShippingFast /> Delivery Timeline</h4>
            <p>Kathmandu Valley: 24 hours</p>
            <p>Pokhara: 2-3 days</p>
            <p>Other Locations: 3-5 days</p>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default OrderPage;