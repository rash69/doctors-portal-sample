import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment";
import HomePage from "./components/Pages/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import Service from "./components/Admin/Service";
import PrivateRoute from "./components/Pages/PrivateRoute";
import SignIn from "./components/Auth/SignIn/SignIn";
import { AuthProvider } from "./components/Auth/auth";
import AppointmentList from "./components/Appointment/AppointmentList";
import { toast } from "react-toastify";
import NotFound from "./components/Pages/NotFound/NotFound";

toast.configure();

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/signIn" component={SignIn} />
          <PrivateRoute
            exact
            path="/doctorPanel/appointmentList"
            component={AppointmentList}
          />
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/addServices" component={Service} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
