import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-sec">
        <div className="hero-con">
          <div className="hero-part-first">
            <p>
              <p className="hero-heading-first-line">Best Source for </p>
              {/* <br /> */}
              <p className="hero-heading-second-line">
                {" "}
                Kraft Paper, Duplex Board, Imported Virgin Kraft Paper & White
                Top Liner{" "}
              </p>
            </p>
            <p className="hero-desc">
              Jay Ambe Corporation can fulfil your need for the best quality
              Kraft Paper, Duplex Board, Impoted Virgin Kraft Paper & White Top
              Linner requirements. With the best infrastructure and the top
              manufacturer units at our disposal, we can offer you high quality
              finished paper to meet your industrial needs.
            </p>
            <div className="hero-btns">
              <button className="btn-light">Know More</button>
              <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link>
            </div>
          </div>
          <div class="hero-part-second">
            <div class="hero-imgbox">
              <img
                src="https://cdn.paperindex.com/images-for-onpage-content/Kraft-Paper-Rolls.jpg"
                alt="Kraft Paper"
                class="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
