import { useEffect } from "react";
import Footer from "../components/Footer";
import HeaderDetails from "./Details/HeaderDetails";
import MainDetails from "./Details/MainDetails";

function Details() {
  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  return (
    <>
      <HeaderDetails />
      <MainDetails />
      <Footer />
    </>
  );
}

export default Details;
