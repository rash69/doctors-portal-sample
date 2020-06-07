import React, { useState } from "react";
import TopHead from "./TopHead";
import { useEffect } from "react";
import AppointmentTable from "../Table/AppointmentTable";
import BoxLoading from "react-loadingg/lib/BoxLoading";
import Title from "../../Title/Title";

const DashboardPage = () => {
  const [allAppointments, setAllAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://salty-cliffs-21759.herokuapp.com/allAppointments")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setAllAppointments(data);
      });
  }, []);
  const getTotalApp = () => {
    const data = {
      count: allAppointments.length,
      text: "Total Appointments",
      backgroundColor: "#00C689",
    };
    return data;
  };
  const getTodayApp = () => {
    const date = new Date();
    const newArray = allAppointments.filter((app) => {
      return app.appointmentDate === date.toDateString();
    });
    const data = {
      count: newArray.length,
      text: "Today's Appointments",
      backgroundColor: "#3DA5F4",
    };
    return data;
  };

  const getPendingToday = () => {
    const date = new Date();
    const newArray = allAppointments.filter((app) => {
      return app.appointmentDate === date.toDateString() && !app.visited;
    });
    const data = {
      count: newArray.length,
      text: "Pending Appointments",
      backgroundColor: "#F1536E",
    };
    return data;
  };

  const getPatient = () => {
    const patientArray = [];
    allAppointments.forEach((app) => {
      if (patientArray.indexOf(app.email) === -1) {
        patientArray.push(app.email);
      }
    });
    const data = {
      count: patientArray.length,
      text: "Total Patients",
      backgroundColor: "#FDA006",
    };
    return data;
  };

  return (
    <div>
      <Title title={"DASHBOARD"} />
      <div className="row">
        <div className="col-md-3 d-flex justify-content-center">
          <TopHead data={getPendingToday()}></TopHead>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <TopHead data={getTodayApp()}></TopHead>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <TopHead data={getTotalApp()}></TopHead>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <TopHead data={getPatient()}></TopHead>
        </div>
      </div>
      {isLoading ? (
        <BoxLoading />
      ) : (
        <AppointmentTable allAppointments={allAppointments} />
      )}
    </div>
  );
};

export default DashboardPage;
