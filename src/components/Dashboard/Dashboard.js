import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import DashboardPage from "./Static/DashboardPage";
import "./Dashboard.css";
import { withRouter } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div
          role="main"
          className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content-wrapper"
        >
          <DashboardPage />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
