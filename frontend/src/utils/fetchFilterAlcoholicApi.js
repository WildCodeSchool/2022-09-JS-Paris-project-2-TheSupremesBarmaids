const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=";

const fetchFilterAlcoholicApi = async (name) => {
  const response = await fetch(`${API}${name}`);
  const data = await response.json();
  return data.drinks;
};

export default fetchFilterAlcoholicApi;
