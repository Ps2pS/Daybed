import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import brandImg from "../../assets/images/brand.png";

const Brand = "Daybed";
const MenuItem = ["Search Homes", "Property Owners", "How it works"];

function Navbar() {
  return (
    <div className="header">
      <div className="container">
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <Link to="/">
              <div className="nav-brand ">
                <img src={brandImg} alt="brandimg" />
                <span className="brand-name"> {Brand}</span>
              </div>
            </Link>
          </div>

          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="nav-links">
            <div className=" nav-link-items">
              <a href="#">Search Homes</a>
              <a href="#">Property Owners</a>
              <a href="#">How it works</a>
            </div>
            <div className="top-btn">
              <Link to="/login">
                <Button variant="contained" className="login-btn">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="contained" className="login-btn">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
