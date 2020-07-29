import React, { useState } from "react";
import TopNavbar from "./home/topnavbar";
import Banner from "./home/banner";
import HomeBody from "./home/homebody";
import Footer from "./home/footer";

function Home() {
  return (
    <React.Fragment>
      <TopNavbar />
      <Banner />
      <HomeBody />
      <Footer />
    </React.Fragment>
  );
}
export default Home;
