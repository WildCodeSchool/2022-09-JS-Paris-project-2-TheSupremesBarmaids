import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchFilterCategoryApi from "../../utils/fetchFilterCategoryApi";

function FilterCategory({ setIsCategoryOpened }) {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionBlockOpened, setFilterSelected, setSearchTerm } =
    useContext(ToggleContext);

  // CATEGORY FILTERS
  const categoryFilters = [
    "Cocktail",
    "Shot",
    "Coffee_/_Tea",
    "Punch_/_Party Drink",
    "Beer",
    "Soft_Drink",
  ]; // Every filters c=

  const handleClick = (category) => {
    setLoading(true);
    fetchFilterCategoryApi(category)
      .then((resPosts) => {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      })
      .catch(() => {
        setLoading(false);
        setWrongFetch(true);
      });
    setIsCategoryOpened(false);
    setIsActionBlockOpened(false);
    setFilterSelected(category.replace("_/_", " / ").replace("_", " "));
    setSearchTerm("");
  };

  return (
    <ul className="filter-list">
      {categoryFilters.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <Link
            to={`#${ele}`}
            className="button"
            onClick={() => handleClick(ele)}
          >
            {ele.replace("_/_", " / ").replace("_", " ")}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilterCategory;
