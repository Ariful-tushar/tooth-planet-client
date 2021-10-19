import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`/services${serviceId}.json`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <Container>
      <div className="my-5 border rounded p-5">
        <img className="w-50" src={service.img} alt="" />
        <h2>Name : {service.name}</h2>
        <h3>Price: {service.price}</h3>
        <h3>Duration: {service.duration}</h3>
      </div>
    </Container>
  );
};

export default Booking;
