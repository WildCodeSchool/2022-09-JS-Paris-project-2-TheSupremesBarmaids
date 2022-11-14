import fetchFilterAlcoholicApi from "../../utils/fetchFilterAlcoholicApi";

function FilterAlcohol({ renderApi }) {
  // ALCOHOLIC FILTERS
  const alcoholicFilters = ["Alcoholic", "Non_alcoholic", "Optional_alcohol"]; // Every filters a=

  return (
    <ul className="filter-list">
      {alcoholicFilters.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <a
            href="#alcohol_filter"
            className="button"
            onClick={() =>
              fetchFilterAlcoholicApi(ele).then((resPosts) =>
                renderApi(resPosts)
              )
            }
          >
            {ele.replace("_", " ")}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterAlcohol;
