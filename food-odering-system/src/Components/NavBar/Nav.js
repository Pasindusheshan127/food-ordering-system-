import React, { useContext, useState } from "react";
import "./Nav.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Nav = ({ setShowloging }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCardAnount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        {/* <img src={assets.logo} alt="" className="logo" /> */}
        <h1 style={{ color: "tomato", fontWeight: "bold" }}>coolspot</h1>
      </Link>
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Mobile App")}
          className={menu === "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket-icon" />
          </Link>
          <div className={getTotalCardAnount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowloging(true)}> Sign in</button>
      </div>
    </div>
  );
};

export default Nav;
