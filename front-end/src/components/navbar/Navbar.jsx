import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo"> HEMOGLOBE <img src="/logo.png" alt="" className="nav-logo-img"/></div>
      <div className="nav-section">
        <div className="nav-list">
          <ul className="nav-list">
            <li>
              <Link to={"/user/home"} className="nav-link">
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/"} className="nav-link">
                HEALTH CARE
              </Link>
            </li>
            <li>
              <Link to={"/user/donate"} className="nav-link">
                DONATE BLOOD
              </Link>
            </li>
            <li>
              <Link to={"/user/results"} className="nav-link">
                RESULTS
              </Link>
            </li>
            <li>
              <Link to={"/user"} className="nav-link">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
