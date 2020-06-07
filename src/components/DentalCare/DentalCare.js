import React from "react";
import "./DentalCare.css";
import { Link } from "react-router-dom";
const DentalCare = () => {
  return (
    <div className="dental-container" id="dental">
      <div className="row">
        <div className="col-md-6">
          <img
            className="mask-group"
            src="https://i.ibb.co/CKFnJWD/Mask-Group-3.png"
            alt=""
          />
        </div>
        <div className="col-md-6 care-area">
          <h1 className="col-md-8">Exceptional Dental Care, on Your Terms</h1>
          <p className="col-md-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem
            soluta perferendis delectus labore ducimus illo eveniet, veniam nisi
            at aperiam corrupti similique incidunt recusandae ipsam minus
            excepturi magni consequatur, sequi facilis nobis provident sunt
            facere hic? Temporibus, vitae, culpa rem consectetur quas minus, sed
            necessitatibus repudiandae cupiditate dolorem harum?
          </p>
          <Link to="/">
            <button className="btn  btn-info">LEARN MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
