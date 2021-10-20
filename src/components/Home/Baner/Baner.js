import React from "react";
import { Carousel } from "react-bootstrap";
import "./Baner.css";

const Baner = () => {
  return (
    <Carousel id="#home" className="w-100">
      <Carousel.Item>
        <img
          className="w-100 tp-carousel-img"
          src="http://www.simpleimageresizer.com/_uploads/photos/270d6286/Custom-Dental-Clinic-Fitout_1_1920x600.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="tp-baner-text">Neat and Clean Environment</h1>
          <p>There is not dirt in the whole hospital</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 tp-carousel-img"
          src="https://elitedentalcare.advertroindia.co.in/uploads-advertro-03-08-2019/elitedentalcare/updates/291753/dental%20clinic.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="tp-baner-text">Comfortable environment</h3>
          <p>We have a decent comfortable environment</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Baner;
