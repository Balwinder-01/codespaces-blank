import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button/Button";

function Navbar() {
    var user = null;
    return (
        <nav className="main-nav">
        <div className="navbar">
            <Link to="/" className="nav-iten nav-logo">
            <img src={logo} alt="logo" />
            </Link>
            <Link to="/" className="nav-item nav-btn">
            About
            </Link>
            <Link to="/" className="nav-item nav-btn">
            Products
            </Link>
            <Link to="/" className="nav-item nav-btn">
            For Terms
            </Link>
            <form>
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
            </form>
            {user === null ? (
            <Link to="/Auth" className="nav-item nav-links">
                Log In
            </Link>
            ) : (
            <>
                <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                color="white"
                borderRadius="50%"
                >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    M
                </Link>
                </Avatar>
                <button className="nav-item nav-links">Log out</button>
            </>
            )}
        </div>
        </nav>
    );
}

export default Navbar;
