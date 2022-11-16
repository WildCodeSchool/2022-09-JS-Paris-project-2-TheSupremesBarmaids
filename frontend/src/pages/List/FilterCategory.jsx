import { useContext } from "react";
import { PostContext } from "../../services/Context";
import fetchFilterCategoryApi from "../../utils/fetchFilterCategoryApi";

function FilterCategory() {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);

  // CATEGORY FILTERS
  const categoryFilters = [
    "Cocktail",
    "Shot",
    "Coffee_/_Tea",
    "Punch_/_Party Drink",
    "Beer",
    "Soft_Drink",
  ]; // Every filters c=

  const handleClick = (e) => {
    setLoading(true);
    fetchFilterCategoryApi(e)
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
      {categoryFilters.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <a
            href={`#${ele}`}
            className="button"
            onClick={() => handleClick(ele)}
          >
            {ele.replace("_/_", " / ").replace("_", " ")}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterCategory;
