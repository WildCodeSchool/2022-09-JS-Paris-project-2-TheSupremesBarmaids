import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchRecipeApi from "../../utils/fetchRecipeApi";

import Commentaire from "./Commentaire";
import Recipe from "./Recipe";
import ListLink from "../../components/ListLink";

function MainDetails() {
  const [recipeContent, setRecipeContent] = useState([]); // Object that contains the cocktail's info
  const [ingredients, setIngredients] = useState([]); // Array that contains the cocktail's ingredients
  const { slugCocktail } = useParams(); // Bring back the API key from the URL

  // Organize data received from API
  const mapApi = (data) => {
    setRecipeContent({
      name: data.strDrink,
      img: data.strDrinkThumb,
      recipe: data.strInstructions,
    });

    const values = [];
    const apiKeys = Object.keys(data);
    apiKeys.map((element) =>
      element.startsWith("strIngredient") ? values.push(data[element]) : null
    );
    setIngredients(values);
  };

  useEffect(() => {
    // At the mounting phase :
    fetchRecipeApi(slugCocktail).then((resPost) => mapApi(resPost));
  }, []);

  return (
    <main className="mainDetails">
      <Recipe recipeContent={recipeContent} ingredients={ingredients} />
      <div className="listLinkDetails">
        <ListLink />
      </div>
      <Commentaire />
    </main>
  );
}

export default MainDetails;
