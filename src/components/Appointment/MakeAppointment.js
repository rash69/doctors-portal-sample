import React from "react";
import "./MakeAppointment.css";
import { Link } from "react-router-dom";
const MakeAppointment = () => {
  return (
    <div className="make-appointment-container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/xXWyRD6/5790-removebg.png"
            height="60%"
            alt=""
          />
        </div>
        <div className="col-md-6 content">
          <h4 className="text-info">Appointment</h4>
          <br />
          <h1>Make an Appointment Today</h1>
          <br />
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            itaque neque quidem possimus praesentium eaque doloribus delectus
            laudantium minima. Nobis facilis, sed architecto temporibus delectus
            illo obcaecati nihil error iure.
          </p>
          <Link to="/">
            <button className="btn btn-info">LEARN MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
