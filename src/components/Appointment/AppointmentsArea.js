import React from "react";
import "./AppointmentArea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppointmentsArea = () => {
  return (
    <div className="banner-aria">
      <div className="container">
        <div className="row">
          <div className="col-md-6  banner-content">
            <h1>Your New Smile Starts Here </h1>
            <br />
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur molestias quasi dolore error, at fugiat tempora sit
              alias ipsa totam, maiores quis impedit, dolores deleniti ipsam
              pariatur enim unde? Praesentium!
            </p>
            <div className="banner-input">
              <Link to="/appointment">
                <button className="btn  btn-info">GET APPOINTMENT</button>
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/mhBSy9Y/Mask-Group-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="container-categories">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex justify-content-between align-items-center cat1">
                <div className="col-md-2">
                  <FontAwesomeIcon className="fa-2x" icon={faClock} />
                </div>
                <div className="row col-md-10">
                  <h4>Opening Hours</h4>
                  <p className="">Ambitioni dedisse scripsisse</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-between align-items-center cat2">
                <div className="col-md-2">
                  <FontAwesomeIcon className="fa-2x" icon={faLocationArrow} />
                </div>
                <div className="row col-md-10">
                  <h4>Location</h4>
                  <p className="">2/A, House-201, Gulsan</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-between align-items-center cat3">
                <div className="col-md-2">
                  <FontAwesomeIcon className="fa-2x" icon={faPhone} />
                </div>
                <div className="row col-md-10">
                  <h4>Contact us</h4>
                  <p className="">Contact - +8801750648751</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsArea;
