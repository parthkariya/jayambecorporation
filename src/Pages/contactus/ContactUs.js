import React, { useEffect } from "react";
import { PageHero } from "../../components";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineChrome } from "react-icons/ai";
import "./ContactUs.css";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHero title="ContactUs" />
      <div className="contactus-sec">
        <div className="contactus-con">
          <div className="contactus-part-first">
            <div className="contactus-info">
              <MdLocationOn className="contactus-icon" />
              <p className="contactus-txt">
                3rd Floor Office No.303, Nakshatra - 2,
                <br /> Opp, KKV Hall, 150 FT <br /> Ring Road, Rajkot-36005
                Gujarat
              </p>
            </div>
            <div className="contactus-info">
              <FaWhatsapp className="contactus-icon" />
              <a href="tel:+91 98257 10006" className="contactus-contact">
                +91 98257 10006
              </a>
            </div>
            <div className="contactus-info">
              <FaMobileAlt className="contactus-icon" />
              <a href="tel:+91 89807 52299" className="contactus-contact">
                +91 89807 52299
              </a>
            </div>
            <div className="contactus-info">
              <MdOutlineEmail className="contactus-icon" />
              <a
                href="mailto:jayambecorp9@gmail.com"
                className="contactus-contact"
              >
                jayambecorp9@gmail.com
              </a>
            </div>
            <div className="contactus-info">
              <AiOutlineChrome className="contactus-icon" />
              <a
                href="http://www.jayambecorporation.com/"
                className="contactus-contact"
                target="_blank"
              >
                www.jayambecorporation.com
              </a>
            </div>
          </div>
          <div className="contactus-second-part">
            <iframe
              className="contactus-map"
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
      </div>
      <a
        className="whats-app"
        href="https://api.whatsapp.com/send?phone=919825710006"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="my-float" />
      </a>
    </>
  );
};

export default ContactUs;
