import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { FiShoppingCart } from "react-icons/fi";
import { IoGitCompareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  return (
    <header>
      <div className="container">
        {/* ---- Top Header ---- */}
        <div className="top-header">
          <span>नयाँ सिजनको स्टाइलमा ५०% सम्म छुट पाउनुहोस्</span>

          <div className="right-header">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  मद्दत केन्द्र
                </Link>
              </li>
              <li>
                <Link to="/order-track" className="nav-link">
                  अर्डर ट्र्याक गर्नुहोस्
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Middle Header ---- */}
        <div className="middle-header">
          {/* Logo */}
          <div className="logo">
            <h1>Shoply</h1>
          </div>

          {/* Navigation */}
          <nav className="navigation">
            <div className="search-box">
              <input type="text" placeholder="प्रोडक्ट खोज्नुहोस्" />
              <button>
                <FaMagnifyingGlass size={18} />
              </button>
            </div>

            
          </nav>

          {/* Icons + Search + Login */}
          <div className="icons">
            {/* Search Box */}
            {/* <div className="search-box">
              <input type="text" placeholder="प्रोडक्ट खोज्नुहोस्" />
              <button>
                <FaMagnifyingGlass size={18} />
              </button>
            </div> */}

            {/* Login/Register + Badges */}
            <div className="log-register">
              <ul>
                <li>
                  <Link to="/login" className="nav-link">
लगइन                  </Link>{" "}
                  |{" "}
                  <Link to="/register" className="nav-link">
दर्ता गर्नुहोस्                  </Link>
                </li>

                {/* Cart */}
                <li>
                  <Tooltip title="Cart">
                    <Stack spacing={2} direction="row" alignItems="center">
                      <Badge color="secondary" badgeContent={2} showZero>
                        <FiShoppingCart size={24} />
                      </Badge>
                    </Stack>
                  </Tooltip>
                </li>

                {/* Compare */}
                <li>
                  <Tooltip title="Compare">
                    <Stack spacing={2} direction="row" alignItems="center">
                      <Badge color="secondary" badgeContent={3} showZero>
                        <IoGitCompareOutline size={24} />
                      </Badge>
                    </Stack>
                  </Tooltip>
                </li>

                {/* Wishlist / Heart */}
                <li>
                  <Tooltip title="Wishlist">
                    <Stack spacing={2} direction="row" alignItems="center">
                      <Badge color="secondary" badgeContent={5} showZero>
                        <CiHeart size={24} />
                      </Badge>
                    </Stack>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
