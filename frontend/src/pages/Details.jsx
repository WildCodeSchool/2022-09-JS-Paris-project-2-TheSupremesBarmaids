import React from "react";
import Footer from "../components/Footer";
import HeaderDetails from "./Details/HeaderDetails";
import MainDetails from "./Details/MainDetails";

function Details() {
  return (
    <div>
      <HeaderDetails />
      <MainDetails />
      <Footer />
    </div>
  );
}

export default Details;
