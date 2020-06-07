import React from "react";
import SideItems from "./SideItems";
import Auth from "../../Auth/auth";

const Sidebar = () => {
  const auth = Auth();
  const handleSignOut = () => {
    auth.signOut().then((res) => {
      window.location.pathname = "/";
    });
  };
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <SideItems text="Back to Home" path="/" />
          <SideItems text="Dashboard" path="/dashboard/doctors" />
          <SideItems text="Appointment" path="/doctorPanel/appointmentList" />
          <SideItems text="Patients" path="/dashboard/patients" />
          <SideItems text="Prescriptions" path="/dashboard/prescriptions" />
          <SideItems text="Settings" path="/dashboard/settings" />
        </ul>
        <div className="logout-aria">
          <p onClick={handleSignOut} className="d-flex">
            Log Out
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
