import axios from "axios";
import { useEffect, useState } from "react";
import Commentaire from "./Commentaire";
import Recipe from "./Recipe";
import ListLink from "../../components/ListLink";

function MainDetails() {
  const [recipeContent, setRecipeContent] = useState([]); // Object that contains the cocktail's info

  useEffect(() => {
    // At the mounting phase :

    const searchParam = () => window.location.pathname; // get pathname in the URL (/recipe/*cocktail name*)
    const idSearchParam = searchParam().split("/"); // split the URL to get only the strDrink (*cocktail name*)
    const fetchRecipe = async () => {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${idSearchParam[2]}`
      );
      setRecipeContent(res.data.drinks[0]); // setRecipeContent with API's response
    };

    fetchRecipe();
  }, []);
  return (
    <main className="mainDetails">
      <Recipe recipeContent={recipeContent} />
      <div className="listLinkDetails">
        <ListLink />
      </div>
      <Commentaire />
    </main>
  );
}

export default MainDetails;
