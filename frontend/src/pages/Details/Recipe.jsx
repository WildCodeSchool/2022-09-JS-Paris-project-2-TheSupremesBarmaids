import Stars from "../../components/Stars";
import Ingredients from "./Ingredients";

function Recipe({ recipeContent, ingredients }) {
  return (
    <div className="containerType1 containerType1--padd20">
      <h1 className="pageTitle">{recipeContent.name}</h1>
      <Stars />
      <div className="recipe">
        <div className="recipe__card card">
          <img className="cardImage" src={recipeContent.img} alt="cocktail" />
        </div>
        <div className="recipe__ingredients">
          <h2 className="subTitle">Ingredients</h2>
          <Ingredients ingredients={ingredients} />
        </div>
        <div className="recipe__prepa">
          <h2 className="subTitle">Preparation</h2>
          <p className="recipe__text">{recipeContent.recipe}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
