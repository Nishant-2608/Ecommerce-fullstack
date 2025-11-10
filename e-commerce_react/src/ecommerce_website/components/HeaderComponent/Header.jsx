// src/components/Header_component/header.jsx
import React, { useState } from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dropdown from 'react-bootstrap/Dropdown';
import AuthenticationService from "../AuthenticationComponent/authenticationService";


export function Header() {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    // Navigate to /home?search=... or use a state manager to pass query to Main/AllProducts
    window.location.href = `/home?search=${encodeURIComponent(query)}`;
  };

  return (
    <div className="nav-bar">
      <ul className="nav-left">
        <li className="nav-img"><img src="nobgLogo.png" alt="Logo" className="logo" /></li>
        <li className="nav-item">
          <a className="nav-link" href="" onClick={(e) => { e.preventDefault(); window.location.href = 'home?category=all'; }}>
            <i className="bi bi-house-fill"></i> Home
          </a>
        </li>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-products">Products</Dropdown.Toggle>
          <Dropdown.Menu className="menu-list">
            <Dropdown.Item href="/home?category=all">All Products</Dropdown.Item>
            <Dropdown.Item href="/home?category=electronics">Electronics</Dropdown.Item>
            <Dropdown.Item href="/home?category=men's clothing">Men's Clothing</Dropdown.Item>
            <Dropdown.Item href="/home?category=women's clothing">Women's Clothing</Dropdown.Item>
            <Dropdown.Item href="/home?category=jewellery">Jewellery</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <li className="nav-item"><a className="nav-link bi bi-tags-fill" href="#offers"> Best offers</a></li>
        <li className="nav-item">
          <a className="nav-link" href="#cart" onClick={(e) => { e.preventDefault(); window.location.href = '/home?view=cart'; }}>
            <i className="bi bi-cart"></i> Cart
          </a>
        </li>
      </ul>
      <ul className="nav-right">
        <li className="nav-item">
          <form className="search-form" onSubmit={handleSearch}>
            <input type="text" placeholder="Search for any products..." className="search-input"
              value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" className="search-btn"><i className="bi bi-search"></i></button>
          </form>
        </li>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-account" className="bi bi-person-circle" style={{ backgroundImage: 'none', paddingRight: '1rem' }} bsPrefix="btn">
            My Account
          </Dropdown.Toggle>
          <Dropdown.Menu className="menu-list">
            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#/orders">Orders</Dropdown.Item>
            <Dropdown.Item href="#/wishlist">Wishlist</Dropdown.Item>
            <Dropdown.Item href="#/settings">Account Settings</Dropdown.Item>
            <Dropdown.Item onClick={AuthenticationService.logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </div>
  );
}
