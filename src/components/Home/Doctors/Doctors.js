import { React, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [docts, setDoct] = useState([]);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoct(data));
  }, []);

  return (
    <Container id="specialists" className="my-5">
      <h2 className="my-5">Our Specialists</h2>
      <Row xs={1} lg={3} md={2} className="g-4">
        {docts.map((doct) => (
          <Doctor key={doct.id} doct={doct}></Doctor>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
