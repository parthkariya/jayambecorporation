import React from "react";
import { Link } from "react-router-dom";
import "./OurProducts.css";
const OurProducts = () => {
  return (
    <>
      <div className="ourproduct-sec">
        <div className="ourproduct-con">
          <p className="ourproduct-heading">OurProducts</p>
          <div class="trustee-page-card-container">
            <div class="trustee-page-card-table">
              <div className="card-btn-flex">
                <Link to="/products">
                  <div class="trustee-pg-card">
                    <div class="facee frontt">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Papelparamolde.jpg"
                        alt="Product Image"
                      />
                      <h4>Kraft Paper</h4>
                    </div>
                    <div class="facee backk">
                      <h4 className="ourpoduct-card-head">Details</h4>
                      {/* <p style={{ marginBottom: "20px" }}></p> */}
                      <div class="box">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/contactus" className="btn-dark">
                  Inquiry Now
                </Link>
              </div>
              <div className="card-btn-flex">
                <Link to="/products">
                  <div className="trustee-pg-card">
                    <div className="facee frontt">
                      <img
                        src="https://dominuspaper.com/wp-content/uploads/2020/10/duplex-board-texture.jpg"
                        alt="Product Image"
                      />
                      <h4>Duplex Board</h4>
                    </div>
                    <div className="facee backk">
                      <h4 className="ourpoduct-card-head">Details</h4>

                      <div class="box">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/contactus" className="btn-dark">
                  Inquiry Now
                </Link>
              </div>
              <div className="card-btn-flex">
                <Link to="/products">
                  <div class="trustee-pg-card">
                    <div class="facee frontt">
                      <img
                        src="https://5.imimg.com/data5/SELLER/Default/2021/8/UO/NO/HP/515709/imported-virgin-kraft-liner-paper-500x500.jpeg"
                        alt="Product Image"
                      />
                      <h4>Imported Virgin Kraft Paper</h4>
                    </div>
                    <div class="facee backk">
                      <h4 className="ourpoduct-card-head">Details</h4>

                      <div class="box">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/contactus" className="btn-dark">
                  Inquiry Now
                </Link>
              </div>

              <div className="card-btn-flex">
                <Link to="/products">
                  <div class="trustee-pg-card">
                    <div class="facee frontt">
                      <img
                        src="https://5.imimg.com/data5/EV/WU/DQ/SELLER-2649768/coated-white-top-kraft-liner-500x500.jpg"
                        alt="Product Image"
                      />
                      <h4>White Top Liner</h4>
                    </div>
                    <div class="facee backk">
                      <h4 className="ourpoduct-card-head">Details</h4>

                      <div class="box">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        {/* <br />
                      <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/contactus" className="btn-dark">
                  Inquiry Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
