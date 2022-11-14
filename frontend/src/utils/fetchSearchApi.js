const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const fetchSearchApi = async (name) => {
  const response = await fetch(`${API}${name}`);
  const data = await response.json();
  return data.drinks;
};

export default fetchSearchApi;
