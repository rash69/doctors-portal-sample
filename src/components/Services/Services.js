import React, { useState } from "react";
import "./Services.css";
import Title from "../Title/Title";

const Services = () => {
  const [service] = useState([
    {
      img: "https://i.ibb.co/gFFXQS3/001-dental.png",
      title: "Fluoride Treatment",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, est",
    },
    {
      img: "https://i.ibb.co/jHQQ5dX/tooth-1.png",
      title: "Cavity Filling",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, est",
    },
    {
      img: "https://i.ibb.co/bHNf07G/tooth.png",
      title: "Teeth Whitening",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, est",
    },
  ]);
  return (
    <section className="service-container text-center" id="services">
      <div className="heading ">
        <h4>Our services</h4>
        <Title title={"Service We Provide"} />
      </div>
      <div className="row">
        {service.map((item, index) => {
          return (
            <article key={index} className="services col-md-4 p-5">
              <img src={item.img} alt="" />
              <h5>{item.title}</h5>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
