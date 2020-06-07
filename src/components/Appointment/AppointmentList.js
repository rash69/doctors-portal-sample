import React, { useState, useEffect } from "react";
import DailyAppTable from "../DailyAppTable/DailyAppTable";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../Header/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentList = () => {
  const [date, setDate] = useState(new Date());
  const [dailyAppointment, setDailyAppointment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const notify = () => toast("Server Error! Reload the page.");

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3700/dailyAppointment/" + date.toDateString())
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          notify();
        } else {
          setDailyAppointment(data);
          setIsLoading(false);
        }
      });
  }, [date]);

  return (
    <>
      <Header />
      <div className="container">
        <h3 className="text-info text-center">Appointments</h3>
        <div className="row m-5">
          <div className="col-md-5">
            <Calendar
              value={date}
              onChange={(d) => setDate(d)}
              minDate={new Date()}
              maxDate={new Date(2020, 11, 31)}
              minDetail={"year"}
            />
          </div>
          <div className="col-md-7">
            <DailyAppTable
              date={date}
              isLoading={isLoading}
              dailyAppointment={dailyAppointment}
            ></DailyAppTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
