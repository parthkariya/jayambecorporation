import React from "react";
import "./Footer.css";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineChrome } from "react-icons/ai";
import { Images } from "../../Constants";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-con">
          <div className="footer-first-part">
            <div className="footer-logobox">
              <Link to="/">
                <img
                  src={Images.weblogo}
                  alt="Company Logo"
                  className="footer-logo"
                />
              </Link>
            </div>
            <div className="footer-info">
              <MdLocationOn className="footer-icon" />
              <p className="footer-txt footer-txt-margin">
                3rd Floor Office No.303, Nakshatra - 2, <br />
                Opp, KKV Hall, 150 FT Ring Road, <br /> Rajkot-36005 Gujarat
              </p>
            </div>
            <div className="footer-info ">
              <FaWhatsapp className="footer-icon" />
              <a href="tel:+91 98257 10006" className="footer-txt">
                +91 98257 10006
              </a>
            </div>
            <div className="footer-info ">
              <FaMobileAlt className="footer-icon" />
              <a href="tel:+91 89807 52299" className="footer-txt">
                +91 89807 52299
              </a>
            </div>
            <div className="footer-info">
              <MdOutlineEmail className="footer-icon" />
              <a href="mailto:jayambecorp9@gmail.com" className="footer-txt">
                jayambecorp9@gmail.com
              </a>
            </div>
            <div className="footer-info">
              <AiOutlineChrome className="footer-icon" />
              <a href="WWW.jayambecorporation.com" className="footer-txt">
                www.jayambecorporation.com
              </a>
            </div>
          </div>
          <div className="footer-second-part">
            <p className="footer-link-heading">Quick Links</p>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/Products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/Aboutus" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/contactus" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-third-part">
            <iframe
              className="footer-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.803657512359!2d70.7722004!3d22.2854262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca31a6d04edd%3A0x2e3b420a729f2218!2sNakshatra%20-2%2C%20KKV%20Chowk%2C%20150%20Feet%20Ring%20Rd%2C%20New%20College%20Wadi%2C%20Mahavir%20Park%2C%20Rajkot%2C%20Gujarat%20360005!5e0!3m2!1sen!2sin!4v1671788699919!5m2!1sen!2sin"
              width="500"
              height="400"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
