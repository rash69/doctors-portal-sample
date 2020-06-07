import React from "react";
import Title from "../Title/Title";
import { useState } from "react";
import { CardGroup, Card } from "react-bootstrap";

const Testimonial = () => {
  const [testimonial] = useState([
    {
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem ex doloremque incidunt minima consequatur quas quod pariatur rerum est.",
      img: "https://i.ibb.co/fGWnx9D/Ellipse-1.png",
      name: "Winson Henry",
      city: "California",
    },
    {
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem ex doloremque incidunt minima consequatur quas quod pariatur rerum est.",
      img: "https://i.ibb.co/mhbtKbZ/Ellipse-2.png",
      name: "Charotte Madison",
      city: "New York",
    },
    {
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatem ex doloremque incidunt minima consequatur quas quod pariatur rerum est.",
      img: "https://i.ibb.co/86PK6q0/Ellipse-3.png",
      name: "Alayna Lola",
      city: "London",
    },
  ]);
  return (
    <section className="testimonial-container" style={{ marginTop: "100px" }}>
      <div className="heading">
        <h4 className="text-center">Testimonial</h4>
        <Title title={`What's our patients say`} />
      </div>
      <div className="row">
        {testimonial.map((item, index) => {
          return (
            <div key={index} className="col-md-4">
              <CardGroup>
                <Card border="warning">
                  <Card.Body>
                    <Card.Text className="text-muted">{item.info}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="row">
                    <div className="col-md-6">
                      <Card.Img variant="top" src={item.img} className="w-50" />
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-info">{item.name}</h6>
                      <p>{item.city}</p>
                    </div>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
