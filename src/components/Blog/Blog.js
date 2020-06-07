import React, { useState } from "react";
import Title from "../Title/Title";
import { Card, CardGroup } from "react-bootstrap";

const Blog = () => {
  const [blog] = useState([
    {
      title: "Lorem ipsum dolor sit amet",
      img: "https://i.ibb.co/86PK6q0/Ellipse-3.png",
      name: "Winson Henry",
      time: "29 April 2020",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore atque nemo at laudantium. Iure, ipsum!",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      img: "https://i.ibb.co/fGWnx9D/Ellipse-1.png",
      name: "Charlotte Madison",
      time: "11 May 2020",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore atque nemo at laudantium. Iure, ipsum!",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      img: "https://i.ibb.co/mhbtKbZ/Ellipse-2.png",
      name: "Alayna Lola",
      time: "03 january 2020",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore atque nemo at laudantium. Iure, ipsum!",
    },
  ]);
  return (
    <section
      className="blog-container"
      id="blog"
      style={{ marginTop: "100px" }}
    >
      <div className="heading ">
        <h4 className="text-center">Our Blog</h4>
        <Title title={"From Our Blog News"} />
      </div>
      <div className="row">
        {blog.map((item, index) => {
          return (
            <div key={index} className="col-md-4">
              <CardGroup>
                <Card border="info">
                  <Card.Header className="row">
                    <div className="col-md-6">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="col-md-6">
                      <h6>{item.name}</h6>
                      <p className="text-muted">{item.time}</p>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
