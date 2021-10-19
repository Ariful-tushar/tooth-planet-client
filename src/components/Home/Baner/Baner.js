import React from "react";
import { Carousel } from "react-bootstrap";
import "./Baner.css";

const Baner = () => {
  return (
    <Carousel id="#home" className="w-100">
      <Carousel.Item>
        <img
          className="w-100 tp-carousel-img"
          src="http://www.simpleimageresizer.com/_uploads/photos/695bec06/interior-modern-equipped-dental-office-with-x-ray-monitors-dentist-stomatology-orthodontic-workplace_1_x500.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>World Class Machinaries</h3>
          <p>Tooth Planet has workd class machinaries</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 tp-carousel-img"
          src="https://d36zfg4d500s0g.cloudfront.net/cache/images/DT/up/dt/2019/07/New-dental-clinic-to-open-in-Brooklyn-in-2020-1188x668-.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Neat and Clean Environment</h3>
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
          <h3>Comfortable environment</h3>
          <p>We have a decent comfortable environment</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Baner;
