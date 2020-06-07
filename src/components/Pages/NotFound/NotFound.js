import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found-content">
        <h1>404 Page Not Found</h1>
        <p className="text-dark">
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>
        <Link to="/" style={{ textDecoration: "none", color: "#008080" }}>
          <i className="fas fa-long-arrow-alt-left"></i> Back to our site
        </Link>
      </div>
    </>
  );
};

export default NotFound;
