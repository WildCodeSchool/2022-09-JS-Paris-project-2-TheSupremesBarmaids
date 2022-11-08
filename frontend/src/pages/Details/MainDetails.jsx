import axios from "axios";
import { useEffect, useState } from "react";
import Commentaire from "./Commentaire";
import Recipe from "./Recipe";
import ReturnList from "./ReturnList";

function MainDetails() {
  const [recipeContent, setRecipeContent] = useState([]); // Object that contains the cocktail's info

  useEffect(() => {
    // At the mounting phase :

    const searchParam = () => window.location.pathname; // get pathname in the URL

    const idSearchParam = searchParam().slice(-5); // slice the URL to get only the iDDrink | change with strDrink

    const fetchRecipe = async () => {
      // call API avec iDDrink
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idSearchParam}`
      );
      setRecipeContent(res.data.drinks[0]); // setRecipeContent with API's response
    };

    fetchRecipe();
  }, []);
  return (
    <main className="mainDetails">
      <ReturnList />
      <Recipe recipeContent={recipeContent} />
      <Commentaire />
    </main>
  );
}

export default MainDetails;
