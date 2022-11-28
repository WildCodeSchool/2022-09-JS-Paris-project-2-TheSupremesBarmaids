import { motion } from "framer-motion";
import HeaderHome from "./Home/HeaderHome";
import MainHome from "./Home/MainHome";
import Footer from "../components/Footer";

function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <HeaderHome />
      <MainHome />
      <Footer />
    </motion.div>
  );
}

export default Home;
