import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";

const Service = () => {
  return (
    <>
      <Header />
      <div className="mt-5">
        <Title title={"Add services for more hospitality"} />
        <p className="service"></p>
      </div>
      <div className="row p-5">
        <input
          type="text"
          placeholder="Title....."
          className="form-control"
          name="title"
          id="title"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Timing....."
          className="form-control"
          name="time"
          id="time"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Starting time....."
          className="form-control"
          name="startTime"
          id="startTime"
        />
        <br />
        <br />
        <input type="button" className="btn btn-dark" value="Add service" />
      </div>
    </>
  );
};

export default Service;
