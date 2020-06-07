import React from "react";
import Calendar from "react-calendar";
import "./DatePicker.css";
import "react-calendar/dist/Calendar.css";

const DatePicker = (props) => {
  return (
    <div className="row m-5">
      <div className="col-md-6">
        <h1 className="text-info mt-3">Appointment</h1>
        <Calendar
          onChange={(d) => props.handleDate(d)}
          value={props.date}
          minDate={new Date()}
          maxDate={new Date(2020, 11, 31)}
          minDetail={"year"}
        />
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <img
          className="w-100"
          src="https://i.ibb.co/mhBSy9Y/Mask-Group-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DatePicker;
