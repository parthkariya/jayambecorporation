import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Footer, Navbar } from "../../common";
import { Hero, ComoanyInfo, OurProducts } from "../../components";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ComoanyInfo />
      <OurProducts />
      {/* <Footer /> */}
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

export default Home;
