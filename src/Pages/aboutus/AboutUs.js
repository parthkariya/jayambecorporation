import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Footer, Navbar } from "../../common";
import { PageHero } from "../../components";
import "./AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHero title="AboutUs" />

      <div className="aboutus-sec">
        <div className="aboutus-con">
          <p className="aboutus-main-head">About Our Company</p>
          {/* <p className="aboutus-motto">Our Motto</p>
          <p className="aboutus-motto-desc">
            MEETING YOUR FIBER AND PAPER NEEDS WITH PRECISION AND PERFECTION AT
            COMPETITIVE RATES IN THE MOST PROMPT WAY.
          </p> */}
          {/* <p className="aboutus-sub-head">About Us</p> */}
          <p className="aboutus-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We have started our journey of
            supplying quality Kraft Paper since 18 years. Due to our consistent
            efforts, continuous innovation, technological advancement and
            consistent quality products, we create a huge base of satisfied
            customers. We supply Premium Grade Kraft Paper, Tube Quality Kraft,
            Duplex Board, Virgin Kraft Liner Board, White Top Liner, HRCT Paper,
            High Ply bond Paper, Food Grade Smell free Paper & FSC Approved
            Kraft Paper for Domestic Customers where as we have developed
            Fluting Medium, Kraft Liner & Test Liner for our Clients Abroad. At
            Jay Ambe Corporation we promise our customer to provide quality
            product in given time
          </p>

          <p className="aboutus-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our all products are 100% recycled. We
            customize our products as per customers’ requirements as customer
            satisfaction is our ultimate goal. Our quality Kraft paper is used
            by various Box Manufacturers, Paper Tube Maker, Paper Cone Makers,
            Mono Carton Makers & Offset Printers to package their customers'
            valuable goods.
          </p>
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

export default AboutUs;
