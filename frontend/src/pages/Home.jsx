import React from "react";
import HeaderHome from "./Home/HeaderHome";
import LandingBox from "./Home/LandingBox";
import MainHome from "./Home/MainHome";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <HeaderHome />
      <LandingBox />
      <MainHome />
      <Footer />
    </div>
  );
}

export default Home;
