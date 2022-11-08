/* eslint-disable react/prop-types */
function Recipe({ recipeContent }) {
  return (
    <div>
      <div className="recipe">
        <div className="note"> note</div>
        <div className="recipe__rectangle">
          <h1 className="recipe__title linedTitle">
            <span className="linedTitle__text">{recipeContent.strDrink}</span>
          </h1>
        </div>
      </div>
      <div className="detail">
        <p className="detail__title">Ingredients</p>
        <ul className="ingredientsList">
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
        <p className="detail__title">Recette</p>

        <p>{recipeContent.strInstructions}</p>
      </div>
    </div>
  );
}

export default Recipe;
