import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Doctor.css";

const Doctor = ({ doct }) => {
  const { img, name, Title } = doct;

  return (
    <Col>
      <Card>
        <Card.Img className="tp-doct-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        {/* <Link to={`/booking/${id}`}>
          <Button variant="btn btn-warning">Get this service</Button>
        </Link> */}
      </Card>
    </Col>
  );
};

export default Doctor;
