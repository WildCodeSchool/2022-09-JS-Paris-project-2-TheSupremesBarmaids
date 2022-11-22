import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext, ToggleContext } from "../../services/Context";
import fetchFilterAlcoholicApi from "../../utils/fetchFilterAlcoholicApi";

function FilterAlcohol({ setIsAlcoholicOpened }) {
  const { setPosts, setLoading, setWrongFetch } = useContext(PostContext);
  const { setIsActionBlockOpened, setFilterSelected, setSearchTerm } =
    useContext(ToggleContext);

  // ALCOHOLIC FILTERS
  const alcoholicFilters = ["Alcoholic", "Non_alcoholic", "Optional_alcohol"]; // Every filters a=

  const handleClick = (alcoholic) => {
    setLoading(true);
    fetchFilterAlcoholicApi(alcoholic)
      .then((resPosts) => {
        setPosts(resPosts);
        setLoading(false);
        setWrongFetch(false);
      })
      .catch(() => {
        setLoading(false);
        setWrongFetch(true);
      });
    setIsAlcoholicOpened(false);
    setIsActionBlockOpened(false);
    setFilterSelected(alcoholic.replace("_", " "));
    setSearchTerm("");
  };

  return (
    <ul className="filter-list">
      {alcoholicFilters.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <Link
            to={`#${ele}`}
            className="button"
            onClick={() => handleClick(ele)}
          >
            {ele.replace("_", " ")}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FilterAlcohol;
