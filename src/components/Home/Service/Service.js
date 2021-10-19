import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img } = service;
  console.log(name, id);
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Please go to details page for more information</Card.Text>
        </Card.Body>
        <Link to={`/booking/${id}`} className="p-2">
          <button className="btn btn-primary">Check Details</button>
        </Link>
      </Card>
    </Col>
  );
};

export default Service;
