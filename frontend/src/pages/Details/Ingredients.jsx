/* eslint-disable react/prop-types */
function Ingredients({ recipeContent }) {
  return (
    <ul className="recipe__list">
      {recipeContent.strIngredient1 === null ? null : (
        <li>{recipeContent.strIngredient1}</li>
      )}
      {recipeContent.strIngredient2 === null ? null : (
        <li>{recipeContent.strIngredient2}</li>
      )}
      {recipeContent.strIngredient3 === null ? null : (
        <li>{recipeContent.strIngredient3}</li>
      )}
      {recipeContent.strIngredient4 === null ? null : (
        <li>{recipeContent.strIngredient4}</li>
      )}
      {recipeContent.strIngredient5 === null ? null : (
        <li>{recipeContent.strIngredient5}</li>
      )}
      {recipeContent.strIngredient6 === null ? null : (
        <li>{recipeContent.strIngredient6}</li>
      )}
      {recipeContent.strIngredient7 === null ? null : (
        <li>{recipeContent.strIngredient7}</li>
      )}
      {recipeContent.strIngredient8 === null ? null : (
        <li>{recipeContent.strIngredient8}</li>
      )}
      {recipeContent.strIngredient9 === null ? null : (
        <li>{recipeContent.strIngredient9}</li>
      )}
      {recipeContent.strIngredient10 === null ? null : (
        <li>{recipeContent.strIngredient10}</li>
      )}
    </ul>
  );
}

export default Ingredients;
