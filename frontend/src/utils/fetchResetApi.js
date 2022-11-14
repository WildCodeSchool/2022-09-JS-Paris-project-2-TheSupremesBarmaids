const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";

const fetchResetApi = async () => {
  const response = await fetch(API);
  const data = await response.json();
  return data.drinks;
};

export default fetchResetApi;
