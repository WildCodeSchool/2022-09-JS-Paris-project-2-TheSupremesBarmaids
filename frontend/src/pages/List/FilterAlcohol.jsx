import fetchFilterAlcoholicApi from "../../utils/fetchFilterAlcoholicApi";

function FilterAlcohol({ renderApi }) {
  // ALCOHOLIC FILTERS
  const alcoholicFilters = ["Alcoholic", "Non_alcoholic", "Optional_alcohol"]; // Every filters a=
  return alcoholicFilters.map((ele) => (
    // Create a div for every alcoholic filters
    <div className="btn1" key={ele}>
      <a
        href="#alcohol_filter"
        className="button"
        onClick={() =>
          fetchFilterAlcoholicApi(ele).then((resPosts) => renderApi(resPosts))
        }
      >
        {ele.replace("_", " ")}
      </a>
    </div>
  ));
}

export default FilterAlcohol;
