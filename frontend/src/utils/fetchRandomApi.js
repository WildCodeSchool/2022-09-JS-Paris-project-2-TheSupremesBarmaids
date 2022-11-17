const API = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const fetchRandomApi = async () => {
  const response = await fetch(API);
  const data = await response.json();
  return data.drinks[0];
};

export default fetchRandomApi;
