import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Images } from "../../Constants";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="nav-main">
        <div className="navbar-logobox">
          {/* <img
            src="https://www.designevo.com/res/templates/thumb_small/simple-red-circle.webp"
            alt=""
            className="navbar-logo"
          /> */}
          <Link to="/">
            <img src={Images.weblogo} alt="" className="navbar-logo" />
          </Link>
        </div>
        <div className="nav-links-part">
          <ul className="nav-links">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-link" to="/contactus">
                {" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-btn-icon-part">
          {toggleMenu === false ? (
            <button className="nav-btn" onClick={() => setToggleMenu(true)}>
              <AiOutlineMenu className="nav-btn-icon" />
            </button>
          ) : (
            <button className="nav-btn" onClick={() => setToggleMenu(false)}>
              <AiOutlineClose className="nav-btn-icon" />
            </button>
          )}
        </div>
      </nav>
      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
            <ul className="mobile-nav-links">
              <li>
                <Link
                  to={"/"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={"/aboutus"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  AboutUs
                </Link>
              </li>
              <li>
                <Link
                  to={"/contactus"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
