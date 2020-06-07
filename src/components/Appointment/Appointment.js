import React, { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import ServiceList from "../Service/ServiceList";
import Header from "../Header/Header";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const handleDate = (d) => {
    setDate(d);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <DatePicker date={date} handleDate={handleDate} />
        <ServiceList date={date} />
      </div>
    </div>
  );
};

export default Appointment;
