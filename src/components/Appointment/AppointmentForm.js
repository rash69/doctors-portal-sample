import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");
const AppointmentForm = (props) => {
  const { title, time, startTime, date } = props.appointmentInfo;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const notify = (name, date, appointment, startTime) =>
    toast.info(
      `
  Patient Name: ${name},
  Appointment ID: ${appointment._id},
  Date: ${date.toDateString()},
  Time: ${startTime}`,
      {
        autoClose: false,
      }
    );

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentDetails = {
      name,
      email,
      phone,
      service: title,
      startTime,
      appointmentDate: date.toDateString(),
      prescription: "",
      visited: false,
      action: "pending",
    };
    fetch("https://salty-cliffs-21759.herokuapp.com/bookAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentDetails),
    })
      .then((res) => res.json())
      .then((appointment) => {
        notify(name, date, appointment, startTime);

        setName("");
        setEmail("");
        setPhone("");
      });
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={{
          overlay: { background: "rgba(211,211,211,0.5)" },
          content: {
            height: "400px",
            width: "600px",
            textAlign: "center",
            borderRadius: "30px",
            margin: "auto",
            padding: "25px 50px",
          },
        }}
      >
        <h3
          style={{
            cursor: "pointer",
            textAlign: "right",
            color: "red",
          }}
          onClick={() => props.closeModal()}
        >
          x
        </h3>
        <h4 className="text-info">{title}</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleName}
            required
          />
          <input
            className="form-control mb-2"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            required
          />
          <input
            className="form-control mb-2"
            type="tel"
            name="phone"
            pattern="[0-9]{11}"
            placeholder="01700000000"
            value={phone}
            onChange={handlePhone}
            required
          />
          <div className="row">
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="time"
                defaultValue={time}
              />
            </div>
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="date"
                defaultValue={date ? date.toDateString() : ""}
              />
            </div>
          </div>
          <br />
          <input
            className="btn btn-info form-control"
            type="submit"
            value="Send"
          />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
