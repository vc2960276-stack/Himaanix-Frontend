import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.currentTarget.classList.toggle("open");
  };

  const closeMobileMenu = (item) => {
    setMenu(item);
    menuRef.current.classList.remove("nav-menu-visible");
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* LOGO */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Shubhivika" />
        </Link>

        {/* MOBILE DROPDOWN */}
        <button
          className="nav-dropdown"
          onClick={dropdown_toggle}
          aria-label="Toggle menu"
        >
          <img src={nav_dropdown} alt="" />
        </button>

        {/* MENU */}
        <ul ref={menuRef} className="nav-menu">

          <li
            className={menu === "shop" ? "active" : ""}
            onClick={() => closeMobileMenu("shop")}
          >
            <Link to="/">Shop</Link>
          </li>

          <li
            className={menu === "mens" ? "active" : ""}
            onClick={() => closeMobileMenu("mens")}
          >
            <Link to="/mens">Men</Link>
          </li>

          <li
            className={menu === "womens" ? "active" : ""}
            onClick={() => closeMobileMenu("womens")}
          >
            <Link to="/womens">Women</Link>
          </li>

          <li
            className={menu === "kids" ? "active" : ""}
            onClick={() => closeMobileMenu("kids")}
          >
            <Link to="/kids">Kids</Link>
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-login-cart">

          {localStorage.getItem("auth-token") ? (
            <button
              className="login-btn"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}

          <Link to="/cart" className="cart-wrapper">
            <img src={cart_icon} alt="Cart" />

            <span className="nav-cart-count">
              {getTotalCartItems()}
            </span>
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;