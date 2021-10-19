import React from "react";
import Baner from "../Baner/Baner";
import Services from "../Services/Services";
import Doctors from "./../Doctors/Doctors";

const Home = () => {
  return (
    <div id="home">
      <Baner></Baner>
      <Services></Services>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
