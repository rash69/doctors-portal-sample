import React from "react";
import AppointmentsArea from "../Appointment/AppointmentsArea";
import Services from "../Services/Services";
import DentalCare from "../DentalCare/DentalCare";
import MakeAppointment from "../Appointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import FooterPage from "../FooterPage/FooterPage";
import Header from "../Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <AppointmentsArea />
      <Services />
      <DentalCare />
      <MakeAppointment />
      <Testimonial />
      <Blog />
      <Contact />
      <FooterPage />
    </div>
  );
};

export default HomePage;
