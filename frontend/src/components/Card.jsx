import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
import PropTypes from "prop-types";

function Card({ cocktail }) {
  // Splitting();
  return (
    <div className="cardContainer">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        transition={{ duration: 0.8, delay: 0.5 }}
        className="card"
      >
        <img
          src={
            cocktail.strDrinkThumb !== "N/A"
              ? cocktail.strDrinkThumb
              : "https://via.placeholder.com/400"
          }
          alt={cocktail.strDrink}
        />

        <div className="cardText">
          <h2>{cocktail.strAlcoholic}</h2>
          <button type="button" className="custom-btn btn-15">
            Detail
          </button>
        </div>
        <h3 className="cardTitle">{cocktail.strDrink}</h3>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  // eslint-disable-next-line react/require-default-props
  cocktail: PropTypes.shape({
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }),
};
export default Card;
