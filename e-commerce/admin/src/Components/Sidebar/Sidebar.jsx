import React, { useState } from "react";
import { 
  FaHandMiddleFinger, 
  FaHome, 
  FaUsers, 
  FaBox, 
  FaTags, 
  FaShoppingCart, 
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [expandedItems, setExpandedItems] = useState({});

  const toggleSubMenu = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const menuItems = [
    { 
      id: "dashboard", 
      label: "Dashboard", 
      icon: <FaHome />,
      link: "/dashboard"
    },
    { 
      id: "home-slide", 
      label: "Home Slide", 
      icon: <FaHome />,
      link: "/home-slide",
      subItems: [
        { id: "subslide-1", label: "Sub Slide 1", link: "/home-slide/subslide-1" },
        { id: "subslide-2", label: "Sub Slide 2", link: "/home-slide/subslide-2" },
        { id: "subslide-3", label: "Sub Slide 3", link: "/home-slide/subslide-3" }
      ]
    },
    { 
      id: "users", 
      label: "Users", 
      icon: <FaUsers />,
      link: "/users"
    },
    { 
      id: "products", 
      label: "Products", 
      icon: <FaBox />,
      link: "/products",
      subItems: [
        { id: "all-products", label: "All Products", link: "/products/all" },
        { id: "add-product", label: "Add Product", link: "/products/add" },
        { id: "product-categories", label: "Categories", link: "/products/categories" },
        { id: "product-reviews", label: "Reviews", link: "/products/reviews" }
      ]
    },
    { 
      id: "category", 
      label: "Category", 
      icon: <FaTags />,
      link: "/category",
      subItems: [
        { id: "main-categories", label: "Main Categories", link: "/category/main" },
        { id: "sub-categories", label: "Sub Categories", link: "/category/sub" },
        { id: "manage-categories", label: "Manage Categories", link: "/category/manage" }
      ]
    },
    { 
      id: "orders", 
      label: "Orders", 
      icon: <FaShoppingCart />,
      link: "/orders",
      subItems: [
        { id: "pending-orders", label: "Pending Orders", link: "/orders/pending" },
        { id: "completed-orders", label: "Completed Orders", link: "/orders/completed" },
        { id: "cancelled-orders", label: "Cancelled Orders", link: "/orders/cancelled" }
      ]
    },
    { 
      id: "logout", 
      label: "Logout", 
      icon: <FaSignOutAlt />,
      link: "/logout"
    },
  ];

  return (
    <div className="sidebar-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Header with Logo */}
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">
              <FaHandMiddleFinger />
            </span>
            <span className="logo-text">FUCK YOU</span>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          {menuItems.map((item) => (
            <div key={item.id}>
              <div
                className={`menu-item ${activeItem === item.label ? "active" : ""}`}
                onClick={() => {
                  if (item.subItems) {
                    toggleSubMenu(item.id);
                  } else {
                    setActiveItem(item.label);
                    // In a real app, you would navigate using React Router
                    // navigate(item.link);
                  }
                }}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
                {item.subItems && (
                  <span className="menu-arrow">
                    {expandedItems[item.id] ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>
              
              {/* Sub Menu Items */}
              {item.subItems && expandedItems[item.id] && (
                <div className="sub-menu">
                  {item.subItems.map((subItem) => (
                    <div
                      key={subItem.id}
                      className={`sub-menu-item ${activeItem === subItem.label ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem(subItem.label);
                        // In a real app, you would navigate using React Router
                        // navigate(subItem.link);
                      }}
                    >
                      <span className="sub-menu-icon">•</span>
                      <span className="sub-menu-label">{subItem.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Bar at Bottom (without search icon) */}
       
      </div>
    </div>
  );
};

export default Sidebar;