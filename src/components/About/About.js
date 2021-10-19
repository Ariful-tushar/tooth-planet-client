import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="tp-about-container">
      <div className="border row m-5">
        <div className="col-6 p-0">
          <Image
            className="p-0 w-100"
            src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="text-start mx-4">
            <h3>Most Popular Dental Care</h3>
            <h1 className="fw-bold">About Us</h1>
            <p>
              We are the best dental care in this country. All of our doctors
              are well skilled with high degrees. Each and every machinaries are
              modern and updated. All our stafs are well skilled too. Our
              journey begins at April 2019. In the shortest time we became the
              most highly popular dental care in the country.Our services are
              very cheap and also we offer free dental care to the poor people
              in weekend.
            </p>
            <Button className="fw-bold">Learn More</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
