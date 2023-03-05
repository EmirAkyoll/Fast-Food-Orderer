import React from "react";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import Reservation from "../../components/Reservation";
import Customers from "../../components/customers/Customers";
import MenuWrapper from "../../components/product/MenuWrapper";

const Index = ({ categoryList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;