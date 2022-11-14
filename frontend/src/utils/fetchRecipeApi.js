import axios from "axios";

const fetchRecipeApi = async (slugCocktail) => {
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${slugCocktail}`
  );
  return res.data.drinks[0]; // Organize data received from API
};

export default fetchRecipeApi;
