import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchFilterIngredientApi from "../../utils/fetchFilterIngredientApi";

function FilterIngredient({ setIsIngredientsOpened }) {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionBlockOpened, setFilterSelected, setSearchTerm } =
    useContext(ToggleContext);

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

  const handleClick = (ingredient) => {
    setLoading(true);
    fetchFilterIngredientApi(ingredient)
      .then((resPosts) => {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      })
      .catch(() => {
        setLoading(false);
        setWrongFetch(true);
      });
    setIsIngredientsOpened(false);
    setIsActionBlockOpened(false);
    setFilterSelected(ingredient);
    setSearchTerm("");
  };

  return (
    <ul className="filter-list">
      {ingredientFilter.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <Link
            to={`#${ele}`}
            className="button"
            onClick={() => handleClick(ele)}
          >
            {ele}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilterIngredient;
