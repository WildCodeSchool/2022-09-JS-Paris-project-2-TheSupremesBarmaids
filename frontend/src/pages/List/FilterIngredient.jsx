import { useContext } from "react";
import { PostContext } from "../../services/Context";
import fetchFilterIngredientApi from "../../utils/fetchFilterIngredientApi";

function FilterIngredient() {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);

  // INGREDIENT FILTERS
  const ingredientFilter = [
    "Gin",
    "Scotch",
    "Tequila",
    "Vodka",
    "Whiskey",
    "Ricard",
    "Milk",
    "Coffee",
    "Lemon",
    "Yoghurt",
  ]; // Every filters i=

  const handleClick = (e) => {
    setLoading(true);
    fetchFilterIngredientApi(e)
      .then((resPosts) => {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      })
      .catch(() => {
        setLoading(false);
        setWrongFetch(true);
      });
  };

  return (
    <ul className="filter-list">
      {ingredientFilter.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <a
            href={`#${ele}`}
            className="button"
            onClick={() => handleClick(ele)}
          >
            {ele}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterIngredient;
