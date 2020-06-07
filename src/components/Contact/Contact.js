import React from "react";
import "./Contact.css";
import Title from "../Title/Title";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="text-center header">
        <h4 className="text-info">CONTACT US</h4>
        <Title title={"Always connect with us"} />
      </div>
      <div className="">
        <Form className="form">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Your Email Address*"
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Control type="text" placeholder="Subject*" required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Your messages*"
              required
            />
          </Form.Group>
          <Button className="btn submit-btn btn-info" type="submit">
            Submit form
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
