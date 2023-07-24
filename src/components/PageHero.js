import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      {/* <Helmet>
        <title>{`${title} | The Home Use`}</title>
        <meta name="description" content="The Home Use" />
      </Helmet> */}
      <div className="section-center">
        <h3 className="path-heading" style={{ fontSize: "22px" }}>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f9ebea;
  width: 100%;
  min-height: 8vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: 600;
  color: #000;
  a {
    color: #000;
    padding: 0.5rem;
    font-weight: 600;
    transition: var(--transition);
    text-decoration: none;
  }
  a:hover {
    color: red;
  }
  @media screen and (max-width: 420px) {
    .path-heading {
      font-size: 16px !important;
    }
  }
`;

export default PageHero;
