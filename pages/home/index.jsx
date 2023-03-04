import React from "react";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import Reservation from "../../components/Reservation";
import Customers from "../../components/customers/Customers";
import MenuWrapper from "../../components/product/MenuWrapper";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;