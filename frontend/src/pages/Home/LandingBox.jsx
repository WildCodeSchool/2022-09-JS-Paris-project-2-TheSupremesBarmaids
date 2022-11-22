import { motion } from "framer-motion";
import ListLink from "../../components/ListLink";

function LandingBox() {
  return (
    <div className="landingBox">
      <motion.div
        className="landingBox__square"
        initial="visible"
        animate={{
          transform: { translateX: 0.6 },
          transition: { duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <h1 className="landingBox__title">
          <span>The art of</span>
          <span className="landingBox__title__big">Cocktail</span>
        </h1>
        <ListLink />
      </motion.div>
    </div>
  );
}

export default LandingBox;
