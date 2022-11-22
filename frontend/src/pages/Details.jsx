import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import HeaderDetails from "./Details/HeaderDetails";
import MainDetails from "./Details/MainDetails";

function Details() {
  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      <HeaderDetails />
      <MainDetails />
      <Footer />
    </motion.div>
  );
}

export default Details;
