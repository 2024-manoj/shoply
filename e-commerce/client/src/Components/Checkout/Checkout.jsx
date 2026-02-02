import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { IoBagCheckOutline } from "react-icons/io5";
import fashion2 from "../../assets/images/fashion2.jpg";
import fashion3 from "../../assets/images/fashion3.jpg";

import "./Checkout.css";

const Checkout = () => {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [delivery, setDelivery] = useState("");
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ province, district, delivery, payment });
  };

  return (
    <section className="checkout-container">
      <div className="checkout-form">
        <form onSubmit={handleSubmit}>
          <h3>Billing Details</h3>

          {/* Full Name and Country */}
          <div className="two-column-grid">
            <TextField
              label="Full Name "
              variant="standard"
              fullWidth
              required
            />
            <TextField
              label="Country"
              variant="standard"
              value="Nepal"
              fullWidth
              disabled
            />
          </div>

          {/* Street Address */}
          <h3>Street Address</h3>
          <TextField
            label="House Number and Street Name "
            variant="standard"
            fullWidth
            required
          />
          <TextField
            label="Apartment Name (optional)"
            variant="standard"
            fullWidth
          />

          {/* Province and District */}
          <div className="two-column-grid">
            <FormControl variant="standard" fullWidth>
              <InputLabel>Province *</InputLabel>
              <Select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
              >
                <MenuItem value="Koshi">Koshi Pradesh</MenuItem>
                <MenuItem value="Madhesh">Madhesh Pradesh</MenuItem>
                <MenuItem value="Bagmati">Bagmati Pradesh</MenuItem>
                <MenuItem value="Gandaki">Gandaki Pradesh</MenuItem>
                <MenuItem value="Lumbini">Lumbini Pradesh</MenuItem>
                <MenuItem value="Karnali">Karnali Pradesh</MenuItem>
                <MenuItem value="Sudurpaschim">Sudurpaschim Pradesh</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel>District *</InputLabel>
              <Select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              >
                <MenuItem value="Sunsari">Sunsari</MenuItem>
                <MenuItem value="Kathmandu">Kathmandu</MenuItem>
                <MenuItem value="Morang">Morang</MenuItem>
                <MenuItem value="Jhapa">Jhapa</MenuItem>
                <MenuItem value="Chitwan">Chitwan</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* City and ZIP */}
          <div className="two-column-grid">
            <TextField
              label="City / Town "
              variant="standard"
              fullWidth
              required
            />
            <TextField
              label="ZIP Code "
              variant="standard"
              fullWidth
              required
            />
          </div>

          {/* Phone and Email */}
          <div className="two-column-grid">
            <TextField
              label="Phone Number *"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              label="Email Address "
              variant="standard"
              fullWidth
              required
            />
          </div>

          {/* Delivery Option */}
          <FormControl variant="standard" fullWidth>
            <InputLabel>Delivery Option *</InputLabel>
            <Select
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              required
            >
              <MenuItem value="normal">Normal Delivery (Free)</MenuItem>
              <MenuItem value="express">Express Delivery (Rs. 150)</MenuItem>
              <MenuItem value="self">Self Pickup</MenuItem>
            </Select>
          </FormControl>

          {/* Payment Method */}
          <FormControl variant="standard" fullWidth>
            <InputLabel>Payment Method *</InputLabel>
            <Select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              required
            >
              <MenuItem value="cod">Cash on Delivery</MenuItem>
              <MenuItem value="esewa">Esewa</MenuItem>
              <MenuItem value="khalti">Khalti</MenuItem>
              <MenuItem value="bank">Bank Transfer</MenuItem>
            </Select>
          </FormControl>

          {/* Order Notes */}
          {/* <TextField
            label="Order Notes (optional)"
            variant="standard"
            fullWidth
            multiline
            rows={3}
          /> */}

          {/* Alternative Contacts */}
          {/* <TextField
            label="Alternative Contact Name (optional)"
            variant="standard"
            fullWidth
          /> */}
          {/* <TextField
            label="Alternative Phone (optional)"
            variant="standard"
            fullWidth
          /> */}

          {/* <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            sx={{ marginTop: "20px" }}
          >
            PLACE ORDER
          </Button> */}
        </form>
      </div>
      <div className="payment-final-product-details">
        <h2>Your Order</h2>

        <div className="order-table-wrapper">
          <table cellSpacing="0" cellPadding="10">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Details</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={fashion2}
                    alt="A-Line Kur"
                    width="70"
                    height="70"
                    style={{ borderRadius: "8px" }}
                  />
                </td>
                <td>A-Line Kurti With Shirt x 1</td>
                <td>₹1,300.00</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={fashion3}
                    alt="Smart Watch"
                    width="70"
                    height="70"
                    style={{ borderRadius: "8px" }}
                  />
                </td>
                <td>Morden Smart Watch x 1</td>
                <td>₹2,500.00</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={fashion2}
                    alt="Another Product"
                    width="70"
                    height="70"
                    style={{ borderRadius: "8px" }}
                  />
                </td>
                <td>Stylish Kurta x 1</td>
                <td>₹1,000.00</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={fashion3}
                    alt="Another Product"
                    width="70"
                    height="70"
                    style={{ borderRadius: "8px" }}
                  />
                </td>
                <td>Classic Watch x 1</td>
                <td>₹1,200.00</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={fashion2}
                    alt="Another Product"
                    width="70"
                    height="70"
                    style={{ borderRadius: "8px" }}
                  />
                </td>
                <td>Extra Product x 1</td>
                <td>₹1,500.00</td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "right" }}>
                  <strong>Subtotal</strong>
                </td>
                <td>
                  <strong>₹7,500.00</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button variant="outlined">
          <IoBagCheckOutline />
          Check Out{" "}
        </Button>
      </div>
    </section>
  );
};

export default Checkout;
