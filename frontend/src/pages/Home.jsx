import React from "react";
import Footer from "../components/Footer";
import HeaderHome from "./Home/HeaderHome";
import MainHome from "./Home/MainHome";

function Home() {
  return (
    <div>
      <HeaderHome />
      <MainHome />
      <Footer />
    </div>
  );
}

export default Home;
