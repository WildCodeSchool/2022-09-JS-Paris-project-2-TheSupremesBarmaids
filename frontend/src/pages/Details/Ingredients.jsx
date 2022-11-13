import { PropTypes } from "prop-types";

function Ingredients({ ingredients }) {
  return (
    <ul className="recipe__list">
      {/* Filter null values in ingredients array before map */}
      {ingredients
        .filter((ingredient) => ingredient !== null)
        .map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
    </ul>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
