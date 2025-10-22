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
import { useDialog } from "../../ContextProvider/ContextProvider";
import { FaUserCircle } from "react-icons/fa";
import manoj from "../../assets/images/manoj.jpg";

const Header = () => {
  const { toggleDrawer, isLogin, setIsLogin } = useDialog();

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
          <div className="navigation">
            <div className="search-box">
              <input type="text" placeholder="प्रोडक्ट खोज्नुहोस्" />
              <button>
                <FaMagnifyingGlass size={18} />
              </button>
            </div>
          </div>

          {/* Icons + Login Section */}
          <div className="icons">
            <div className="log-register">
              <ul>
                {/* Login/Register */}
                <li>
                  {isLogin ? (
                    <Link to="/profile" className="nav-link">
                      प्रोफाइल
                    </Link>
                  ) : (
                    // <div className="profile-menu">
                    //   <button className="profile-icon-btn">
                    //     <img
                    //       src={manoj}
                    //       alt="profile"
                    //       className="profile-icon-img"
                    //     />
                    //   </button>
                    // </div>
                    <div className="profile-drop">
                      <div className="drop-header">
                        <div className="img-div">
                           <img
                          src={manoj}
                          alt="profile"
                          className="dropdown-avatar"
                        />



                        </div>
                       
                        <div className="user-info">
                          <h4>Manoj Katuwal</h4>
                          <p>katwalmanoj67@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  )}
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

                {/* Wishlist */}
                <li>
                  <Tooltip title="Wishlist">
                    <Stack spacing={2} direction="row" alignItems="center">
                      <Badge color="secondary" badgeContent={5} showZero>
                        <CiHeart size={24} />
                      </Badge>
                    </Stack>
                  </Tooltip>
                </li>

                {/* Cart */}
                <li onClick={toggleDrawer}>
                  <Tooltip title="Cart">
                    <Stack spacing={2} direction="row" alignItems="center">
                      <Badge color="secondary" badgeContent={2} showZero>
                        <FiShoppingCart size={24} />
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
