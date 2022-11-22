import { motion } from "framer-motion";
import Intro from "./Intro";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import ListLink from "../../components/ListLink";
import DoubleLink from "./DoubleLink";

function Editorial() {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="edito containerType1"
    >
      <Intro />

      <div className="edito__wrappLink">
        <ListLink />
      </div>

      <h2 className="linedTitle">
        <span className="linedTitle__text">Discover, shake and taste</span>
      </h2>

      <Section1 />
      <Section2 />
      <Section3 />

      <DoubleLink />
    </motion.div>
  );
}

export default Editorial;
