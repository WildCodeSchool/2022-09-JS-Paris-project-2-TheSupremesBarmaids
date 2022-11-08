/* eslint-disable react/prop-types */
function Ingredients({ recipeContent }) {
  return (
    <ul className="recipe__list">
      <li>{recipeContent.strIngredient1}</li>
      <li>{recipeContent.strIngredient2}</li>
      <li>{recipeContent.strIngredient3}</li>
      <li>{recipeContent.strIngredient4}</li>
      <li>{recipeContent.strIngredient5}</li>
      <li>{recipeContent.strIngredient6}</li>
      <li>{recipeContent.strIngredient7}</li>
      <li>{recipeContent.strIngredient8}</li>
      <li>{recipeContent.strIngredient9}</li>
    </ul>
  );
}

export default Ingredients;
