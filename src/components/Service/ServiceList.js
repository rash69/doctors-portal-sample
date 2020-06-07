import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

import BoxLoading from "react-loadingg/lib/BoxLoading";
import AppointmentForm from "../Appointment/AppointmentForm";

const ServiceList = (props) => {
  const [services, setServices] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [appointmentInfo, setAppointmentInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://salty-cliffs-21759.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setServices(data);
      });
  }, []);

  const openModal = (title, time, startTime) => {
    setModalIsOpen(true);
    setAppointmentInfo({ title, time, startTime, date: props.date });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <h1 className="text-info text-center">
        Available Appointments on{" "}
        {props.date.toLocaleDateString(undefined, options)}
      </h1>

      <div className="row">
        {isLoading ? (
          <BoxLoading />
        ) : (
          services.map((el) => (
            <div
              key={el._id}
              className="col-md-4 d-flex justify-content-center"
            >
              <ServiceCard
                title={el.title}
                time={el.time}
                startTime={el.startTime}
                date={props.date}
                openModal={openModal}
              />
            </div>
          ))
        )}
      </div>
      <AppointmentForm
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        appointmentInfo={appointmentInfo}
      />
    </div>
  );
};

export default ServiceList;
