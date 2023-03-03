import React from "react";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import Reservation from "../../components/Reservation";
import MenuWrapper from "../../components/product/MenuWrapper";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default Index;