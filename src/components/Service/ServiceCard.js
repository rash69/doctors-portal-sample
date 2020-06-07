import React from "react";

const ServiceCard = (props) => {
  const { title, time, startTime, openModal } = props;
  return (
    <div className="m-2">
      <div className="card" style={{ width: "350px", border: "none" }}>
        <div className="card-body text-center">
          <h5 className="card-title text-info">{title}</h5>
          <p className="card-text text-dark">
            <strong>{time}</strong>
          </p>
          <br />
          <button
            className="btn btn-info"
            onClick={() => {
              openModal(title, time, startTime);
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
