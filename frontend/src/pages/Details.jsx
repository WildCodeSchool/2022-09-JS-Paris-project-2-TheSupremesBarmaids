import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import HeaderDetails from "./Details/HeaderDetails";
import MainDetails from "./Details/MainDetails";

function Details() {
  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.5 } }}
      exit={{ width: "-100%", transition: { duration: 0.5 } }}
    >
      <HeaderDetails />
      <MainDetails />
      <Footer />
    </motion.div>
  );
}

export default Details;
