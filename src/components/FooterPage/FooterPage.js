import React from "react";
import "./FooterPage.css";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="footer-container">
      <div className="footer-area">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-content">
              <div className="footer-options">
                <div className="footer-option">
                  <div></div>
                  <br /> <br />
                  <br />
                </div>
                <div className="footer-option">
                  <Link to="/">Emergency Dental Care</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Check Up</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Treatment of Personal Diseases</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Tooth Extraction</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-content">
              <div className="footer-options">
                <div className="footer-option">
                  <h6>Services</h6>
                  <br />
                </div>
                <div className="footer-option">
                  <Link to="/">Emergency Dental Care</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Check Up</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Treatment of Personal Diseases</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Tooth Extraction</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Check Up</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Treatment of Personal Diseases</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Tooth Extraction</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-content">
              <div className="footer-options">
                <div className="footer-option">
                  <h6>Oral Health</h6>
                  <br />
                </div>
                <div className="footer-option">
                  <Link to="/">Emergency Dental Care</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Check Up</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Treatment of Personal Diseases</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Tooth Extraction</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Check Up</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Treatment of Personal Diseases</Link>
                </div>
                <div className="footer-option">
                  <Link to="/">Tooth Extraction</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-content">
              <div className="footer-options">
                <div className="footer-option">
                  <h6>Our Address</h6>
                  <br />
                </div>
                <div className="footer-option">
                  <p>2/A, House-201, Gulsan</p>
                </div>
                <div>
                  <br />
                  <br />
                </div>
                <div className="footer-icon">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="footer-icon">
                  <i className="fab fa-google-plus"></i>
                </div>
                <div className="footer-icon">
                  <i className="fab fa-twitter"></i>
                </div>
                <div>
                  <br />
                  <br />
                </div>
                <div className="footer-option">
                  <p>Call now</p>
                </div>
                <div className="footer-option">
                  <Link to="/" className="call">
                    +8801750648751
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2020 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
